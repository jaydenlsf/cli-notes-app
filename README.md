# CLI Notes App
This is a very simple to use CLI notes taking application.

### Requirements
You need Node.js installed on your device to be able to run the script.

- npm packages used
1. [yargs](https://www.npmjs.com/package/yargs)
2. [chalk](https://www.npmjs.com/package/chalk)

### Instructions
- To add a note:
   - node app.js add --title="TITLE OF YOUR NOTE HERE" --body="CONTENT OF YOUR NOTE"

- To remove a note:
   - node app.js remove --title=" TITLE OF THE NOTE YOU WANT TO DELETE"
   
- To list out all notes:
   - node app.js list
   
- To read a specific note:
   - node app.js --title="TITLE OF THE NOTE YOU WANT TO READ"
