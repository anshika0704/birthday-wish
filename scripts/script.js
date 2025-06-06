function renderName() {

  const word = document.getElementById("nameInput").value;

  const container = document.getElementById("container");

  container.innerHTML = "";

  for (let i = 0; i < word.length; i++) {

    const char = word[i];

    const upperChar = char.toUpperCase();

    if (!char.match(/[a-zA-Z]/)) {
      alert("Please enter only English letters.");
      return;
    }

    const functionName = `handle${upperChar}`;

    if(typeof window[functionName] === "function") {

      const letterDiv = document.createElement("div");
      letterDiv.classList.add("letter");
      container.appendChild(letterDiv);
      window[functionName](letterDiv);

    } else {
      console.log(`No handler defined for character '${char}'`);
    }
  }
}

function handleA(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25];
  createLetter(letterDiv, pattern); 
}

function handleB(letterDiv) { 
  const pattern = [1, 2, 3, 4, 6, 10, 11, 12, 13, 14, 16, 20, 21, 22, 23, 24];
  createLetter(letterDiv, pattern);
}

function handleC(letterDiv) {
  const pattern = [2, 3, 4, 5, 6, 11, 16, 22, 23, 24, 25];
  createLetter(letterDiv, pattern); 
}

function handleD(letterDiv) { 
  const pattern = [1, 2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24];
  createLetter(letterDiv, pattern); 
}

function handleE(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern);
}

function handleF(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 21];
  createLetter(letterDiv, pattern); 
}

function handleG(letterDiv) { 
  const pattern = [2, 3, 4, 5, 6, 11, 13, 14, 15, 16, 18, 20, 21, 22, 23, 25];
  createLetter(letterDiv, pattern); 
}

function handleH(letterDiv) { 
  const pattern = [1, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25];
  createLetter(letterDiv, pattern); 
}

function handleI(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 8, 13, 18, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern);}

function handleJ(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 8, 11, 13, 16, 18, 22, 23];
  createLetter(letterDiv, pattern); 
}

function handleK(letterDiv) { 
  const pattern = [1, 5, 6, 9, 11, 12, 13, 16, 19, 21, 25];
  createLetter(letterDiv, pattern);
}

function handleL(letterDiv) { 
  const pattern = [1, 6, 11, 16, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern); 
}

function handleM(letterDiv) { 
  const pattern = [1, 5, 6, 7, 9, 10, 11, 13, 15, 16, 20, 21, 25];
  createLetter(letterDiv, pattern); 
}

function handleN(letterDiv) { 
  const pattern = [1, 5, 6, 7, 10, 11, 13, 15,16, 19, 20, 21, 25];
  createLetter(letterDiv, pattern);
}

function handleO(letterDiv) { 
  const pattern = [2, 3, 4, 6, 10, 11, 15, 16, 20, 22, 23, 24];
  createLetter(letterDiv, pattern); 
}

function handleP(letterDiv) { 
  const pattern = [1, 2, 3, 4, 6, 10, 11, 12,13, 14, 16, 21];
  createLetter(letterDiv, pattern); 
}

function handleQ(letterDiv) { 
  const pattern = [1, 2, 3, 4, 6, 9, 11, 14, 16, 18, 19, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern); 
}

function handleR(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 16, 19, 21, 25];
  createLetter(letterDiv, pattern); 
}

function handleS(letterDiv) {
  const pattern = [1, 2, 3, 4, 5, 6, 11, 12,13, 14, 15, 20, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern); 
}

function handleT(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 8, 13, 18, 23];
 createLetter(letterDiv, pattern);
}

function handleU(letterDiv) { 
  const pattern = [1, 5, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25];
  createLetter(letterDiv, pattern); 
}

function handleV(letterDiv) { 
  const pattern = [1, 5, 6, 10, 11, 15, 17, 19, 23];
 createLetter(letterDiv, pattern);
}

function handleW(letterDiv) { 
  const pattern = [1, 5, 6, 10, 11, 13, 15, 16, 17, 19, 20, 21, 25];
 createLetter(letterDiv, pattern); 
}

function handleX(letterDiv) { 
  const pattern = [1, 5, 7, 9, 13, 17, 19, 21, 25];
 createLetter(letterDiv, pattern); 
}

function handleY(letterDiv) { 
  const pattern = [1, 5, 7, 9, 13, 17, 21];
 createLetter(letterDiv, pattern);
}

function handleZ(letterDiv) { 
  const pattern = [1, 2, 3, 4, 5, 9, 13, 17, 21, 22, 23, 24, 25];
 createLetter(letterDiv, pattern); 
} 

function createLetter(letterDiv, pattern) {
  for (let i = 1; i <= 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", `cell${i}`);
    if (pattern.includes(i)) {
      cell.classList.add("on");
    }
    letterDiv.appendChild(cell);
  }
}