let money = prompt('ваш бюджет на місяць?','');
let time = prompt('введіть дату в форматі YYYY-MM-DD','');
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {} ,
    income : [],
    savings  : false
};
let a1 = prompt("витрати на продукти", ''),
    a2 = prompt("скільки потрібно виділити?", ''),
	a3 = prompt("витрати на розваги", ''),
    a4 = prompt("скільки потрібно виділити?", '');
    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

    alert(appData.budget / 30);