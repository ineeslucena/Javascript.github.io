var m=5;
function setup(){
	createCanvas(192,157);
	background(255);
}
function draw(){
	for(var px=0; px<width; px=px+100){
		for(var py=0; py<height; py=py+60){
			push();
			translate(px,py);
				fill(0,255,0);
				quad(0,0,m*4,m*2,m*4,m*6,0,m*4);
				fill(255,0,0);
				quad(m*4,m*2,m*8,0,m*8,m*4,m*4,m*6);	
			pop();
		}
	}	
}