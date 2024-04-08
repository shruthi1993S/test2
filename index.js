class Person{
    constructor()
    {
    this.name="shruthi"
    this.age=30
    this.education="Master of Engineering-ECE"
    this.location="Coimbatore"
    
    }
getdetails()
{
   return(`Name : ${this.name}, Age: ${this.age}, Education: ${this.education},Location: ${this.location}`);
}
    
}
      
var obj=new Person()
console.log(obj.getdetails())