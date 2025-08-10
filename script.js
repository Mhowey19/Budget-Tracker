const userIncome = document.getElementById("numberInput");
const userExpense = document.getElementById("userInputExpense");
const userForm = document.getElementById("userForm");
const totalBtn = document.getElementById("totalBtn");
let incomeArray = document.getElementById("income");
let expenseArray = document.getElementById("expense");
let budgetSummary = document.getElementById("summary");
const income = [];
const expense = [];
let totalIncome = 0;
let totalExpense = 0;

const arrayInput = () => {
	if (userIncome.value == "") {
		userIncome.style.backgroundColor = "red";
		userIncome.textContent = "Use number values only";
	} else {
		income.push(userIncome.value);
		console.log(`Your income = $${income}`);
	}

	if (userExpense.value == "") {
		console.log("use a valid expense");
	} else {
		expense.push(userExpense.value);
		console.log(`Your expense = $${expense}`);
	}
};

let totalBudget = 0;
class Budget {
	constructor(clientIncome, clientExpense) {
		//the arguments will be income and expense array
		this.clientIncome = clientIncome;
		this.clientExpense = clientExpense;
	}
	budgetIncome() {
		for (let i = 0; i < this.clientIncome.length; i++) {
			totalIncome += eval(this.clientIncome[i]);
		}
		return totalIncome;
	}
	//loops through the expenses array and add each value within the array.
	budgetExpense() {
		for (let i = 0; i < this.clientExpense.length; i++) {
			totalExpense += eval(this.clientExpense[i]);
		}
		return totalExpense;
	}
	personalbudgetSummary() {
		totalBudget = eval(this.budgetIncome() - this.budgetExpense());
		return totalBudget;
	}
}

const person1 = new Budget(income, expense);
//array values are grab and utalized by the class

userForm.addEventListener("submit", (e) => {
	e.preventDefault();
	arrayInput();
	incomeArray.textContent = income;
	expenseArray.textContent = expense;
	userIncome.value = "";
	userExpense.value = "";
});

totalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	budgetSummary.textContent = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(
		person1.personalbudgetSummary() //Intl.number formate allows the number to appear as a currency;
	);
});
