const beginBtn = document.getElementById("beginBtn")
beginBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "Chapter1.html";

    }, 800);

});