import * as fs from 'fs';

const dataLanguageWithMonths = readJSONfile('data.json');
const settings = readJSONfile('settings.json');
const dateNumber = getDateNumbers();
const thisYears = getYear();
const thisMonth = getMonth();
const thisDayOfWeek = getDayOfWeek();
const thisDay = getDay();

const dateText = getTranslatedDate(
  settings.language,
  thisYears,
  thisMonth,
  thisDay,
  thisDayOfWeek
);
// console.log(dateText);

function readJSONfile(filepath) {
  const fileData = fs.readFileSync(filepath);
  const fileDataToString = fileData.toString();
  const parsedData = JSON.parse(fileDataToString);
  return parsedData;
}

function getDateNumbers() {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  return formattedDate;
}

function getYear() {
  const year = new Date();
  const thisYear = year.getFullYear();
  return thisYear;
}

function getMonth() {
  const month = new Date();
  const thisMonth = month.getMonth() + 1;
  return thisMonth;
}

function getDay() {
  const day = new Date();
  const thisDay = day.getDate();
  return thisDay;
}

function getDayOfWeek() {
  const dayOfWeek = new Date();
  const thisDayOfWeek = dayOfWeek.getDay();
  if (thisDayOfWeek === 0) {
    return 7;
  } else return thisDayOfWeek;
}

function getTranslatedDate(language, year, month, day, weekday) {
  return `Metai: ${year}\nMenuo: ${dataLanguageWithMonths[language].months[month]}\nMenesio diena: ${day}\nSavaites diena:${dataLanguageWithMonths[language].days[weekday]}`;
}

fs.appendFile(`${dateNumber}.txt`, `${dateText}`, (err) => {
  if (err) throw new Error('Klaida');
  console.log('Failas pridetas');
});
