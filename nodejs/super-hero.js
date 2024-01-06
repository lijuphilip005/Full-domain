class SuperHero{
    constructor(name){
        this.name=name;
          
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }

}

const hero=new SuperHero("batman")
module.exports=hero;

module.exports=SuperHero
///for avoding caching for geting new instances;