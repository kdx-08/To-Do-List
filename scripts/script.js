let eventData = JSON.parse(localStorage.getItem('todo-list-items'));
if (eventData == null) {
    console.log("null");
    eventList = [];
}
else {
    eventList = eventData.values;
}

function addEvent() {
    const item = document.querySelector("#todo-item").value;
    const date = document.querySelector("#todo-date").value;
    let newEvent = {
        name: item,
        date: date,
    };
    eventList.push(newEvent);
    localStorage.setItem('todo-list-items', JSON.stringify({ values: eventList }));
    document.querySelector('#todo-item').value = '';
    document.querySelector("#todo-date").value = '';
    displayItems();
}

function deleteEvent(index) {
    eventList.splice(index, 1);
    localStorage.setItem('todo-list-items', JSON.stringify({ values: eventList }));
    displayItems();
}

function displayItems() {
    let content = '';
    for (let i = 0; i < eventList.length; i++) {
        let html = `
            <div>${eventList[i].name}</div>
            <div>${eventList[i].date}</div>
            <button id="delete-button" onclick='deleteEvent(${i})'>Delete</button>
        `;
        content += html;
    }
    document.querySelector('.todo-content').innerHTML = content;
}

displayItems();