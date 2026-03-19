// Fetch utility function
export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  // Check the status code
  if(!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  // Check the type of content coming back
  const contentType = response.headers.get('content-type');
  if(!contentType || !contentType.toLowerCase().includes('application/json')) {
    // Nope. Not what we expected
    throw new Error(`Request failed - expected JSON data, but received ${contentType}`);
  }

  const data = await response.json();
  return data;
}

// POST utility function
export async function postData(endpoint, payload) {
  // debugger
  const jsonPayload = JSON.stringify(payload);
  const response = await fetch(endpoint, {
    method: 'POST',
    body: jsonPayload,
  });

  if (!response.ok) {
    // Uh-oh, there's a problem
    // Besides the response object's `.status` and `.statusText` (which are
    // the formal HTTP status responses), it is possible that the endpoint
    // server will include a message in the body of the response.
    // The following line is attempting to get any such body details
    // with the assumption that it is plain text.
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} - ${text || response.statusText}`);
  }

  const data = await response.json();
  return data;
}
