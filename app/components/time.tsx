// Constant and functionality to get current date CST from worldtimeapi.
const zone = "America/Chicago";
var currDate: Date = new Date();

fetch(`https://worldtimeapi.org/api/timezone/${zone}`)
  .then((r) => r.json())
  .then((r) => {
    currDate = new Date(r.datetime.replace(/[+-]\d\d:\d\d$/, ""));
  });

export const date: Date = currDate;
