// счетчик
// метод чтобы посчитать, сколько в строке символов "A"
const func = (str: string) => {
  // переменная для счетчика
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      counter++;
    }
  }

  // возвращаем получившийся счетчик
  return counter;
};

// собиратель
// нужно получить строку звездочек по числу
const getStarsByCount = (count: number) => {
  // переменная для сбора строки со звездочками
  let result = "";

  for (let i = 0; i < count; i++) {
    // на каждой итерации добавляем звездочку в переменную
    result += "*";
  }

  // возвращаем получившийся результат
  return result;
};

// нужно проверить, если ли в строке указанный символ
const hasSymbol = (str: string, symbol: string) => {
  for (let i = 0; i < str.length; i++) {
    // если этот элемент строки равен символу, возвращаем true, и заканчиваем выполнение функции
    if (str[i] === symbol) {
      return true;
    }
  }

  // если при цикле все таки не нашлось символа, вернем false по умолчанию
  return false;
};
