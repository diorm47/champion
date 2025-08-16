const questions = document.querySelectorAll(".quiz_question");
const loadingFinal = document.querySelector(".quiz_result_loading");
let currentStep = 0;

document.querySelectorAll(".quiz_answers").forEach((block) => {
  const buttons = block.querySelectorAll(".quiz_btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active_quiz_btn"));
      btn.classList.add("active_quiz_btn");
    });
  });
});

document.querySelectorAll(".quiz_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentQuestion = questions[currentStep];
    const loadingBlock = currentQuestion.querySelector(".loading_block");

    if (loadingBlock) {
      loadingBlock.style.display = "flex";
      setTimeout(() => {
        loadingBlock.style.display = "none";
        currentQuestion.classList.remove("active");
        currentStep++;
        questions[currentStep].classList.add("active");
      }, 500);
    } else {
      currentQuestion.classList.remove("active");
      loadingFinal.classList.add("active");

      setTimeout(() => {
        window.location.href = "https://championautoinsurance.com/#";
      }, 2000);
    }
  });
});
