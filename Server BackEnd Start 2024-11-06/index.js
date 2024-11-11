// gauti info is settings.json bei is dateLanguage.json

// reikia console.log'inti kelintadienis siandien yra
// pagal kalba kuri yra pasirinkta setting.json faile
import * as fs from 'fs';
const settings = readJsonFile('settings.json');
const dateLanguage = readJsonFile('dateLanguage.json');
const weekDay = getTodaysWeekDay();
const weekDayTranslated = getTodaysWeekDayTranslated(
  settings.language,
  weekDay
);
console.log(weekDayTranslated);

function getTodaysWeekDay() {
  const currentDate = new Date();
  const weekDay = currentDate.getDay();
  if (weekDay === 0) {
    return 7;
  } else return weekDay;
}

function readJsonFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const fileDataStringified = fileData.toString();
  const parsedData = JSON.parse(fileDataStringified);
  return parsedData;
}

function getTodaysWeekDayTranslated(language, weekDay) {
  return dateLanguage[language][weekDay];
}
