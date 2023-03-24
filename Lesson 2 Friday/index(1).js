// console.log(!!0);
// console.log(!!false);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!10);
console.log(0 || false || null || undefined || 10 || 100);

/*
    !!0 === false? да, идём дальше
    !!false === false? да, идём дальше
    !!null === false? да, идём дальше
    !!undefined === false? да, идём дальше
    !!10 === false? нет, возвращаем 10
*/

console.log(null ?? undefined ?? false ?? 0 ?? "")

/*
    null === undefined? нет, идём на шаг 2:
        null === null? да, идём дальше
    undefined === undefined? да, идём дальше
    false === undefined? нет, идём на шаг 2:
        false === null? нет, возвращаем false
*/

/*
    !true = false
    !false = true

    !!true = !false = true
    !!false = !true = false

    !!0 = !true = false
*/

const arr = [1, 2, 3, 4]
let a = arr.find(function (el) {
    return el === 10;
});

console.log(a);

// Иванов Иван Иванович
// Петров Пётр Петрович
// Ю Несбё Игоревич
// Петров-Водкин Валентин Вячеславович
function checkIfFio(str) {
    const re = /^([А-ЯЁ][А-ЯЁа-яё\-]{0,}\s[А-ЯЁ][А-ЯЁа-яё\-]{0,}\s[А-ЯЁ][А-ЯЁа-яё\-]{0,})$/
    return re.test(str);
}

console.log(checkIfFio("Иванов Иван Иванович"))
console.log(checkIfFio("Петров Пётр Петрович"))
console.log(checkIfFio("Ю Несбё Игоревич"))
console.log(checkIfFio("Петров-Водкин Валентин Вячеславович"))
console.log(checkIfFio("Роберт Дауни-младший Соломонович"))
console.log(checkIfFio("Я есть Грут"))

// "город Владимир, 601650, ул. Пушкина, д. 190, кв. 57" -> "601650"
// "602650, город Владимир, ул. Ленина, д. 17" -> "602650"
// "город Владимир, ул. Ленина, д. 17" -> ""
function getPostalCode(str) {
    const re = /[0-9]{6}/
    const match = str.match(re);
    if (match === null) {
        return "";
    }
    return match[0];
}

console.log(getPostalCode("601650 город Владимир, ул. Ленина, д. 17 222222"));

// @NickKorovin