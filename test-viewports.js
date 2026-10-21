const { spawn } = require('child_process');
const fs = require('fs');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  (process.env.LOCALAPPDATA || '') + '\\Google\\Chrome\\Application\\chrome.exe'
];

const chromePath = chromePaths.find(p => { try { return fs.existsSync(p); } catch { return false; } });

if (!chromePath) {
  console.log('Chrome not found, skipping viewport test.');
  process.exit(0);
}

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--no-sandbox',
  '--disable-gpu',
  'about:blank'
]);

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function checkViewports() {
  await sleep(2500);

  const listRes = await fetch('http://127.0.0.1:9223/json/list');
  const tabs = await listRes.json();
  const wsUrl = tabs[0].webSocketDebuggerUrl;

  const ws = new WebSocket(wsUrl);

  let id = 1;
  const pending = new Map();

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  };

  await new Promise(r => { ws.onopen = r; });

  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    pending.set(curId, resolve);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3001' });
  await sleep(3000);

  const widths = [375, 768, 1024, 1440];
  for (const w of widths) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: w,
      height: 900,
      deviceScaleFactor: w <= 768 ? 2 : 1,
      mobile: w <= 768,
    });
    await sleep(600);

    const evalRes = await send('Runtime.evaluate', {
      expression: 'JSON.stringify({ iw: window.innerWidth, sw: document.documentElement.scrollWidth, bsw: document.body.scrollWidth })',
      returnByValue: true
    });

    const val = JSON.parse(evalRes.result.value);
    const hasHScroll = val.sw > val.iw || val.bsw > val.iw;
    console.log(`W=${w}px: innerWidth=${val.iw}, docScrollWidth=${val.sw}, bodyScrollWidth=${val.bsw} -> ${hasHScroll ? '❌ HORIZONTAL SCROLL' : '✅ PASS (no h-scroll)'}`);
  }

  ws.close();
  chrome.kill();
}

checkViewports().catch(e => {
  console.error('Error:', e.message);
  chrome.kill();
});
