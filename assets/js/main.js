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
  /*
    Part 1:
    Adds and remove border for the given image element
  */

  // check if the target element equals to the image element and adds and remove border
  if (e.target.id === "honda-nsx-gt3") {
    document.querySelector("#honda-nsx-gt3").classList.toggle("add-border");
  }
  /*
    Part 2:
    Sum every sticker input
    if the sum of the stickers is equal to 10, you can carry on
    if the sum of te stickers is greater than 10, you have too many stickers
  */

  // check if target element id equals to the button element named verify
  if (e.target.id === "verify") {

    // get the amount of stickers
    let sum =+stickerInputArray[0].value + +stickerInputArray[1].value + +stickerInputArray[2].value;

    // check if sum variable is a valid number
    if (!isNaN(sum)) {
      // check the amount of stickers
      if (sum <= 10) {
        totalStickers.innerHTML = ` You have ${sum} stickers`;
      } else if (sum > 10) {
        totalStickers.innerHTML = "You have too much stickers";
      }
    } else {
      // if the sum variable is not a number then gives you an error message
      totalStickers.innerHTML = "You can only enter a valid number";
    }

  }


  /*
    Part 3:
    check password validity
    911 and 714 are valid passwords

  */

  // check if target element id equals to the button element named submit-password
  if (e.target.id === "submit-password") {
    // concat input values into a single string
    let password = selectArray[0].value + selectArray[1].value + selectArray[2].value;

    // check if password is valid
    if (password === "911") {
      passwordCheck.innerHTML = "Password 1 correct";
    } else if (password === "714") {
      passwordCheck.innerHTML = "Password 2 correct";
    } else {
      passwordCheck.innerHTML = "Password incorrect";
    }
  }
});
