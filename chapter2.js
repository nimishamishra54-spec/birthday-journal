const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");

const lockScreen = document.getElementById("lockScreen");
const journey = document.getElementById("journey");

const message = document.getElementById("message");

unlockBtn.addEventListener("click", unlockJournal);

passwordInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        unlockJournal();

    }

});

function unlockJournal(){

    const password = passwordInput.value.trim().toLowerCase();

    if(password === "schatz"){

        message.style.color = "#6f4e37";
        message.innerHTML = "Welcome back, Schatz. 🤎";

        setTimeout(function(){

            lockScreen.style.opacity = "0";

            setTimeout(function(){

                lockScreen.style.display = "none";

                journey.style.display = "block";

                setTimeout(function(){

                    journey.style.opacity = "1";

                },100);

            },800);

        },1000);

    }

    else{

        message.style.color = "#a55";

        message.innerHTML = "Hmm... that's not the key I'm looking for.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}

const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

faders.forEach((item) => {

    observer.observe(item);

});