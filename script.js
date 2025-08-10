//Linked to the input HTML elements
const userIncome = document.getElementById("numberInput");
const userExpense = document.getElementById("userInputExpense");
const userForm = document.getElementById("userForm");
let incomeDescription = document.getElementById("incomeDescription");
let expenseDescription = document.getElementById("expenseDescription");

//Linked to the divs in the html Used to display the income and expenses
let incomeArray = document.getElementById("incomeDisplay");
let expenseArray = document.getElementById("expenseDisplay");
let budgetSummary = document.getElementById("summary");

//The total and Clear BUttons
const totalBtn = document.getElementById("totalBtn");
const clearBtn = document.getElementById("clearBtn");

let income = [];
let expense = [];
let incomeDesArray = [];
let expenseDesArray = [];

let totalIncome = 0;
let totalExpense = 0;

//Displays a red background if the input values is empty
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

let totalBudget = 0;
class Budget {
	//Gets value from the income and expenses once called
	constructor(clientIncome, clientExpense) {
		//the arguments will be income and expense array
		this.clientIncome = clientIncome;
		this.clientExpense = clientExpense;
	}
	budgetIncome() {
		//Loops through the client income array's length and adds each value
		totalIncome = 0;
		for (let i = 0; i < this.clientIncome.length; i++) {
			totalIncome += eval(this.clientIncome[i]);
		}
		return totalIncome; //returns the total of the income array
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
		//Loops to display the description array and the income array
		let displayText = "";
		for (let i = 0; i < incomeDesArray.length; i++) {
			displayText += `${incomeDesArray[i]} : $${income[i]} | `;
		}
		incomeArray.textContent = displayText; //Linked to the div to display the displayText value
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
		//Finds the budget after the two methods
		totalBudget = eval(this.budgetIncome() - this.budgetExpense());
		return totalBudget; //returns the total budget
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

//resets the values
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
	//Displays the values to the dom
	incomeArray.innerText = person1.arrayIncomeDisplay();
	expenseArray.innerText = person1.arrayExpenseDisplay();
});
