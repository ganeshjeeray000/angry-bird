class Log extends Baseclass
{
    constructor(x, y, height, angle)
    {
        super(x,y,height,angle)
       this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, this.bodyA);
    }

};