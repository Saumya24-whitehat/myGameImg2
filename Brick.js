class Bricks {
    constructor(){
        
        this.body=Bodies.rectangle(750,550,75,50);
        World.add(world,this.body);

        this.image=loadImage("brick.png");
        
    }
    display(){
        var angle = this.body.angle;
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,75,50);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 75,50);
        pop();
    }
    move(){
        this.body.velocity.x=-1;
    }
}