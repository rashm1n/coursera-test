var ff = new Object();

ff.radious=10;

ff.getArea = function (){
    var self = this;
    
    var inc = function(){
        self.radious=100;
    };

    inc();
    return ((this.radious)*10);
};

console.log(ff.getArea());

var r = {
    name:"rash",
    age:34,
    cast:"buud"
}

for(var i in r){
    console.log(i);
}







