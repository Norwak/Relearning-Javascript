// const fs = require('fs');
const fs = require('fs/promises');

// WRITE TO A FILE

// Callback version
// fs.writeFile('file1.txt', 'Hello World', function(err) {
//   if (err) throw err;
//   console.log('File created');
// });

// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));

// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');

// Async/Await
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('File created');
  } catch (error) {
    console.log(error);
  }
}

// createFile('file4.txt', 'Helo World 4');

// READ FROM A FILE

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// readFile('file4.txt');

// DELETE A FILE
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

// deleteFile('file4.txt');

// RENAME A FILE
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} is renamed to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

// renameFile('file4.txt', 'aaaaa.txt');

// CREATE A FOLDER
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

createFolder('javascript');