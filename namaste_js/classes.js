class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
     area(){
        return this.height * this.width
    }
}

const Rectangle2 = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

const Rectangle3 = class Rectangle4{
    constructor(h,w){
        this.h = h;
        this.w =w;
    }
}

// Like function expressions, class expressions may be anonymous, or have a name 
// that's different from the variable that it's assigned to. However, unlike function 
// declarations, class declarations have the same temporal dead zone restrictions
//  as let or const and behave as if they are not hoisted.

let obj = new Rectangle(10,24);
console.log(obj.area())
