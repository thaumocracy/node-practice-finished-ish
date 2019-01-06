const yargs = require('yargs');
const _ = require('lodash')

const fs = require('fs');
const notes = require('./notes.js')

const titleOptions = {
    describe : "Title of note",
    demand : true,
    alias : 't'
}

const bodyOptions = {
    describe : "Body of note",
    demand : true,
    alias : 'b'
}

const argv = yargs
.command('add','Add a new note',{
    title:titleOptions,
    body:bodyOptions
})
.command ('list','List of all notes')
.command('delete','Removing a note',{
    title:titleOptions,
})
.command('show','Showing a note',{
    title:titleOptions
})
.help()
.argv;

const command = argv._[0];

if(command === "add"){
    notes.addNote(argv.title,argv.body)
} else if (command === 'list') {
    notes.listNotes();
} else if (command === 'delete'){
    notes.deleteNote(argv.title);
} else if (command === "show"){
    notes.showNote(argv.title)
}
