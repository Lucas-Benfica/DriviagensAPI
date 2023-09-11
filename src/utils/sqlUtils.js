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

function transformarData(inputData) {
  var partesData = inputData.split('-');
  if (partesData.length !== 3) {
    return "Formato de data inválido. Use o formato DD-MM-YYYY.";
  }
  var dataTransformada = partesData[1] + '-' + partesData[0] + '-' + partesData[2];
  return dataTransformada;
}