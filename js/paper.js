class paper{
  constructor(x, y, width,height) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:1,
        density:1.2
    }  
    this.x=x
    this.y=y
    this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.image = loadImage("images/paper.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 5, this.width, this.height);
    pop();
  }
}