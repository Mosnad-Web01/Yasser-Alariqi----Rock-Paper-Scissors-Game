let overlay = document.getElementById("overlay")
let rulesCard = document.getElementById("rulesCard")
let closeRuleWindowBtn = document.getElementById("closeRuleWindowBtn")
let rulesButton = document.getElementById("rulesButton")


closeRuleWindowBtn.addEventListener("click" , ()=> {
    overlay.style.display = "none"
    rulesCard.style.display = "none"
})

rulesButton.addEventListener("click" , ()=> {
        overlay.style.display = "block"
    rulesCard.style.display = "flex"
})

