const questions = document.querySelectorAll(".quiz_question");
const loading = document.querySelector(".quiz_result_loading");

let currentStep = 0;

document.querySelectorAll(".quiz_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    questions[currentStep].classList.remove("active");

    currentStep++;
    if (currentStep < questions.length) {
      questions[currentStep].classList.add("active");
    } else {
      loading.classList.add("active");

      setTimeout(() => {
        window.location.href = "https://championautoinsurance.com/#";
      }, 2000);
    }
  });
});
