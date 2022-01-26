let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    //ask user the first question from the weeklyExpenseQuestions array
    //assign answer to variable; turn users answer from string to number
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    console.log(numberAnswer)

    //Add users answer to weeklyExpenses total
    weeklyExpenses = weeklyExpenses + numberAnswer
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    //ask user the first question from the monthlyExpenseQuestions array
    //assign answer to variable; turn users answer from string to number
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    console.log(numberAnswer)

    //Add users answer to weeklyExpenses total
    monthlyExpenses = monthlyExpenses + numberAnswer
}

for(let i = 0; i < annualExpenseQuestions.length; i++){
    //ask user the first question from the annualExpenseQuestions array
    //assign answer to variable; turn users answer from string to number
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    console.log(numberAnswer)

    //Add users answer to weeklyExpenses total
    annualExpenses = annualExpenses + numberAnswer
}