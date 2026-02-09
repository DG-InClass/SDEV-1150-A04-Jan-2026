# Notes from class

If you've never seen the `<form>` and related tags for capturing user-input in HTML pages, these notes will give you a quick introduction.

User input in HTML forms occurs via the `<input>`, `<select>`, and `<textarea>` controls. The most versatile of those is the `<input>` element, because it can be used for simple text, specific types of text (emails, URLs, passwords, etc.), and for checkboxes and radio buttons.

The versatility of the `<input>` tag/element comes through the `type` attribute:

- Defaults to the value `"text"` if the attribute is not present.
- Common text-input values are `"text"`, `"email"`, `"password"`, `"url"` and many others.
- Other types such as `"radio"` and `"checkbox"` will display a circle or square that can be `"checked"` to indicate it is selected.
- Grouping of `"radio"` and `"checkbox"` inputs happens by giving them the same value for their name attribute.

Forms are typically "submitted" through buttons. You can create a button by using either the `<button>` tag or the `<input type="submit">` (or the other input button types of `"button"` or `"reset"`).

Do you know what the stuff after the `?` is in this URL?

```
http://localhost:5173/?fullName=Dan+Gilleland&email=dgilleland%40nait.ca&plan=intermediate&topics=css&topics=html&bio=I+am+an+instructor+at+NAIT.%0D%0AI+teach+mostly+JavaScript+these+days%2C+but+I+am+well+versed+in+SQL%2C+C%23%2C+and+a+few+other+languages+as+well.
```

The `?` in an URL (web address) is the start of what's called a **Query String**.
A Query String is a set of **name/value pairs** of information that gets sent to the browser.
Each name/value pair has the name of the input control followed by `=` and then followed by the value that was entered into that control.
Each name/value pair are separated by an `&` character in the URL.

In this course, we want to "intercept" the form submission event and prevent its default behaviour of sending all that data to the web server.

The `<form>` tag has an attribute called `method` that can be given two values: `"GET"` or a `"POST"`. If the method attribute is missing, then the default way the form submits its data is as a `"GET"` request.
The `"GET"` request/submit method is the one that sends all the data as a **Query String**.

