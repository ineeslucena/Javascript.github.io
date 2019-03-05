var muntanya;
var m=5;
function setup(){
	createCanvas(192,157);
	background(255);
	muntanya = new Motiu();
}
function draw(){
	muntanya.display(100,100,30,30,color(0,255,0),color(100,100,200));
}
class Motiu{
	display(amp, alt, sx, sy, c, cq){
		for(var px=0; px<amp; px=px+sx){
			for(var py=0; py<alt; py=py+sy){
				push();
				translate(px,py);
					fill(c);
					quad(0,0,m*4,m*2,m*4,m*6,0,m*4);
					fill(cq);
					quad(m*4,m*2,m*8,0,m*8,m*4,m*4,m*6);
				pop();
			}
		}
	}
}