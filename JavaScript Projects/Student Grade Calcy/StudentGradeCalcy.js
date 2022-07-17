const calcy = () =>{
 let webDev = document.getElementById("webdev").value;
 let physics = document.getElementById("phy").value;
 let computer = document.getElementById("comp").value;
 let maths = document.getElementById("math").value;
 let grades;


 //Total Marks are calculated below here;
 let totalGrades = Number(webDev) + Number(physics) + Number(computer) +Number(maths) ;
//  alert(totalGrades);


//Percentage is calculated below here
let percentage = (totalGrades/400) * 100;
// alert(percentage);


//Grade is Calculated Below here;
if(percentage <= 100 && percentage >= 80){
    grades = "A"
}else if(percentage <= 79 && percentage >= 60){
    grades = "B"
}else if(percentage <= 59 && percentage >= 40){
    grades = "C"
}else{
    grades = "Fail"
}

//Total Description is given below here;
if(percentage >= 36.5){
    document.getElementById("showData").innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}% 
    <br> Your grade is ${grades}. You are passed`
}else{
    document.getElementById("showData").innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}% 
    <br> Your grade is ${grades}. You are Fail`
}

}

