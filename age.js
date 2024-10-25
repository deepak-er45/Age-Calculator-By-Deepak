function calculateAge1(){
    let data = document.getElementById("inputDob").value;
    
     let dob = new Date(data);
     let day = dob.getDate();
     let month = dob.getMonth();
     let year = dob.getFullYear();

    //current date and calculating the difference
    let now = new Date(document.getElementById("cdate").value);
        console.log(now);
        let yearDiff = now.getFullYear() - year;
        let monthDiff = now.getMonth() - month;
        let dateDiff = now.getDate() - day;

        // Calculating the Age
        if (yearDiff < 0){
          console.log("invalid dates");
        }else if (monthDiff > 0) {
            console.log(yearDiff);
        } else if (monthDiff === 0 && dateDiff >= 0) {
            console.log(yearDiff);
        }else {
            yearDiff = yearDiff - 1;
        if (monthDiff <= 0)
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
        }

        if (isNaN(now.getFullYear())) {
            document.getElementById("currentAge").innerHTML = "Please Fill the DOB Find Date.";
            return;
        }

        if (dateDiff < 0) {
            dateDiff = 30 + dateDiff;
            monthDiff -= 1;
        }

        if (yearDiff < 0) {
            document.getElementById("currentAge").innerHTML = "Invalid Date range.";
        }
        else {
            document.getElementById("currentAge").innerHTML = "Your current Age is " + yearDiff + " years " + monthDiff + " months " + dateDiff +" days";
        }
    
}

//for reset button.
function resetDate() {
    document.getElementById("cdate").value = "" ;
    document.getElementById("inputDob").value = "2000-01-01";
}
