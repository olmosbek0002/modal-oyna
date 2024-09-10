let openMoodal = document.querySelector(".order");
let openBtnMoodal = document.querySelector(".btn");
let closeDnymoodal = document.querySelector(".deny");
let openDivMoodal = document.querySelector(".div-modal");
let moodal = document.querySelector(".modal");
let closeMoodal = document.querySelector(".close-moodal");

function OpenMoodal() {
  moodal.classList.remove("is-active");
  openDivMoodal.classList.remove("is-active");
}
function CloseMoodal() {
  moodal.classList.add("is-active");
  openDivMoodal.classList.add("is-active");
}

openMoodal.addEventListener("click", OpenMoodal);
openBtnMoodal.addEventListener("click", OpenMoodal);

closeMoodal.addEventListener("click", CloseMoodal);
closeDnymoodal.addEventListener("click", CloseMoodal);

moodal.addEventListener("click", function (event) {
  if(event.target && event.target.classList.contains("modal")) {
    moodal.classList.add("is-active");
  }
});
