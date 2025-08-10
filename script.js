const userIncome = document.getElementById("numberInput");
const userExpense = document.getElementById("userInputExpense");
const userForm = document.getElementById("userForm");
const totalBtn = document.getElementById("totalBtn");
let budgetSummary = document.getElementById("summary");
const income = [];
const expense = [];
let totalIncome = 0;
let totalExpense = 0;

const arrayInput = () => {
	if (userIncome.value == "") {
		console.log("Use a valid income");
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
	budgetExpense() {
		for (let i = 0; i < this.clientExpense.length; i++) {
			totalExpense += eval(this.clientExpense[i]);
		}
		return totalExpense;
	}
}

const person1 = new Budget(income, expense);
//array values are grab and utalized by the class

userForm.addEventListener("submit", (e) => {
	e.preventDefault();
	arrayInput();
});

totalBtn.addEventListener("click", (e) => {
	e.preventDefault();

	let personBudgetSummary = person1.budgetIncome() - person1.budgetExpense();

	budgetSummary.textContent = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(personBudgetSummary);
	console.log(
		Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
			person1.budgetIncome() //Intl.number formate allows the number to appear as a currency
		)
	);
	console.log(
		Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
			person1.budgetExpense()
		)
	);
});
