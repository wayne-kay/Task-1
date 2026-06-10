console.log("hello js!!!.");
alert("Welcome to Asili Quest! Please login to continue.");


let title = document.getElementById("asili-heading");
console.log(title.outerText);


let button = document.getElementById("login-button");
function login(){
    console.log("Login button clicked!");
}

button.addEventListener("click", function() {
    alert("Login successful! Welcome back to Asili Quest!");
}

);




try {
    let response = await fetch("https://dogapi.dog/api/v2/breeds?page%5Bnumber%5D=2&page%5Bsize%5D=10");
}catch (error) {
    console.error("Error fetching data:", error);
}





