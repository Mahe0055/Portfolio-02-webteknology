//Button
const button = document.querySelector('button')
console.log(button)
button.addEventListener('click', function() {
    let gender = document.querySelector("#gender");
    let text = gender.options[genderAge.selectedIndex].text;
    console.log(text);
    document.guerySelector("input")[0].value;

//Borrowed code from previous assignment about functions.
    function whichGender = gender ;
    if (whichGender === "Female" && age >= 18){
        console.log("You are a female adult and science say that women need a bit more sleep than men, because of hormonal relationship")
    }
    else if(whichGender === "Male" && age >= 18){
        console.log("You are a male adult and science say that men have a bit of less need of sleep, because women's brain is a little more complex")
    }
}


let age = document.querySelector("number");
let number = age.input.number;
console.log(age);
});

    function intervalAge (age) {
        if (age <= 3)
            return "Babies need to sleep ca. 18 hours per day."

        else if (age >= 3 && age <= 5)
            return "Toddlers need to sleep 12 hours per day."

        else if (age >= 6 && age <= 12)
            return "School kids need to sleep 11-14 hours per day."

        else if (age >= 13 && age <= 17)
            return "Teenagers need to sleep 9-11 hours per day."

        else if (age >= 18)
            return "Adults need to sleep 7-9 hours per day."
    }



//Calculator




/*
    const bedtime = input.value;
    const wakeUptime = input.value;
    const lackOfSleep = wakeUptime - bedtime
    inputTag.innerHTML = ;

    }
