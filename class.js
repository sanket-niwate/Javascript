class A{

    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    add(){
        console.log('sanket');//function
    }
    static sub(){                  
        console.log('static');//static
    }
}

const a=new A("tom",12);

console.log(a);

a.add()//function call with object name
A.sub()//static call with class name


