const questions = document.querySelectorAll(".quiz_question");
const loadingFinal = document.querySelector(".quiz_result_loading");
let currentStep = 0;

document.querySelectorAll(".quiz_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentQuestion = questions[currentStep];
    const loadingBlock = currentQuestion.querySelector(".loading_block");

    loadingBlock.style.display = "flex";

    setTimeout(() => {
      loadingBlock.style.display = "none";

      currentQuestion.classList.remove("active");
      currentStep++;

      if (currentStep < questions.length) {
        questions[currentStep].classList.add("active");
      } else {
        loadingFinal.classList.add("active");

        setTimeout(() => {
          window.location.href = "https://championautoinsurance.com/#";
        }, 1000);
      }
    }, 400);
  });
});
