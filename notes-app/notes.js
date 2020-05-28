const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note Added!");
  } else {
    console.log("No Recored token");
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  console.log("notes", notes);
  const matching = notes.filter((e) => e.title !== title);

  if (matching.length < notes.length) {
    saveNotes(matching);
  } else {
    console.log("error");
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes: "));
  notes.forEach((note) => {
    console.log(chalk.yellow.bold(note.title + ": " + note.body));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const search = notes.find((note) => note.title === title);
  if (search) {
    console.log(chalk.inverse(search.title));
    console.log(search.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJsON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
