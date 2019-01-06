const fs = require('fs');

var fetchNotes = () => {
    try {
      var notesString = fs.readFileSync('./test.json');
      return JSON.parse(notesString);
    } catch (e) {
      return [];
    }
  };

const saveNotes = (notes) => {
    fs.writeFileSync('./test.json',JSON.stringify(notes))
}

const listNotes = () => {
    const notes = fetchNotes();
    notes.forEach(note => console.log(note.title))    
}

const addNote = (title,body) => {
    const notes = fetchNotes();
    const note = {
        title,
        body
    }
    const duplicate = notes.filter(item => item.title === title)

    if(duplicate.length === 0){
        console.log(duplicate.length)
        notes.push(note);
        console.log(notes)
        saveNotes(notes)
    } else {
        console.log("Please,choose another title")
    }
}

const deleteNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title)
    saveNotes(filteredNotes);
}

const showNote = (title ) => {
    const notes = fetchNotes();
    const showingNote = notes.filter(note => note.title === title)[0];
    if(showingNote){
        console.log('---');
        console.log(`${showingNote.title}`);
        console.log(`${showingNote.body}`);
        console.log('---');
    } else {
        console.log("Note not found")
    }

}

module.exports = {
    fetchNotes,
    addNote,
    listNotes,
    deleteNote,
    showNote,
}