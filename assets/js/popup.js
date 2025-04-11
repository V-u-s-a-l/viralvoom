const newUser = document.querySelector(".new__user");
const loginBox = document.querySelector(".login__box");
const newAccount = document.querySelector(".new__account");
const alreadyUser = document.querySelector(".already__user");
const popupClose = document.querySelectorAll(".popup__close");
const forgot = document.querySelector(".forgot");
const popup = document.querySelector(".popup");

newUser.addEventListener("click", () => {
  loginBox.classList.add("show");
  newAccount.classList.add("show");
});

alreadyUser.addEventListener("click", () => {
  loginBox.classList.remove("show");
  newAccount.classList.remove("show");
});

popupClose.forEach((item) => {
  item.addEventListener("click", () => {
    popup.classList.remove("open");
  });
});

const forgotPassword = document.querySelector(".forgot__password");

forgotPassword.addEventListener("click", () => {
  loginBox.classList.add("show");
  forgot.classList.add("show");
});

const forgotButton = document.querySelector(".forgot__button");
const popupVerify = document.querySelector(".popup__verify");

forgotButton.addEventListener("click", (e)=>{
  popupVerify.classList.add("open");
  forgot.classList.remove("show");
  VerifyActivation()
})

function VerifyActivation() {
  const VerifyInput = document.querySelectorAll(".verify__form--input");
  VerifyInput.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
      const currentInput = input;
      const nextInput = input.nextElementSibling;
      const prevInput = input.previousElementSibling;

      if (currentInput.value.length > 1) {
        currentInput.value = "";
        return;
      }
      if (
        nextInput &&
        nextInput.hasAttribute("disabled") &&
        currentInput.value !== ""
      ) {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }
      if (e.key === "Backspace") {
        VerifyInput.forEach((input, index2) => {
          if (index1 <= index2 && prevInput) {
            input.setAttribute("disabled", true);
            currentInput.value = "";
            prevInput.focus();
          }
        });
      }
    });
  });
}
