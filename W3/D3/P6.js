// Nested object and method 
const Student = {
   fristName:"Prabhas",
   lastName:"gowda",
   scores:{
        math:80,
        science:83
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.fristName +" "+this.lastName;
    },
greet (){
    console.log("Hi,",this.fullname)
}
};
console.log(Student.fullname());