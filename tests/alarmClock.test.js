const alarmClock = require("../js/alarmClock");
const audioFilePath = '../music/soundAlarm.mp3'

describe("AlarmClock class creation test", () => {
  it("should exist", () => {
    expect(alarmClock).toBeDefined();
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
    const playSpy = jest.spyOn(alarm_Clock.alarmAudio, 'play');
    alarm_Clock.playAlarm(audioFilePath);
    expect(playSpy).toHaveBeenCalled();
    playSpy.mockRestore();
  });
});