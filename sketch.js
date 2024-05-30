let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let A;
let S;
let D;
let F;
let G;
let H;
let J;
let K;
let L;

function setup() {
  canvas = createCanvas(width, height);

  A = loadSound('A.mp3');
  S = loadSound('S.mp3');
  D = loadSound('D.mp3');
  F = loadSound('F.mp3');
  G = loadSound('G.mp3');
  H = loadSound('H.mp3');
  J = loadSound('J.mp3');
  K = loadSound('K.mp3');
  L = loadSound('L.mp3');


  let q = new Button(width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let w = new Button(2*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let e = new Button(3*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let r = new Button(4*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let t = new Button(5*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let y = new Button(6*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let u = new Button(7*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let i = new Button(8*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let o = new Button(9*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);
  let p = new Button(10*width/11, height/2, 100, 40, color(255, 128, 0), color(250, 149, 0), A);

  let a = new Button(width/9, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), A);
  let s = new Button(20*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), S);
  let d = new Button(29*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), D);
  let f = new Button(38*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), F);
  let g = new Button(47*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), G);
  let h = new Button(56*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), H);
  let j = new Button(65*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), J);
  let k = new Button(74*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), K);
  let l = new Button(83*width/99, 2*height/3, 100, 40, color(205, 125, 208), color(232, 142, 237), L);

  let z = new Button(width/6, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let x = new Button(17*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let c = new Button(23*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let v = new Button(29*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let b = new Button(35*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let n = new Button(41*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);
  let m = new Button(47*width/66, 5*height/6, 100, 40, color(210, 91, 32), color(235, 100, 36), A);

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
    buttons_top[i].y = height/2;
  }
  for (let i = 0; i < buttons_middle.length; i++) {
    buttons_middle[i].y = 2*height/3;
  }
  for (let i = 0; i < buttons_bottom.length; i++) {
    buttons_bottom[i].y = 5*height/6;
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
      this.y = this.y + 10;
      this.song.play();
    }
  }
}

