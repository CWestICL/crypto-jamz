/*
Go here for more info:
https://mv-swe-docs.netlify.app/notes/extensions/cryptography.html#caesar-shift

The Caesar Shift is produced by rotating the alphabet and swapping the letters of the original message with the rotated alphabet.
If the key is 2, then the original and rotated alphabets are:

abcdefghijklmnopqrstuvwxyz
CDEFGHIJKLMNOPQRSTUVWXYZAB

so a becomes C and b becomes D and so on.

Use `npm run test:caesar` in the terminal to test your solutions
*/


/**
 * Encrypts a msg using the caesar cypher
 * @param {string} msg - the original text in lowercase
 * @param {number} key - the amount by which to rotate the alphabet
 * @returns {string} the encrypted text in UPPERCASE
 */
function caesarEncode (msg, key) {
  const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let alphCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let newMsg = "";

  for (i = 0; i < key; i++) {
    let temp = alphCap.shift();
    alphCap.push(temp);
  }

  //console.log(alphCap);
  
  for (i = 0; i < msg.length; i++) {
    for (x = 0; x < alph.length; x++) {
      if (msg[i] === alph[x]) {
        newMsg += alphCap[x];
      }
    }
    if (msg[i] === " ") {
      newMsg += " ";
    }
  }
  return newMsg;
  
}

/**
 * Decrypts a message which was encrypted using the caesar cypher
 * @param {string} cyp - a message in UPPERCASE which has been encrypted using the caesar cypher 
 * @param {number} key - the key which was used to encrypt the message
 * @returns {string} the decrypted (original) text in lowercase
 */
function caesarDecode (cyp, key) {
  const alphCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let newCyp = "";

  console.log("Key:",key);

  for (i = 0; i < key; i++) {
    let temp = alph.pop();
    console.log("Temp:",temp);
    alph.unshift(temp);
  }

  console.log(alph);
  
  for (i = 0; i < cyp.length; i++) {
    for (x = 0; x < alphCap.length; x++) {
      if (cyp[i] === alphCap[x]) {
        newCyp += alph[x];
      }
    }
    if (cyp[i] === " ") {
      newCyp += " ";
    }
  }
  return newCyp;
}

module.exports = { caesarEncode, caesarDecode }
