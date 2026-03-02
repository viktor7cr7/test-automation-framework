import { ErrorObject } from 'ajv';

export const mappingErrorJson = (schemaErrors: ErrorObject[], obj: any) => {
  const mapper = {
    'Отсутствующие поля': '',
    'Лишние поля': '',
    'Ошибки типов': '',
    'Ошибки формата': '',
    'Ошибки диапазонов': '',
    'Ошибки enum/const': '',
    'Ошибки массивов': '',
    'Прочие ошибки схемы': '',
  };

  for (const error of schemaErrors) {
    const { keyword, params, instancePath } = error;
    const value = findProperties(obj, instancePath);

    switch (keyword) {
      case 'required':
        mapper['Отсутствующие поля'] +=
          `Отсутствует обязательное свойство ${params.missingProperty}\n`;
        break;

      case 'additionalProperties':
        mapper['Лишние поля'] +=
          `Присутствует лишнее свойство ${params.additionalProperty}\n`;
        break;

      case 'type':
        mapper['Ошибки типов'] +=
          `Тип поля не соответствует схеме. 
          Путь: ${instancePath}. 
          Ожидался: ${params.type}, фактически: ${typeof value}.
           Значение: ${value}\n`;
        break;

      case 'format':
        mapper['Ошибки формата'] +=
          `Неверный формат. 
          Путь: ${instancePath}. 
          Значение: ${value}. 
          Ожидался формат: ${params.format}\n`;
        break;

      case 'enum':
      case 'const':
        mapper['Ошибки enum/const'] +=
          `Недопустимое значение. 
          Путь: ${instancePath}. 
          Значение: ${value}. 
          Ожидалось одно из: ${params.allowedValues ?? params.const}\n`;
        break;

      case 'minLength':
      case 'maxLength':
      case 'minimum':
      case 'maximum':
        mapper['Ошибки диапазонов'] +=
          `Значение вне допустимого диапазона. Путь: ${instancePath}. 
          Значение: ${value}. 
          Ограничение: ${keyword} = ${params.limit}\n`;
        break;

      case 'minItems':
      case 'maxItems':
      case 'uniqueItems':
        mapper['Ошибки массивов'] +=
          `Ошибка массива. Путь: ${instancePath}. 
          Значение: ${JSON.stringify(value)}. 
          Тип ошибки: ${keyword}\n`;
        break;

      case 'oneOf':
      case 'anyOf':
      case 'allOf':
        mapper['Прочие ошибки схемы'] +=
          `Объект не соответствует сложной схеме (${keyword}). 
          Путь: ${instancePath}. 
          Значение: ${JSON.stringify(value)}\n`;
        break;

      default:
        mapper['Прочие ошибки схемы'] +=
          `Ошибка схемы: ${keyword}. 
          Путь: ${instancePath}.
           Значение: ${JSON.stringify(value)}\n`;
    }
  }

  return formatSchemaErrorsForCI(mapper);
};

function findProperties(obj: any, path: string) {
  if (!path) return obj;

  const parts = path.split('/').filter(Boolean);
  let current = obj;

  for (const key of parts) {
    if (current === undefined || current === null) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}


export const formatSchemaErrorsForCI = (mapper: Record<string, string>) => {
  let output = '\n❌ Ошибки валидации схемы ответа:';

  for (const [group, text] of Object.entries(mapper)) {
    if (text.trim()) {
      output += `\n🔹 ${group}:\n${text}`;
    }
  }

  return output || '\n✅ Ошибок схемы не найдено\n';
};
