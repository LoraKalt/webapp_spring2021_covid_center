function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    } else {
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    //DoB Check
    var DoB = document.querySelector("#txtDoB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid = true;

    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth can not be empty.";
        DoB.classList.add("hasError");
        formIsValid = false;
    } else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();

        if (DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of Birth must be before today's date";
            DoB.classList.add("hasError");
            formIsValid = false;

        } else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            DoB.classList.remove("hasError");
        }

    }
    //Country Check
    var ddCountry = document.querySelector("#ddCountry");
    var divCountryError = document.querySelector("#divCountryError")
    if (ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("#txtCountry");
        if (txtCountry.value == "") {
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "At least one country must be listed.";
            txtCountry.classList.add("hasError");
            formIsValid = false;
        } else {
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
            divCountryError.remove("hasError");
        }

    } else {
        if (!divCountryError.classList.contains("invisible")) {
            divCountryError.classList.add("invisible");
            divCountryError.innerHTML = "";
            divCountryError.remove("hasError");
        }


    }

    //Invalid Character check
    var elements = document.getElementsByClassName("char-check");
    var errorMsgs = document.getElementsByClassName("errorMessage");
    var addrElements = document.getElementsByClassName("char-check-addr");
    var addressError = document.getElementById("divAddressError");

    
    var addressInvalid = false;

    var invalidChars = ['&', '<', '>', '#', '!', '`', '"', '~'];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {

                elements[i].classList.add("hasError");
                
                if(errorMsgs[i].id != divAddressError){
                    errorMsgs[i].classList.remove("invisible");
                    errorMsgs[i].innerHTML = "Invalid characters (&, <, >, #, !, `, \", ~) Used";
                }
                formIsValid = false;
            }
        }  
    }

    //Checks address inputs specifically
    for (let i = 0; i < addrElements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (addrElements[i].value.indexOf(invalidChars[j]) != -1) {
                console.log("Hello");
                addrElements[i].classList.add("hasError");
                addressInvalid = true;
                formIsValid = false;
            }
        }  
    }
    console.log(addressInvalid);
    if(addressInvalid){
        addressError.classList.remove("invisible");
        addressError.classList.add("errorMessage");
        addressError.innerHTML = "Invalid characters (&, <, >, #, !, `, \", ~) Used";
    }
    else{
        addressError.classList.add("invisible");
        addressError.classList.remove("errorMessage");
        addressError.innerHTML = "";
    }

    return formIsValid;
}
