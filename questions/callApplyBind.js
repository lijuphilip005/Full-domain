
const obj1={
    name:"liju philip",
     getName(place,age){
      console.log(`${this.name}-${place}-${age}`)
  }
   
}

const obj2={
    name:"aravind"

}

obj1.getName.call(obj2,"kochi",25);
obj1.getName.apply(obj2,["alapuzha",50]);

const bid =obj1.getName.bind(obj2,'kozhikode',45)
bid()