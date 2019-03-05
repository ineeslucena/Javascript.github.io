let flecha = [];
var m=5;
let ample = [80,200,60];
let altura = [80,200,60];
let espaix = [60,20,30];
let espaiy = [8,20,5];
let color = ['green','orange','red'];
let colordos = ['blue','yellow','purple'];
let grossor = [1,2,3,4,5];
let velocitat = [0.5,1,0.2,10,2];
let wx = [0.1,0.2,0.3,0.25,0.4];
let gx = [1,0.2,0.12,0.4,0.08];
let wind;
let gravity;
function setup(){
	createCanvas(192,157);
	background(255);
	for (var i = 0; i < 3; i++) {
		flecha.push(new Motiu());
	}
}
function draw(){
	//background('pink');
	//let wind = new createVector(0.5,1);
	let gravity = new createVector(0.1,2);
	for (let i=0; i<3; i=i+1) {
		console.log(i);
		scale(0.75);
		wind = createVector(wx[i],wx[i]);
		gravity = createVector(gx[i],gx[i]);
		flecha[i].update();
		flecha[i].applyForce(wind);
		flecha[i].applyForce(gravity);
		flecha[i].display(ample[i], altura[i], espaix[i], espaiy[i], color[i], colordos[i]);
		flecha[i].checkEdges();
	}
	//flecha.display(100,100,30,30,color(0,255,0),color(100,100,200));
}
class Motiu{
	constructor(){
		/*this.x = random(193);
		this.y = random(157);*/
		this.mass = 10;
		this.position = new createVector (150,150);
		this.velocity = new createVector (-3,1);
		this.acceleration = new createVector (0,0);
	}
	applyForce(force){
		var f = p5.Vector.div(force, this.mass);
   		this.acceleration.add(f);
	}
	update(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}
	display(amp, alt, sx, sy, c, cq){
		for(var px=0; px<amp; px=px+sx){
			for(var py=0; py<alt; py=py+sy){
				push();
				translate(px+this.position.x-amp,py+this.position.y-alt);
				scale(0.5);
					fill(c);
					quad(0,0,m*4,m*2,m*4,m*6,0,m*4);
					fill(cq);
					quad(m*4,m*2,m*8,0,m*8,m*4,m*4,m*6);
				pop();
			}
		}	
	}
	checkEdges(){
		if (this.position.x > width){
			this.position.x = width;
			this.velocity.x = this.velocity.x*-1;
		} else if (this.position.x < 0){
			this.position.x = 0;
     		this.velocity.x = this.velocity.x*-1;
		}
		if (this.position.y > height){
			this.position.y = height;
			this.velocity.y = this.velocity.y*-1;
		} else if (this.position.y < -100){
			this.position.y = -50;
			this.velocity.y *= -1;
		}
	}
}
