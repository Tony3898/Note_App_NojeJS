const fs = require('fs');
const chalk = require("chalk");

//initilizaling
const error = chalk.red;
const warning = chalk.keyword('orange');
const success = chalk.green;


const getNotes = () => {
    return "Your Notes ...";
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({title: title, body: body});
        saveNotes(notes);
        console.log(success("Note Added Successfully!!!"));
    } else {
        console.log(error("Note could't added title already exists!!!"));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (note) => {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
};