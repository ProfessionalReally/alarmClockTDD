const alarmClock = require("../js/alarmClock");

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
    alarm_Clock.updateTime('12:55:00');
    expect(alarm_Clock.currentTimeElement).not.toBe("");
  });
});
