class Sling{
    constructor(x,y,diameter){
       
        this.body = Bodies.circle(x,y,diameter);
        World.add(world,this.body);
        
        
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(random(1,255),random(101,255),random(201,255));
        circle(0,0,this.diameter);
        pop();
    }
}