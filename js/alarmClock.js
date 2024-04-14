class alarmClock {
  constructor() {
    this.alarmTime = "";
    this.currentTime = "";
  }

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
}

module.exports = alarmClock;
