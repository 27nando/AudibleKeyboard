let width = window.innerWidth;
let height = window.innerHeight;

let arcade;
let bonus1;
let bonus2;
let fairy;
let lock;
let magic;
let notify;
let retro;
let score;

function setup() {
  canvas = createCanvas(width, height);

  arcade = loadSound('arcade.wav');
  bonus1 = loadSound('bonus1.wav');
  bonus2 = loadSound('bonus2.wav');
  fairy = loadSound('fairy.wav');
  lock = loadSound('lock.wav');
  magic = loadSound('magic.wav');
  notify = loadSound('notify.wav');
  retro = loadSound('retro.wav');
  score = loadSound('score.wav');
}

function draw() {
  background(204, 255, 229);
}

class Button {
  constructor(x, y, w, h, color, accent, song) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
  }
}

function show() {
  noStroke();

  fill(this.color); 
  rect(this.x, this.y, this.w, this.h);

  fill(this.accent); 
  ellipse(this.x, this.y, this.w, this.h);

  fill(this.color); 
  arc(this.x, this.y, this.w, this.h, TWO_PI, PI);
}

