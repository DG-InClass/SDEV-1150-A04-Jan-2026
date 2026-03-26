import '@picocss/pico/css/pico.blue.min.css';

const theForm = document.querySelector('form');

theForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const html = evt.target.elements.htmlContent.value.trim();
    const container = document.getElementById('output');
    if(html) {
        container.innerHTML = html; // 💣
    } else {
        const template = document.getElementById('default-content');
        const clone = template.content.cloneNode(true);
        const listItems = buildUnorderedList();
        clone.appendChild(listItems);
        container.innerHTML = '';
        container.appendChild(clone);
    }
});

const buildUnorderedList = function() {
    const ulElement = document.createElement('ul');
    let listItem = document.createElement('li');
    let text = document.createTextNode('First Item');
    // Assemble the first item
    listItem.appendChild(text);
    ulElement.appendChild(listItem);
    // Build the second item
    listItem = document.createElement('li');
    listItem.textContent = 'Second Item';
    ulElement.appendChild(listItem);
    // TODO: Build a third <li>
    return ulElement;
}

theForm.addEventListener('click', function(evt) {
    if(evt.target.tagName === 'BUTTON' && evt.target.type === 'button') {
        let value = evt.target.parentElement.querySelector('output').value;
        document.querySelector('input').value = value;
    }
});
