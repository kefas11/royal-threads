function showYear(){
document.getElementById("year").innerHTML = new Date().getFullYear();
}

function confirmBooking(){
alert("Appointment Booked Successfully!");
return true;
}

function changeColor(){
document.querySelector("h1").style.color="gold";
}