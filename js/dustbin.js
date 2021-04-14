class dustbin{
    constructor() {
       
        this.image = loadImage("images/dustbingreen.png");
       // World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,620,585,120,150);
      }
}