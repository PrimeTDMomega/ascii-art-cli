const readline = require('readline');
const figlet = require('figlet');
const fs = require('fs');

// Function to get user input
function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

// Main function to convert text to ASCII and save to a file
async function convertTextToASCII() {
  try {
    // Get user input
    const textToConvert = await getUserInput('Enter the text you want to convert to ASCII art: ');

    // Convert text to ASCII art
    figlet(textToConvert, function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }

      // Save ASCII art to a file
      const fileName = 'ascii_art.txt';
      fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`ASCII art saved to ${fileName}`);
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function
convertTextToASCII();
