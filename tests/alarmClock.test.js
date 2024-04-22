const alarmClock = require("../js/alarmClock");
const audioFilePath = "../music/soundAlarm.mp3";

describe("alarmClock test case", () => {
  describe("alarmClock class creation test", () => {
    it("should exist", () => {
      expect(alarmClock).toBeDefined();
    });
  });

  describe("alarmClock call updateTime in constructor", () => {
    let alarm_Clock;
    
    beforeEach(() => {
      alarm_Clock = new alarmClock();
    });

    it("currentTime should not be empty after updateTime in the constructor", () => {
      expect(alarm_Clock.currentTime).not.toBe('');
    });
  });

  describe("alarmClock call updateTime() test", () => {
    let alarm_Clock;
    let updateTimeSpy;

    beforeEach(() => {
      jest.useFakeTimers();
      alarm_Clock = new alarmClock();
      updateTimeSpy = jest.spyOn(alarm_Clock, "updateTime");
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it("should call updateTime() every second", () => {
      jest.advanceTimersByTime(1000);
      expect(updateTimeSpy).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(2000);
      expect(updateTimeSpy).toHaveBeenCalledTimes(3);
    });
  });
});

describe("setAlarm() test case", () => {
  let alarm_Clock;

  beforeEach(() => {
    alarm_Clock = new alarmClock();
  });

  it("set alarm for 08:00:00", () => {
    const time = "08:00:00";
    alarm_Clock.setAlarm(time);
    expect(alarm_Clock.alarmTime).toBe(time);
  });
});

describe("updateTime() test case", () => {
  let alarm_Clock;

  beforeEach(() => {
    alarm_Clock = new alarmClock();
  });

  it("currentTime not null", () => {
    alarm_Clock.updateTime("12:55:00");
    expect(alarm_Clock.currentTime).not.toBe("");
  });

  it("currentTime matches the format", () => {
    let time = new Date();
    time.setHours(16, 30, 0);
    alarm_Clock.updateTime(time);
    expect(alarm_Clock.currentTime).toBe("16:30:00");
  });
});

describe("playAlarm() test case", () => {
  let alarm_Clock;

  beforeEach(() => {
    alarm_Clock = new alarmClock();
  });

  it("playAlarm() if you haven't played before", () => {
    const playSpy = jest.spyOn(alarm_Clock.alarmAudio, "play");
    alarm_Clock.playAlarm(audioFilePath);
    expect(playSpy).toHaveBeenCalled();
    playSpy.mockRestore();
  });

  it("playAlarm() should not play if the tune is already playing", () => {
    alarm_Clock.isAlarmPlaying = true;
    const playSpy = jest.spyOn(alarm_Clock.alarmAudio, "play");
    alarm_Clock.playAlarm();
    expect(playSpy).not.toHaveBeenCalled();
    playSpy.mockRestore();
  });

  it("PlayAlarm() resets audio to start when playing the alarm sound", () => {
    alarm_Clock.alarmAudio.currentTime = 10;
    alarm_Clock.playAlarm();
    expect(alarm_Clock.alarmAudio.currentTime).toBe(0);
  });
});

describe("turnOffAlarm() test case", () => {
  let alarm_Clock;

  beforeEach(() => {
    alarm_Clock = new alarmClock();
  });

  describe("turnOffAlarm() when the alarm is playing", () => {
    beforeEach(() => {
      alarm_Clock.playAlarm(audioFilePath);
      alarm_Clock.turnOffAlarm();
    });

    it("should pause the alarm audio", () => {
      expect(alarm_Clock.alarmAudio.paused).toBe(true);
    });

    it("should set isAlarmPlaying to false", () => {
      expect(alarm_Clock.isAlarmPlaying).toBe(false);
    });
  });
});

describe("setAudioFilePath() test case", () => {
  let alarm_Clock;

  beforeEach(() => {
    alarm_Clock = new alarmClock();
  });

  it("should set audioFilePath correctly", () => {
    alarm_Clock.setAudioFilePath(audioFilePath);
    expect(alarm_Clock.audioFilePath).toBe(audioFilePath);
  });
});
