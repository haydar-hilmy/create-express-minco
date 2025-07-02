import morgan from 'morgan';

// Tambahkan token kustom jika perlu (opsional)
morgan.token('colored-status', (req, res) => {
  const status = res.statusCode;
  if (status >= 500) return '\x1b[31m' + status + '\x1b[0m'; // red
  if (status >= 400) return '\x1b[33m' + status + '\x1b[0m'; // yellow
  if (status >= 300) return '\x1b[36m' + status + '\x1b[0m'; // cyan
  return '\x1b[32m' + status + '\x1b[0m'; // green
});

export const logRequest = morgan((tokens, req, res) => {
  const now = new Date().toISOString();
  const method = `\x1b[1m\x1b[33m${tokens.method(req, res)}\x1b[0m`;
  const url = `\x1b[36m${tokens.url(req, res)}\x1b[0m`;
  const status = tokens['colored-status'](req, res);
  const time = `\x1b[35m${tokens['response-time'](req, res)} ms\x1b[0m`;

  return `\x1b[37m\x1b[40m${now} \x1b[0m ${method} → ${url} → ${status} (${time})`;
});
