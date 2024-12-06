function addEntry() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const entry = {
        title: title,
        content: content,
        date: new Date().toISOString()
    };

    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    renderEntries();
}

function renderEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const entriesDiv = document.getElementById('entries');

    entriesDiv.innerHTML = '';
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'entry-title';
        titleDiv.textContent = entry.title;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'entry-content';
        contentDiv.textContent = entry.content;

        const dateDiv = document.createElement('div');
        dateDiv.className = 'entry-date';
        dateDiv.textContent = new Date(entry.date).toLocaleString();

        entryDiv.appendChild(titleDiv);
        entryDiv.appendChild(contentDiv);
        entryDiv.appendChild(dateDiv);

        entriesDiv.appendChild(entryDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderEntries);
