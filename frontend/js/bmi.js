function calculateBMI(){

let height=document.getElementById("height").value;

let weight=document.getElementById("weight").value;

let result=document.getElementById("result");

if(height==="" || weight===""){

result.innerHTML="Please enter height and weight.";

result.style.color="yellow";

return;

}

height=height/100;

let bmi=weight/(height*height);

let status="";

if(bmi<18.5){

status="Underweight";

result.style.color="#00BFFF";

}

else if(bmi<25){

status="Normal Weight";

result.style.color="#00FF7F";

}

else if(bmi<30){

status="Overweight";

result.style.color="#FFD700";

}

else{

status="Obese";

result.style.color="#FF3D3D";

}

result.innerHTML=

`Your BMI is <strong>${bmi.toFixed(2)}</strong><br>${status}`;

}