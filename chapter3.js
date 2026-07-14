const paragraphs = [

`Dear Schatz,`,

`I don't think any amount of photographs could ever capture everything this friendship has meant to me.`,

`Every picture you've seen before are the memories I might lose from my gallery but will carry in my heart till my last breath.`,

`I never thought that we would end up being each other's favourite person in the room but now I am glad that we crossed paths and walked this far together! The days and moments we spent together... those philosophical conversations we had at midnight will always be my safe place in the darkest days.`,

`Trust me when I say that I have never met a person like you. The way you understand situations... the seriousness of today's world... it's something that I admire and I wish that one day I will at least learn those good things from you... and also make you a bit free. You are the best person one can have in life... you teach and learn things... that's your gift... wait... YOU are a gift yourself. And I promise that I will take care of you and this bond we have.`,

`You know how much I love your eyes, right? They are the perfect shade of brown I've ever seen. Don't ever let their shine dim or I'LL KILL YOU! ❤️`,

`Love, Nimisha!😗`

];

const ids = ["p1","p2","p3","p4","p5","p6","p7"];

let paragraphIndex = 0;
let charIndex = 0;

function typeParagraph(){

    if(paragraphIndex >= paragraphs.length){

    setTimeout(() => {

        const ending = document.createElement("p");

        ending.className = "ending";

        ending.innerHTML = "Happy Birthday, Babe. ❤️";

        document.querySelector(".letter").appendChild(ending);

    }, 1500);

    return;
}

    let element = document.getElementById(ids[paragraphIndex]);

    if(charIndex < paragraphs[paragraphIndex].length){

        element.innerHTML += paragraphs[paragraphIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeParagraph,35);

    }

    else{

        paragraphIndex++;

        charIndex=0;

        setTimeout(typeParagraph,700);

    }

}

window.onload = function(){

    setTimeout(function(){

        document.querySelector(".paper").classList.add("show");

        setTimeout(function(){

            typeParagraph();

        },1000);

    },2000);

};

