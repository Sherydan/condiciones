let accordion = document.querySelector("#accordionExample");
let totalStickers = document.querySelector("#total-stickers");
let passwordCheck = document.querySelector("#password-check");

let stickerInputArray = Array.from(
  document.querySelectorAll("#sticker-1, #sticker-2, #sticker-3")
);
let selectArray = Array.from(
  document.querySelectorAll("#select-1, #select-2, #select-3")
);

accordion.addEventListener("click", (e) => {
  if (e.target.id === "honda-nsx-gt3") {
    document.querySelector("#honda-nsx-gt3").classList.toggle("add-border");
  }

  if (e.target.id === "verify") {
    let sum =+stickerInputArray[0].value + +stickerInputArray[1].value + +stickerInputArray[2].value;

    // check if sum variable is a valid number
    if (!isNaN(sum)) {
      if (sum <= 10) {
        totalStickers.innerHTML = ` You have ${sum} stickers`;
      } else if (sum > 10) {
        totalStickers.innerHTML = "You have too much stickers";
      }
    } else {
      totalStickers.innerHTML = "You can only enter a valid number";
    }

  }

  if (e.target.id === "submit-password") {
    let password =
      selectArray[0].value + selectArray[1].value + selectArray[2].value;
    if (password === "911") {
      passwordCheck.innerHTML = "Password 1 correct";
    } else if (password === "714") {
      passwordCheck.innerHTML = "Password 2 correct";
    } else {
      passwordCheck.innerHTML = "Password incorrect";
    }
  }
});
