class alarmClock {
  constructor() {
    this.alarmTime = '';
    this.currentTime = '';
  }

  updateTime(currentTime) {
    this.currentTime = currentTime;
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
