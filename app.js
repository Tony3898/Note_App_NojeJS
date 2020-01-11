// requiring
const yargs = require("yargs");
const notes = require("./notes");

//setting up yarn for different

yargs.command({
    command: "add",
    describe: "Adding new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Removing note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log("List all notes");
    }
})

yargs.command({
    command: "read",
    describe: "Reading notes",
    handler: () => {
        console.log("Reading Notes");
    }
})


yargs.parse();