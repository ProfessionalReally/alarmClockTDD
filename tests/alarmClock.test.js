const alarmClock = require("../js/alarmClock");

describe("AlarmClock class creation test", () => {
  it("should exist", () => {
    expect(alarmClock).toBeDefined();
  });
});

describe("Alarm set test case", () => {
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
