import http from 'http';

let requestCount = 0;

http.createServer((req, res) => {
  requestCount += 1;
  console.log(`Received request #${requestCount} at URL: ${req.url}`);

  // Simulate an asynchronous operation (e.g., reading a file or database call)
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello! You are request #${requestCount}\n`);
    console.log(`Responded to request #${requestCount}`);
  }, 1000);

  console.log(`Handler for request #${requestCount} has returned to the event loop`);
}).listen(3000);
