const addNoteBtn = document.getElementById('add-note-btn');
const noteInput = document.getElementById('note-input');
const notesContainer = document.getElementById('notes-container');

addNoteBtn.addEventListener('click', addNote);

function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please enter a note!');
        return;
    }

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = noteText;
    noteDiv.appendChild(noteParagraph);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => noteDiv.remove());
    noteDiv.appendChild(deleteBtn);

    notesContainer.appendChild(noteDiv);

    noteInput.value = '';
}