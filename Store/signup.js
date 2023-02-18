const formValidation = () => {
    let returnVal = true;
    const name = document.getElementById("fullName");
    const password = document.getElementById("password");
    if (name.value.trim() == "") {
        // alert("");
        name.style.borderColor = "red";
        document.getElementById("errmsgName").innerHTML = "*name is empty";
        return returnVal = false;
    }else if(password.value.trim() == "") {
        // alert("password is empty");
        document.getElementById("errmsgPassword").innerHTML = "*Password is empty";
        return returnVal =  false;
    }else if(password.value.trim().length < 5 ) {
        document.getElementById("errmsgPassword").innerHTML = "*password must be longer than 6 characters";
        // alert("");
        return returnVal =  false;
    }else {
        alert("Congrates! You are register Successfully");
        return returnVal;
    }
}

function saveData() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    
    const user = {
        name: fullName,
        email: email,
        number: number,
        password: password,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(user, json);
}