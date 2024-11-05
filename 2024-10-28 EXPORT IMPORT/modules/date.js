import { language } from '../config.js';
import datesLang from '../languages/dates.json' with { type: 'json' };// importuojam json faila
console.log(datesLang);


export function day(day) {

      return datesLang[language].daysOfWeek[day];
}

export function wichMonth(month) {
  return datesLang[language].monthNames[month];
}
