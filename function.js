function Display(x){
    console.log(x);
}

Display(500);

function sayHello(){
    console.log("Hello Programmer")
    console.log("Hope you're doing great")
}

sayHello()

function print(str){
    if (str !=''){
        return
    }
    console.log (str)
}
print("suphachai")

function greeting(name){
    console.log("Good morning" + name)
    console.log("Programming is fun, you know")
}
greeting("suphachai")

function doSum(x, y, z){
    console.log("The sum is")
    console.log(x+y+z)
    console.log("The average is:")
    console.log((x+y+z)/3)
}
doSum(10, 20, 30)

function multiply(num1, num2){
    return num1 * num2;
}
let x=2;
let y=3;
console.log("Multiplication of",x,
"and", y, "is", multiply(x, y));