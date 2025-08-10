const userIncome = document.getElementById("numberInput");
const userExpense = document.getElementById("userInputExpense");
const userForm = document.getElementById("userForm");
const totalBtn = document.getElementById("totalBtn");
const clearBtn = document.getElementById("clearBtn");

let incomeArray = document.getElementById("incomeDisplay");
let incomeDescription = document.getElementById("incomeDescription");
let expenseArray = document.getElementById("expenseDisplay");
let expenseDescription = document.getElementById("expenseDescription");
let budgetSummary = document.getElementById("summary");

let income = [];
let expense = [];
let incomeDesArray = [];
let expenseDesArray = [];

let totalIncome = 0;
let totalExpense = 0;

const arrayInput = () => {
	if (userIncome.value == "" || incomeDescription.value == "") {
		userIncome.style.backgroundColor = "red";
		incomeDescription.style.backgroundColor = "red";
	} else {
		incomeDesArray.push(incomeDescription.value);
		income.push(userIncome.value);
	}

	if (userExpense.value == "" || expenseDescription == "") {
		userExpense.style.backgroundColor = "red";
		expenseDescription.style.backgroundColor = "red";
	} else {
		expenseDesArray.push(expenseDescription.value);
		expense.push(userExpense.value);
	}
};
// const arrayDisplay = () => {
// 	for (let i = 0; i < incomeDescription.length; i++) {
// 		incomeArray += `${incomeDescription[i]} : $${income[i]}`;
// 	}
// 	return incomeArray;

// 	// expenseArray.textContent = expense;
// 	// userIncome.value = "";
// 	// userExpense.value = "";
// };
let totalBudget = 0;
class Budget {
	constructor(clientIncome, clientExpense) {
		//the arguments will be income and expense array
		this.clientIncome = clientIncome;
		this.clientExpense = clientExpense;
	}
	budgetIncome() {
		totalIncome = 0;
		for (let i = 0; i < this.clientIncome.length; i++) {
			totalIncome += eval(this.clientIncome[i]);
		}
		return totalIncome;
	}
	//loops through the expenses array and add each value within the array.
	budgetExpense() {
		totalExpense = 0;
		for (let i = 0; i < this.clientExpense.length; i++) {
			totalExpense += eval(this.clientExpense[i]);
		}
		return totalExpense;
	}
	arrayIncomeDisplay() {
		let displayText = "";
		for (let i = 0; i < incomeDesArray.length; i++) {
			displayText += `${incomeDesArray[i]} : $${income[i]} | `;
		}
		incomeArray.textContent = displayText;
		return displayText;
	}
	arrayExpenseDisplay() {
		let displayText = "";
		for (let i = 0; i < expenseDesArray.length; i++) {
			displayText += `${expenseDesArray[i]} : $${expense[i]} | `;
		}
		expenseArray.textContent = displayText;
		return displayText;
	}
	personalbudgetSummary() {
		totalBudget = eval(this.budgetIncome() - this.budgetExpense());
		return totalBudget;
	}
}

//array values are grab and utalized by the class

userForm.addEventListener("submit", (e) => {
	e.preventDefault();
	arrayInput();

	const person1 = new Budget(income, expense);
	person1.arrayIncomeDisplay();
	person1.arrayExpenseDisplay();
});

clearBtn.addEventListener("click", (e) => {
	window.location.reload();
});

totalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const person1 = new Budget(income, expense);
	budgetSummary.textContent = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(
		person1.personalbudgetSummary() //Intl.number formate allows the number to appear as a currency;
	);
	incomeArray.innerText = person1.arrayIncomeDisplay();
	expenseArray.innerText = person1.arrayExpenseDisplay();
});
