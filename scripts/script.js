function renderName() {
  const word = document.getElementById("nameInput").value;
  const letters = document.querySelectorAll(".letter");

  if (word.length > letters.length) {
    alert("Too many characters. Max 8 letters supported.");
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    const letterDiv = letters[i];
    const cells = letterDiv.querySelectorAll(".cell");

    // Clear previous color
    cells.forEach(cell => cell.style.backgroundColor = "transparent");

    if (i < word.length) {
      const char = word[i];
      if (!char.match(/[A-Z]/)) {
        alert("Please enter only English letters.");
        return;
      }

      const pattern = letterPatterns[char];
      if (!pattern) continue;

      pattern.forEach((val, idx) => {
        if (val === 1) {
          cells[idx].style.backgroundColor = "yellow"; // you can change to desired color
        }
      });
    }
  }
}


  /*
  for(let i = 0; i < word.length; i++) {
    const char = word[i];

    if(!char.match(/^[a-zA-Z]$/)) {
      alert ("Please enter a valid name with only English letters (A-Z or a-z).");

      return;
    }

    const upperChar = char.toUpperCase();

    const functionName = `handle${upperChar}`;

    if(typeof window[functionName] === "function") {
      window[functionName]();
    } else {
      console.log(`No handler defined for character '${char}'`);
    }
  }
}

function handleA() { console.log("Handling A"); }
function handleB() { console.log("Handling B"); }
function handleC() { console.log("Handling C"); }
function handleD() { console.log("Handling D"); }
function handleE() { console.log("Handling E"); }
function handleF() { console.log("Handling F"); }
function handleG() { console.log("Handling G"); }
function handleH() { console.log("Handling H"); }
function handleI() { console.log("Handling I"); }
function handleJ() { console.log("Handling J"); }
function handleK() { console.log("Handling K"); }
function handleL() { console.log("Handling L"); }
function handleM() { console.log("Handling M"); }
function handleN() { console.log("Handling N"); }
function handleO() { console.log("Handling O"); }
function handleP() { console.log("Handling P"); }
function handleQ() { console.log("Handling Q"); }
function handleR() { console.log("Handling R"); }
function handleS() { console.log("Handling S"); }
function handleT() { console.log("Handling T"); }
function handleU() { console.log("Handling U"); }
function handleV() { console.log("Handling V"); }
function handleW() { console.log("Handling W"); }
function handleX() { console.log("Handling X"); }
function handleY() { console.log("Handling Y"); }
function handleZ() { console.log("Handling Z"); } 
*/