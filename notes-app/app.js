const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Add a new note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is the body of the app",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note!",
  builder: {
    title: {
      describe: "delete a new note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List the notes!",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Search a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv);
