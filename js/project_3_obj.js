let muntanya = [];
var m=5;
let ample = [80,200,60];
let altura = [80,200,60];
let espaix = [60,20,30];
let espaiy = [8,20,5];
let color = ['green','orange','red'];
let colordos = ['blue','yellow','purple'];
function setup(){
	createCanvas(192,157);
	background(255);
	for (var i = 0; i < 3; i++) {
	muntanya.push(new Motiu());
	}
}
function draw(){
	background('pink');
	for (let i=0; i<3; i=i+1) {
		console.log(i);
		muntanya[i].move();
		scale(0.75);
		muntanya[i].display(ample[i], altura[i], espaix[i], espaiy[i], color[i], colordos[i]);
	}
	//muntanya.display(100,100,30,30,color(0,255,0),color(100,100,200));
}
class Motiu{
	constructor(){
		this.x = random(193);
		this.y = random(157);
	}
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	display(amp, alt, sx, sy, c, cq){
		for(var px=0; px<amp; px=px+sx){
			for(var py=0; py<alt; py=py+sy){
				push();
				translate(px+this.x-amp,py+this.y-alt);
				scale(0.5);
					fill(c);
					quad(0,0,m*4,m*2,m*4,m*6,0,m*4);
					fill(cq);
					quad(m*4,m*2,m*8,0,m*8,m*4,m*4,m*6);
				pop();
			}
		}	
	}
}
