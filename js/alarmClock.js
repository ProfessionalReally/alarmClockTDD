class alarmClock {
  constructor() {
    this.alarmTime = "";
    this.currentTime = "";
    this.alarmAudio = new Audio();
    this.isAlarmPlaying = false;

    this.updateTime(new Date());

    setInterval(() => {
      this.updateTime(new Date());
    }, 1000);
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

  /**
   * Метод, который запускает будильник
   * @param {string} path - Путь к аудио-файлу будильника
   */
  playAlarm(path) {
    if (!this.isAlarmPlaying) {
      this.alarmAudio.currentTime = 0;
      this.alarmAudio.src = path;
      this.alarmAudio.play();
      this.isAlarmPlaying = true;
    }
  }

  /**
   * Метод, который отключает будильник
   */
  turnOffAlarm() {
    this.alarmAudio.pause();
    this.isAlarmPlaying = false;
  }
}

module.exports = alarmClock;
