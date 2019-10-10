

// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

let previousGamePiece = null

function addGamePiece(selectedElement) {
  // If not clicked, add h1
  if (selectedElement.childElementCount == 0) {
    //create new element
    let newElement = document.createElement('h1')
    if (previousGamePiece === 'x') {
      //add text to element
      newElement.innerHTML = 'o'
      //set previousGamePiece
      previousGamePiece = 'o'
    } else {
      //add text to element
      newElement.innerHTML = 'x'
      //set previousGamePiece
      previousGamePiece = 'x'
    }
    //add h1 as child to selectedElement on page
    selectedElement.appendChild(newElement)
  } else {
    console.log('already clicked')
  }
  console.log('show clicked div', selectedElement)
}

// function getContentsOfSquare(name) {
//   var boxDiv = document.getElementsByClassName(name)[0];
  
//   // if it has been clicked
//   if (boxDiv.childElementCount == 0) {
//     // has not been clicked, return ' '
//     return false
//   } else {
//     return boxDiv.children[0].innerHTML
//   }
// }

  if (document.getElementsByClassName("box1")[0] === 'x')
