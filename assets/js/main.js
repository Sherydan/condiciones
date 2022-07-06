let accordion = document.querySelector("#accordionExample");
let btnAddBorder = document.querySelector("#add-border");
let totalStickers = document.querySelector("#total-stickers");
let passwordCheck = document.querySelector("#password-check");

let stickerInputArray = Array.from(document.querySelectorAll("#sticker-1, #sticker-2, #sticker-3"));
let selectArray = Array.from(document.querySelectorAll("#select-1, #select-2, #select-3"));

accordion.addEventListener("click", (e) => {
  
  if (e.target.id === "add-border") {
    document.querySelector("#honda-nsx-gt3").classList.toggle("add-border");
    if (btnAddBorder.innerHTML === "Add border") {
      btnAddBorder.innerHTML = "Remove border";
    } else {
      btnAddBorder.innerHTML = "Add border";
    }
  }
  
  if (e.target.id === "verify") {
    let sum = +stickerInputArray[0].value + +stickerInputArray[1].value + +stickerInputArray[2].value;
    if (sum <= 10) {
      totalStickers.innerHTML = `Llevas ${sum} stickers`;
    } else if (sum > 10){
      totalStickers.innerHTML = "llevas demaciados stickers";
    }
  }

  if (e.target.id === "submit-password") {
    let password = selectArray[0].value + selectArray[1].value + selectArray[2].value;
    if (password === "911") {
      passwordCheck.innerHTML = "Password 1 correct";
    } else if (password === "714") {
      passwordCheck.innerHTML = "Password 2 correct";
    } else {
      passwordCheck.innerHTML = "Password incorrect";
    }
  }
  
});
