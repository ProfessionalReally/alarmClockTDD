import { alarmClock } from "./alarmClock.js";
const standartAudioFilePath = "../music/soundAlarm.mp3";

document.addEventListener("DOMContentLoaded", function () {
  const alarm_Clock = new alarmClock();

  const btnPutAlarm = document.querySelector(".btnPutAlarm");
  const btnDropAlarm = document.querySelector(".btnDropAlarm");
  const btnTurnOffAlarm = document.querySelector(".btnTurnOffAlarm");

  const hoursInput = document.getElementById("hoursInput");
  const minutesInput = document.getElementById("minutesInput");
  const secondsInput = document.getElementById("secondsInput");

  const audioFileInput = document.getElementById("audioFileInput");

  const alarmElement = document.querySelector(".alarm");
  const timeElement = document.querySelector(".time");

  const notification = document.querySelector(".notification");
  const notificationTime = document.querySelector(".timeAlarm");

  hoursInput.addEventListener("input", function () {
    if (parseInt(this.value) > 23 || this.value.length > 2) {
      this.value = ""; // Очищаем значение поля ввода
    }
  });

  minutesInput.addEventListener("input", function () {
    if (parseInt(this.value) > 59 || this.value.length > 2) {
      this.value = ""; // Очищаем значение поля ввода
    }
  });

  secondsInput.addEventListener("input", function () {
    if (parseInt(this.value) > 59 || this.value.length > 2) {
      this.value = ""; // Очищаем значение поля ввода
    }
  });

  btnPutAlarm.addEventListener("click", function () {
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    btnPutAlarm.disabled = true;

    const hours = hoursInput.value.padStart(2, "0");
    const minutes = minutesInput.value.padStart(2, "0");
    const seconds = secondsInput.value.padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;
    const audioFilePath = audioFileInput.files[0]
      ? URL.createObjectURL(audioFileInput.files[0])
      : standartAudioFilePath;

    alarm_Clock.setAlarm(time);
    alarm_Clock.setAudioFilePath(audioFilePath);
    console.log(time);
  });

  btnDropAlarm.addEventListener("click", function () {
    clearAll();
  });

  btnTurnOffAlarm.addEventListener("click", function () {
    clearAll();
    alarm_Clock.turnOffAlarm();
    notification.style.display = "none";
    timeElement.style.display = "block";
    alarmElement.style.display = "flex";
  });

  function clearAll() {
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
    btnPutAlarm.disabled = false;
    alarm_Clock.setAlarm("");
  }

  function updateTimeOnPage() {
    if (timeElement) {
      timeElement.textContent = alarm_Clock.getCurrentTime();
    }

    if (alarm_Clock.getIsAlarmPlaying()) {
      displayNotification();
    }
  }

  function displayNotification() {
    timeElement.style.display = "none";
    alarmElement.style.display = "none";
    notificationTime.textContent = alarm_Clock.getAlarmTime();
    notification.style.display = "flex";
  }

  setInterval(() => {
    updateTimeOnPage();
  }, 1000);
});
