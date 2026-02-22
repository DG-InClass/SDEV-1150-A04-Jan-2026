## Student Exercise: TODO App with JSON Server, Forms & Fetch

Build a simple **TODO list** application that uses **JSON Server** as a backend API, an **HTML form** to capture input, and **Fetch API (async/await)** to read/write data. This exercise ties together API concepts (Lesson 15), forms and events (Lessons 10–11), and async fetch (Lesson 16).

### Objective
Create a client-side TODO app that:
- **Lists** todos from a JSON Server API (GET)  
- **Adds** a new todo via an HTML form (POST)  
- **Toggles** a todo's completion state (PATCH)  
- **Deletes** a todo (DELETE)  
- Handles errors and updates the UI dynamically

### Requirements

1. **Create a new project folder**  
   - Install dependencies npm and install JSON Server:
     ```sh
     cd lesson-17-todo
     npm install json-server
     ```

2. **Create a `db.json` file**  
   Include a `todos` collection. Use **string IDs** for consistency with JSON Server defaults:
   ```json
   {
     "todos": [
       { "id": "1", "text": "Learn fetch()", "done": false },
       { "id": "2", "text": "Wire up JSON Server", "done": true }
     ]
   }
   ```

3. **Add scripts to `package.json`**  
   ```json
   {
     ...
     "scripts": {
       "api-server": "json-server --watch db.json --port 3000",
     }
     ...
   }
   ```
   - Run the API server in one terminal: `npm run api-server`  
   - Run your front-end in another terminal: `npm run dev`

4. **Update `index.html` with an HTML form and list container**  
   At minimum:
   ```html
   ...
     <body>
       <h1>TODOs</h1>

       <!-- Add Form -->
       <form id="todo-form">
         <label>
           New Todo
           <input id="todo-input" name="text" type="text" placeholder="What needs to be done?" />
         </label>
         <button type="submit">Add</button>
       </form>

       <!-- List -->
       <ul id="todo-list" aria-live="polite"></ul>
     </body>
   ...
   ```
  NOTE: there are CSS styles for formatting your form elements (see previous lessons) that you can use here. See `public/css/main.css`.

5. **Create `utils.js` and implement fetch-based API functions**  
   Use **async/await** for all API functions. You will need functions to perform the following:
   - Get all TODO items
   - Add new TODO items
   - Edit existing TODO items
   - Delete an existing TODO item
  
   Export each function using a named export.
6. **Edit `main.js` and implement required handler and rendering functions**. Use **async/await** and handle errors with **try/catch**. How you solve this part of the exercise is up to you; apply what you have learned so far in this course. (Render each TODO with a checkbox to inidicate whether the item is "done" or not.)
7. **Test your API interactions**
   - Verify **GET** renders the list from `db.json`.
   - Use the **form** to **POST** a new todo and confirm it appears immediately and in `db.json`.
   - **Toggle** a todo's checkbox to **PATCH** `done` and confirm the change is persisted.
   - **Delete** a todo and verify it disappears and is removed from `db.json`.
   - Use **DevTools --> Network** to observe each request and status code.

8. **Error handling**
   - Stop JSON Server and try loading/adding a todo. Confirm your UI shows a helpful error (not a crash).
   - Try submitting an **empty input** and confirm your form prevents it.
   - (Optional) Simulate a bad endpoint (`/todoz`) and confirm your `res.ok` checks catch it.

### Stretch Goals
- Add filters for All / Active / Completed.  
- Allow inline editing of todos.  
- Show remaining count or progress bar.  
- Add optimistic UI updates.  
- [Stretch stretch]Improve accessibility and ARIA labels.

### Troubleshooting
- **404 on PATCH/DELETE** --> wrong ID or route name (`todos` not `todo`).  
- **Failed to fetch** --> JSON Server not running.  
- **Duplicate entries** --> multiple POST requests on double-submit.  
- **Empty list** --> missing `await` when parsing JSON.
