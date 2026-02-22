import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Parse method and URL
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    // Serve a static HTML file at the root path
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Server error');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });

  } else if (method === 'GET' && url === '/api/data') {
    // Serve JSON data at /api/data
    const data = {
      message: 'Hello from the API!',
      timestamp: Date.now()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

  } else {
    // Fallback for any other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});