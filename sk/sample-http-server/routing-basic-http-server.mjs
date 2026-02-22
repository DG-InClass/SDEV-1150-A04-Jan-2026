import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Parse method and URL
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Index route: Welcome to the home page!');
  } else if (method === 'GET' && url === '/api/data') {
    // Serve JSON data at /api/data
    const data = {
      message: 'Hello from the API!',
      timestamp: Date.now()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});