// '': empty; 'o': zero; 'x': cross
let grid = [
  ['', '', 'x'],
  ['o', 'x', ''],
  ['', '', 'x'],
];

let players = ['o', 'x'];
let currentPlayer;

function setup() {
  createCanvas(400, 400);
  if(random(1) < 0.5){
    currentPlayer = players[0];
  } else {
    currentPlayer = players[1];
  }
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
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      let x = w*i + w/2;
      let y = h*j + h/2;
      let cellContent = grid[i][j];
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
