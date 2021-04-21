class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

  

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    fly(){
        this.throw.bodyA=null;
    }

}