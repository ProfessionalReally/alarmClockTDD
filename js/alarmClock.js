class alarmClock {
  constructor() {
    this.alarmTime = "";
    this.currentTime = "";
    this.alarmAudio = new Audio();
  }

  /**
   * Метод, обновляющий текущее время
   * @param {string|Date} currentTime - Время для обновления. 
   * Может быть строкой в формате 'часы:минуты:секунды' 
   * или объектом Date().
   */
  updateTime(currentTime) {
    if (currentTime instanceof Date) {
      const hours = currentTime.getHours().toString().padStart(2, "0");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      const seconds = currentTime.getSeconds().toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}:${seconds}`;
      this.currentTime = timeString;
    } else this.currentTime = currentTime;
  }

  /**
   * Метод, устанавливающий будильник
   * @param {string} time - Время будильника
   */
  setAlarm(time) {
    //todo реализовать метод setAlarm() позднее до конца
    this.alarmTime = time;
  }

  playAlarm(path) {
    this.alarmAudio.src = path;
    this.alarmAudio.play();
  }
}

module.exports = alarmClock;
