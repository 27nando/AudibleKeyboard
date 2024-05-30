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

  let q = new Button(width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let w = new Button(2*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), bonus1);
  let e = new Button(3*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), bonus2);
  let r = new Button(4*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let t = new Button(5*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let y = new Button(6*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let u = new Button(7*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let i = new Button(8*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let o = new Button(9*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);
  let p = new Button(10*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), arcade);

  let a = new Button(width/9, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let s = new Button(20*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), lock);
  let d = new Button(29*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), magic);
  let f = new Button(38*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let g = new Button(47*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let h = new Button(56*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let j = new Button(65*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let k = new Button(74*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);
  let l = new Button(83*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), fairy);

  let z = new Button(width/6, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), notify);
  let x = new Button(17*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), retro);
  let c = new Button(23*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), score);
  let v = new Button(29*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), notify);
  let b = new Button(35*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), notify);
  let n = new Button(41*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), notify);
  let m = new Button(47*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), notify);

  buttons_top.push(q);
  buttons_top.push(w);
  buttons_top.push(e);
  buttons_top.push(r);
  buttons_top.push(t);
  buttons_top.push(y);
  buttons_top.push(u);
  buttons_top.push(i);
  buttons_top.push(o);
  buttons_top.push(p);

  buttons_middle.push(a);
  buttons_middle.push(s);
  buttons_middle.push(d);
  buttons_middle.push(f);
  buttons_middle.push(g);
  buttons_middle.push(h);
  buttons_middle.push(j);
  buttons_middle.push(k);
  buttons_middle.push(l);

  buttons_bottom.push(z);
  buttons_bottom.push(x);
  buttons_bottom.push(c);
  buttons_bottom.push(v);
  buttons_bottom.push(b);
  buttons_bottom.push(n);
  buttons_bottom.push(m);
}

function mousePressed() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].clicked(mouseX, mouseY);
  }
  for (let i = 0; i < buttons_middle.length; i++) {
    buttons_middle[i].clicked(mouseX, mouseY);
  }
  for (let i = 0; i < buttons_bottom.length; i++) {
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].y = height/3.5;
  }
  for (let i = 0; i < buttons_middle.length; i++) {
    buttons_middle[i].y = height/2;
  }
  for (let i = 0; i < buttons_bottom.length; i++) {
    buttons_bottom[i].y = 2*height/2.8;
  }
}

function draw() {
  background(204, 255, 229);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); 
  }
  for (let i = 0; i < buttons_middle.length; i++) {
    buttons_middle[i].show();
  }
  for (let i = 0; i < buttons_bottom.length; i++) {
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
    rect((this.x - 50), this.y, this.w, 25);

    fill(this.accent); 
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color); 
    arc(this.x, (this.y + 25), this.w, this.h, TWO_PI, PI);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w/2) {
      this.y = this.y - 10;
      this.song.play();
    }
  }
}

