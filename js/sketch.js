// '': empty; 'o': zero; 'x': cross
let grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let players = ['o', 'x'];
let currentPlayer;

function setup() {
  createCanvas(400, 400);
  currentPlayer = random(players);
}

function draw() {
  background(220);
  let w = width/3;
  let h = height/3;

  // draw lines
  strokeWeight(1);
  for(let i=1; i<3; i++){
    line(w*i, 0, w*i, height);
    line(0, h*i, width, h*i);
  }

  // current grid situation
  textSize(32);
  strokeWeight(2);
  for(let row=0; row<3; row++){
    for(let col=0; col<3; col++){
      let x = w*col + w/2;
      let y = h*row + h/2;
      // console.log(floor(x) + ", " + floor(y));
      let cellContent = grid[row][col];
      // console.log(cellContent);
      if(cellContent == players[0]){
        noFill();
        ellipse(x,y,w/2);
      }else if(cellContent == players[1]){
        let off = w/4;
        line(x-off, y-off, x+off, y+off);
        line(x+off, y-off, x-off, y+off);
      }
    }
  }
}

function mousePressed() {
  let w = width/3;
  let h = height/3;
  let xVal = floor(mouseX/w), yVal = floor(mouseY/h);
  if(grid[yVal][xVal] == ''){
    grid[yVal][xVal] = currentPlayer;
    currentPlayer = (currentPlayer == players[0]) ? players[1] : players[0];
  }
}
