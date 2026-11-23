import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // 301 Redirect all traffic from techinvention.biz to techinvention.com
    const rawHost = req.headers['x-forwarded-host'] || req.headers.host || '';
    const host = (Array.isArray(rawHost) ? rawHost[0] : rawHost).split(':')[0].toLowerCase();

    if (host === 'techinvention.biz' || host === 'www.techinvention.biz') {
      let targetPath = req.url || '/';
      const [pathWithoutQuery, queryString] = targetPath.split('?');
      if (!pathWithoutQuery.includes('.') && !pathWithoutQuery.endsWith('/')) {
        targetPath = `${pathWithoutQuery}/${queryString ? `?${queryString}` : ''}`;
      }
      const targetUrl = `https://techinvention.com${targetPath}`;
      res.writeHead(301, {
        Location: targetUrl,
      });
      res.end();
      return;
    }

    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
