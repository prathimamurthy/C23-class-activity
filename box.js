class box{


constructor(x, y, width, height){


    var box_options ={
        restitution: 1.0
    }

    this.box = Bodies.rectangle(x, y, width, height, box_options);
    this.width = width;
    this.height = height;
    World.add(world,this.box);


}

display(){

    var position = this.box.position;
    rectMode(CENTER);
    rect(position.x,position.y,30,20);
}




}