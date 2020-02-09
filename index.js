window.addEventListener("load", () =>{
    const sounds = document.querySelectorAll(".sound");
    const blocks = document.querySelectorAll(".blocks div");
    const visual = document.querySelector(".visual");
    const colours = [
        "#60d394",
        "#d36060", 
        "#c060d3", 
        "#d3d160", 
        "#4aa9b6", 
        "#50ad6f"
    ];


    //function to play sounds
    blocks.forEach((block, index) =>{
        block.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });   
    });

    //function to create bubbles
    const createBubble = index => { 
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    };
});