const fs = require("fs");
const chalk = require("chalk");

// Create a function to add notes
const addNote = (title, body) => {
  const notes = loadNotes();

  // Detect if the title is the same as an existing one
  // Find note inside notes, obtain the note's title, return a boolean value by comparing the title of the existing notes to the argument we input
  // This is similar to a for loop
  const duplicateNote = notes.find((note) => note.title === title);

  // If the title is unique, we append the object's title and body to the end array
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.cyan("New note added"));
  } else {
    console.log(chalk.bgRed(`Title "${title}" already exists.`));
  }
};

// Create a function to remove notes
const removeNote = (title) => {
  const notes = loadNotes();

  // filter() method returns an array that meets the condition
  const notesToKeep = notes.filter((note) => note.title !== title);

  // If the length of notes and notesToKeep arrays are different, that means a note has been erased
  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.cyan(`Note "${title}" has been removed.`));
  } else if (notesToKeep.length === notes.length) {
    console.log(chalk.red(`"${title}" not found.`));
  }
};

// Create a function to list out all the notes
const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.underline.bold("List of your notes:"));
  notes.forEach((note) => console.log(chalk.yellow("- " + note.title)));
};

// Create a function to read a note
const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  // If the title inputted matches one in the json file, display the note
  if (noteToRead) {
    console.log(chalk.black.bgGreen.underline(noteToRead.title + ":"));
    console.log(chalk.yellow(noteToRead.body));
  } else {
    console.log(chalk.red(`Note "${title}" does not exist.`));
  }
};

// Create a function to save or to be more exact, modify notes.json
const saveNotes = (notes) => {
  // Convert the Javascript object to a JSON string before writing to notes.json
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Create a function to load notes from json file
const loadNotes = () => {
  try {
    // Read the file notes.json and the output will be in bytes
    // This also make a notes.json file if it does not already exist
    const dataBuffer = fs.readFileSync("notes.json");
    // Convert data from bytes to string
    const dataJSON = dataBuffer.toString();
    // Parse the JSON string and construct a Javascript object
    return JSON.parse(dataJSON);
  } catch (e) {
    // If there is nothing in notes.json, return an empty array
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
