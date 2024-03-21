const slider = document.getElementById('slider');
const number = document.getElementById('number');
slider.addEventListener('input', function() {
  const currentValue = slider.value;
  const formattedValue = Number(currentValue).toLocaleString();
  number.innerHTML = formattedValue;
});




const slider2 = document.getElementById('slider2');
const years = document.getElementById('years');
slider2.addEventListener('input', function() {
  const currentValue2 = slider2.value;
  years.innerHTML = currentValue2;
});

const steps = document.getElementById("steps");
const consultation = document.getElementById("consultation");
const credit = document.getElementById("credit");
const privilege = document.getElementById("privilege");
document.getElementById("btn1").addEventListener("click", function() {
  privilege.scrollIntoView();
});
document.getElementById("btn2").addEventListener("click", function() {
  window.open("https://yabs.yandex.ru/count/WeSejI_zOoVX2Lac1SqJ01ETRIOQbKgbKga4mGHzFfSxUxRVkVDTNpjVl-FrXZlSvxC4VgF8KUG-TeaaewCG9MvOQOJu-O7QE9xRq_nsIgVEM_hCf_VJXagVq6a-jL4uxTm7XBF7de9meW3XjEsez9P2ZvIKPZGbTy2KJPeMJ5WOiYYz3G9B6LJOCUWuUiYmt1KouBTAcCuMg0js17kC-h54skYKyrtnDCV8eiUdVZfjADIPJv_E9_vyGgVF7B_nfrq_xrlwl9_u59ywdRRKPk6xsCagKHRBUtCtEw48GJhqeCcn4ckoyOf8e0VMBCtBueOWL6Ml5hrm51fk3kK0BANX8WABV7nyV7nyq20wji9eGz2cMDZ6wFe1vnXoKzUTc7Iis8N7Ab1uPB510AOBRG07yEaiS4fJJqIJAwAvCxFeFqopPVR1IotY_z9OW7mlZGN8vow_WN-lm6txMXcnjv-L4NjZcWM8OiOi2n35Z2kioUkZzBZGMG_bo_xAdANDatrML9T1F-x0WtEUNA6gyzyLatHdKT1weBLvhGPcLw88-gmliWM84IuTaez-HpGpLogLIkkLo0_i61r3CuJoRzcWI9Sj3Nmo0KdyJOG11rce9lqa7luVd8x3crWO4nUbbL07Lp9HXOYc0ljxMcgOQjmdIm0NY3Kg0OQqmnsGMlnm9QA_k9te-bYgrY-KFz8cTiyuhUkYulpJeV73lJ8mkvAN39MYdzkilOf8Vq9bI0oIfHD7EWq2yjQZKgtQoubT0cFUhrgmBXIMsztXHVGIeKUDsSy3dE8ozLUw8OokxoigMjZR7vJi3x2VqaTe-lHRrt-YWxBR5YtbPXK-AJWUbmjf0PsmCkRKum00~2?etext=2202.rl_Mcv0Xy_39kvAfOoTbIofBZx1NTPFUvoq078td1yKgHSodQU8zmMHSYfa7eIXRb2p0Z2F6YXBuaXpxY2Z3aw.db695b7843f9dc659c0029a4409924088a1a11c2&from=yandex.ru%3Bsearch%26%23x2F%3B%3Bweb%3B%3B0%3B&q=новости+банка+россии&baobab_event_id=ltludmlcf0", "_blank");
});
document.getElementById("btn3").addEventListener("click", function() {
  window.open("https://www.youtube.com/@BankofRussia/videos", "_blank");
});
document.getElementById("btn4").addEventListener("click", function() {
  credit.scrollIntoView();
});
document.getElementById("btn5").addEventListener("click", function() {
  consultation.scrollIntoView();
});
document.getElementById("btn6").addEventListener("click", function() {
  consultation.scrollIntoView();
});
document.getElementById("btn7").addEventListener("click", function() {
  consultation.scrollIntoView();
});
document.getElementById("btn8").addEventListener("click", function() {
  consultation.scrollIntoView();
});
document.getElementById("btn9").addEventListener("click", function() {
  steps.scrollIntoView();
});