// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

// let car = {
//     brendName: 'Lada',
//     model: '2107',
//     year: 2004,
//     averageSpeed: 80,
// }

// let distance = 320

// function carInformation() {
//     console.log(`Информация об автомобиле\nПроизводитель: ${car.brendName}\nМодель: ${car.model}\nГод выпуска: ${car.year}\nСредняя скорость: ${car.averageSpeed} км/ч`)
// }

// function timeToWay(distance) {
//     let time = (distance / car.averageSpeed) + Math.floor(distance / car.averageSpeed) / 4;
//     if (distance / car.averageSpeed % 4 == 0) {
//         time -= 1;
//     }
//     console.log(`Необходимое время ${time} часов` )
// }

// carInformation()
// timeToWay(distance)



// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

// let num1 = 8
// let denom1 = 16
// let num2 = 2
// let denom2 = 3

// class Fraction {
//     constructor(num, denom) {
//         this.num = num;
//         this.denom = denom;
//     }
// }

// let fraction1 = new Fraction(num1, denom1)
// let fraction2 = new Fraction(num2, denom2)

// function add(fraction1, fraction2) {
//     addSub(fraction1, fraction2)
//     num = fraction1.num + fraction2.num;
//     denom = fraction1.denom;
//     console.log(`Результат сложения дробей ${num}/${denom}`)
// }

// function addSub(fraction1, fraction2) {
//     let com = highestCommonFactor(fraction1.denom, fraction2.denom)
//     if (com > 1) {
//         if (fraction1.denom > fraction2.denom) {
//             let result = fraction1.denom / com;
//             fraction2.num  = fraction2.num * result;
//             fraction2.denom = fraction2.denom * result;
//         } else {
//             let result = fraction2.denom / com;
//             fraction1.num  = fraction1.num * result;
//             fraction1.denom = fraction1.denom * result;
//         }     
//     } else {
//         let fraction1DenominatorResult = fraction1.denom;
//         fraction1.num  = fraction1.num * fraction2.denom;
//         fraction1.denom = fraction1.denom * fraction2.denom;
//         fraction2.num  = fraction2.num * fraction1DenominatorResult;
//         fraction2.denom = fraction2.denom * fraction1DenominatorResult;    
//     }
// }

// function highestCommonFactor(a, b) {
//     if (b == 0) {
//         return a;
//     }
//     return highestCommonFactor(b, (a % b));
// }

// function sub(fraction1, fraction2) {
//     addSub(fraction1, fraction2)
//     num = fraction1.num - fraction2.num;
//     denom = fraction1.denom;
//     console.log(`Результат вычитания дробей ${num}/${denom}`)
// }

// function mul(fraction1, fraction2) {
//     let num = fraction1.num * fraction2.num;
//     let denom = fraction1.denom * fraction2.denom;
//     console.log(`Результат умножения дробей ${num}/${denom}`)
// }

// function div(fraction1, fraction2) {
//     let num = fraction1.num * fraction2.denom;
//     let denom = fraction1.denom * fraction2.num
//     console.log(`Результат деления дробей ${num}/${denom}`)
// }

// function short(fraction1) {
//     let num = fraction1.num;
//     let denom = fraction1.denom;
//     let result;
//     while (denom) {
//         result = num % denom; num = denom; denom = result;
//     }
//     console.log(`Результат сокращения дроби ${fraction1.num / num}/${fraction1.denom / num}`)
// }

// mul(fraction1, fraction2)
// div(fraction1, fraction2)
// add(fraction1, fraction2)
// sub(fraction1, fraction2)
// short(fraction1)



// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

// let watch = {
//     hour: 20,
//     min: 30,
//     sec: 45,
// }

// function displayTime(watch) {
//     console.log(`Текущее время ${watch.hour}:${watch.min}:${watch.sec}`)
// }

// function addSec(sec) {
//     watch.sec = watch.sec + sec % 60;
//     if (watch.sec >= 60) {
//         watch.sec = watch.sec - 60
//         watch.min = watch.min + 1
//     }
//     watch.min = watch.min + Math.floor(sec / 60)
//     console.log(`Текущее время ${watch.hour}:${watch.min}:${watch.sec}`)
// }

// function addMin(min) {
//     watch.min = watch.min + min % 60;
//     if (watch.min >= 60) {
//         watch.min = watch.min - 60
//         watch.hour = watch.hour + 1
//     }
//     watch.hour = watch.hour + Math.floor(min / 60)
//     console.log(`Текущее время ${watch.hour}:${watch.min}:${watch.sec}`)
// }

// function addHour(hour) {
//     watch.hour = watch.hour + hour % 24;
//     if (watch.hour >= 24) {
//         watch.hour = watch.hour - 24
//     }
//     console.log(`Текущее время ${watch.hour}:${watch.min}:${watch.sec}`)
// }

// displayTime(watch);
// addSec(30)
// addMin(140)
// addHour(5)