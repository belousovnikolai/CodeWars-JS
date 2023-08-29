function to24hourtime(hour, minute, period) {
  var converted = "";

  if (period == "am") {
    if (hour == 12) converted += "00";
    else {
      if (hour < 10) converted += "0" + hour;
      else converted += hour;
    }
  } else if (period === "pm") {
    if (hour !== 12) converted += 12 + hour;
    else converted += hour + minute;
  }

  if (minute < 10) {
    converted += "0" + minute;
  } else {
    converted += minute;
  }

  return converted;
}

module.exports = to24hourtime;