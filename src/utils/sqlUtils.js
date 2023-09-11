import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);

export function mapObjectToInsertQuery(object, offset = 1) {
  const objectColumns = Object.keys(object).map((key) => `"${key}"`).join(",");
  const objectValues = Object.values(object);
  const paramsOrder = objectValues.map((value, index) => `$${index + offset}`).join(",");

  return { objectColumns, objectValues, paramsOrder };
}

export function mapObjectToUpdateQuery(object, offset = 1) {
  const objectColumns = Object.keys(object).map((key, index) => `"${key}"=$${index + offset}`).join(",");
  const objectValues = Object.values(object);

  return { objectColumns, objectValues };
}

export function isDateValid(date) {
  const newDate = transformarData(date);
  const receivedDate = dayjs(newDate);
  const currentDate = dayjs().format('MM-DD-YYYY');
  console.log(receivedDate.isAfter(currentDate));
  return receivedDate.isAfter(currentDate);
}

export function dateValidation(date1, biggerDate, smallerDate) {
  let date = undefined;
  let bigger = undefined;
  let smaller = undefined;
  date = dayjs(transformarData(date1));
  if(biggerDate) bigger = dayjs(transformarData(biggerDate));
  if(smallerDate) smaller = dayjs(transformarData(smallerDate));

  if (biggerDate && smallerDate) {
    return bigger.isAfter(date) && smaller.isBefore(date);
  } else if (biggerDate) {
      return bigger.isAfter(date);
  } else if (smallerDate) {
      return smaller.isBefore(date);
  }

  return false;

}

export function transformarData(inputData) {
  var partesData = inputData.split('-');
  if (partesData.length !== 3) {
    return "Formato de data inválido. Use o formato DD-MM-YYYY.";
  }
  var dataTransformada = partesData[1] + '-' + partesData[0] + '-' + partesData[2];
  return dataTransformada;
}

export function isDateFormatValid(dateString) {
  const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
  return dateFormatRegex.test(dateString);
}

export function isValid(biggerDate, smallerDate) {
  const bigger = new Date(biggerDate.split('-').reverse().join('-'));
  const smaller = new Date(smallerDate.split('-').reverse().join('-'));
  return bigger > smaller;
}