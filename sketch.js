let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

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

  let b1 = new Button(width/3, height/3.5, 200, 80, color(250, 149, 0), color(255, 128, 0), arcade);
  let b2 = new Button(width/2, height/3.5, 200, 80, color(235, 100, 36), color(210, 91, 32), bonus1);
  let b3 = new Button(2*width/3, height/3.5, 200, 80, color(232, 142, 237), color(205, 125, 208), bonus2);

  let b4 = new Button(width/3, height/2, 200, 80, color(232, 142, 237), color(205, 125, 208), fairy);
  let b5 = new Button(width/2, height/2, 200, 80, color(250, 149, 0), color(255, 128, 0), lock);
  let b6 = new Button(2*width/3, height/2, 200, 80, color(235, 100, 36), color(210, 91, 32), magic);

  let b7 = new Button(width/3, 2*height/2.8, 200, 80, color(235, 100, 36), color(210, 91, 32), notify);
  let b8 = new Button(width/2, 2*height/2.8, 200, 80, color(232, 142, 237), color(205, 125, 208), retro);
  let b9 = new Button(2*width/3, 2*height/2.8, 200, 80, color(250, 149, 0), color(255, 128, 0), score);

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function draw() {
  background(204, 255, 229);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); 
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
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

  show() {
    noStroke();

    fill(this.color); 
    rect((this.x - 100), this.y, this.w, 50);

    fill(this.accent); 
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color); 
    arc(this.x, (this.y + 50), this.w, this.h, TWO_PI, PI);
  }
}

