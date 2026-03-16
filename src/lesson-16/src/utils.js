// Fetch utility function
// ⚠️ NOTE: The version of `fetchData()` that I am showing you differs from the version shown in the `README.md` docs for this demo.
export function fetchJsonData(endpoint) {
    return fetch(endpoint)
            .then(handleResponse);
}

// This is a private function that will do the "details" of handling a server response that is supposed to return JSON information.
/**
 * Checks that the response is ok (status code 200)
 * and returns a JavaScript object from the JSON data.
 * @param {Response} response An HTTP Response from some web server
 * @returns {object}
 */
const handleResponse = function(response) {
    if(!response.ok) {
        // Uh-oh, something went wrong
        let message = `Server responsed with ${response.status} (${response.statusText}). (${response.url})`;
        throw new Error(message); // In JavaScript, throwing an exception will automatically exit the function.
    }
    return response.json(); // Parse the body of the response as though it is JSON and return the JavaScript object/array.
}

// POST utility function

// TODO: Add DELETE function here
