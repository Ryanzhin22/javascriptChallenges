const game = document.querySelector(".game")
const resetGame = document.querySelector(".resetGame")

const emojis = ['😀','😀','😁','😁','🥳','🥳','😭','😭','😼','😼','😡','😡','😘','😘','🥶','🥶'];
const shuffleEmojis = emojis.sort(()=>(Math.random() - .5))

for(var i=0 ; i < emojis.length ; i++){
    const emojiBox = document.createElement("div")
    emojiBox.setAttribute("class", "emojiBox")
    emojiBox.innerText = emojis[i]
    emojiBox.addEventListener("click",()=>{
        emojiBox.classList.add("openBox")
        let selectedBox = [...document.querySelectorAll(".openBox")]
        setTimeout(() => {     
            if(selectedBox.length > 1){
                if(selectedBox[0].innerText == selectedBox[1].innerText){
                    selectedBox[0].classList.add("boxMatch")
                    selectedBox[1].classList.add("boxMatch")
    
                    selectedBox[0].classList.remove("openBox")
                    selectedBox[1].classList.remove("openBox")

                    if(document.querySelectorAll(".boxMatch").length == emojis.length){
                        alert("Parabéns, você venceu!")
                    }
                } else {
                    selectedBox[0].classList.remove("openBox")
                    selectedBox[1].classList.remove("openBox")
                }
            }
        }, 500);
    })


    game.appendChild(emojiBox)
}

resetGame.addEventListener("click", ()=>{
    window.location.reload()
})
