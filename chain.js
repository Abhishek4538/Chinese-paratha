class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:constrainedlog.body,
            stiffness:0.04,
            length:10
        }
      this.chain=Constraint.create(options)
      World.add(world,this.chain)
    }
    display(){
        var pos = this.chain.bodyA.position
        var raddishparatha = this.chain.bodyB.position
        strokeWeight(3)
        line(pos.x,pos.y,raddishparatha.x,raddishparatha.y)


    }
}