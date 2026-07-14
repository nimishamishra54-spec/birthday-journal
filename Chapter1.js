const text =
"Sometimes... the people we least expect become the people we cherish the most.";

const line1 = document.getElementById("line1");

let i = 0;

function typeWriter(){

    if(i < text.length){

        line1.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,65);

    }

    else{
        revealOnScroll();
    }

}

startObserver();

window.onload = () => {

    document.querySelector(".chapter").style.opacity = "1";

    setTimeout(()=>{

        document.querySelector("h1").style.opacity = "1";

    },700);

    setTimeout(typeWriter,1400);

};

function startObserver() {
    const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0
});
}

document.querySelectorAll(".fade").forEach(item=>{

    observer.observe(item);

});

function revealOnScroll() {

    const hiddenItems = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.25

    });

    hiddenItems.forEach(item => observer.observe(item));

}

