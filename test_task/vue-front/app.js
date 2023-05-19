const Operation_type = {
    Credit: 'credit',
    Deposit: 'deposit'
};

// всі кредити або депозити які є
async function getAllCreditsOrDeposits() {
    const response = await fetch('https://trandafyl-test.onrender.com/credit_deposit/', {
        method: 'GET'
    })
    return response.json()
}

// додати кредит або депозит
async function addCreditOrDeposit(user_id, operation_date, duration, total_amount, interest_rate, operation_type, descript) {
    const response = await fetch('https://trandafyl-test.onrender.com/credit_deposit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": user_id,
            "operation_date": operation_date,
            "duration": duration,
            "total_amount": total_amount,
            "interest_rate": interest_rate,
            "operation_type": operation_type,
            "descript": descript
        })
    })
    return response.json()
}

// дістати кредит або депозит за його айді
async function getCreditOrDeposit(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/credit_deposit/${id}`, {
        method: 'GET'
    })
    return response.json()
}

// відредагувати кредит або депозит за його айді
async function editCreditOrDeposit(id, operation_date, duration, total_amount, interest_rate, descript) {
    const response = await fetch(`https://trandafyl-test.onrender.com/credit_deposit/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "operation_date": operation_date,
            "duration": duration,
            "total_amount": total_amount,
            "interest_rate": interest_rate,
            "descript": descript
        })
    })
    return response.json()
}

// видалити кредит або депозит за його айді
async function deleteCreditOrDeposit(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/credit_deposit/${id}`, {
        method: 'DELETE'
    })
    return response.status
}

// дістати усі кредити або депозити (operation_type вказує на тип) користувача за його айді
async function getUsersCreditsOrDeposits(user_id, operation_type) {
    const response = await fetch(`https://trandafyl-test.onrender.com/credit_deposit/in_period/${user_id}?`
        + new URLSearchParams({
            "operation_type": operation_type
        }), {
        method: 'GET'
    })
    return response.json()
}


// descript, duration, id, interest_rate, months, operation_date, paid, total_amount
// user_id


//getAllCreditsOrDeposits().then(resp => console.log(resp))
// addCreditOrDeposit(
//     user_id = 5,
//     operation_date = "2020-12-17",
//     duration = 1,
//     total_amount = 9000,
//     interest_rate = 122,
//     operation_type = "credit",
//     descript = "djfosafdsadasdsas"
// ).then(resp => console.log(resp))

// getCreditOrDeposit(id = 4).then(resp => console.log(resp))
// editCreditOrDeposit(
//     id = 3,
//     operation_date = "2023-01-17",
//     duration = 1,
//     total_amount = 2000,
//     interest_rate = 122,
//     descript = 'djfosafdsadasdsas'
// ).then(resp => console.log(resp))

// deleteCreditOrDeposit(id = 4)

// getUsersCreditsOrDeposits(
//     user_id = 5,
//     operation_type = Operation_type.Credit
// ).then(resp => console.log(resp))


// дістати всі транзакції які взагалі були
async function getAllTransactions() {
    const response = await fetch('https://trandafyl-test.onrender.com/moneyflow/', {
        method: 'GET'
    })
    return response.json()
}

// додати транзакцію
async function addTransaction(user_id, operation_date, summa, descript) {
    const response = await fetch('https://trandafyl-test.onrender.com/moneyflow', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": user_id,
            "operation_date": operation_date,
            "summa": summa,
            "descript": descript
        })
    })
    return response.json()
}

// дістати транзакцію за айді
async function getTransactions(id, date_start, date_end) {
    const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/${id}?`
        + new URLSearchParams({
            "date_start": date_start,
            "date_end": date_end
        }), {
        method: 'GET'
    })
    return response.json()
}

// відредагувати дані транзакції за айді
async function editTransaction(id, user_id, operation_date, summa, descript) {
    const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": user_id,
            "operation_date": operation_date,
            "summa": summa,
            "descript": descript
        })
    })
    return response.json()
}

// вилучити транзакцію за айді
async function deleteTransaction(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/${id}`, {
        method: 'DELETE'
    })
    return response.status
}

// дістати усі витрати за id користувача
async function getExprenses(id, date_start, date_end) {
    const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/expenses/${id}?`
        + new URLSearchParams({
            "date_start": date_start,
            "date_end": date_end
        }), {
        method: 'GET'
    })
    return response.json()
}

// дістати усі прибутки за id користувача
async function getProfits(id, date_start, date_end) {
    const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/profits/${id}?`
        + new URLSearchParams({
            "date_start": date_start,
            "date_end": date_end
        }), {
        method: 'GET'
    })
    return response.json()
}

//descript, id, operation_date, summa
//user_id

getAllTransactions().then(resp => console.log(resp))

// addTransaction(
//     user_id = 1,
//     operation_date = "2022-02-22",
//     summa = 1700,
//     descript = "djfosafdsadasdsas"
// ).then(resp => console.log(resp))

// getTransactions(
//     id = 1,
//     date_start = '2022-01-16',
//     date_end = '2022-01-23',
// ).then(resp => console.log(resp))

// editTransaction(
//     id = 3,
//     user_id = 1,
//     operation_date = "2022-01-17",
//     summa = 1000,
//     descript = "djfosafdsadasdsas"
// ).then(resp => console.log(resp))

// deleteTransaction(id = 1)

// getExprenses(
//     id = 1,
//     date_start = '2000-01-16',
//     date_end = '2025-01-23',
// ).then(resp => console.log(resp))

// getProfits(
//     id = 1,
//     date_start = '2000-01-16',
//     date_end = '2025-01-23',
// ).then(resp => console.log(resp))

// дістати всіх користувачів
// паролі я не вертаю
async function getAllUsers() {
    const response = await fetch(`https://trandafyl-test.onrender.com/user/`, {
        method: 'GET'
    })
    return response.json()
}

// дістати користувача за айді
async function getUser(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/user/${id}`, {
        method: 'GET'
    })
    return response.json()
}

// додати користувача
async function addUser(firstName, lastName, birthday, email, pass) {
    const response = await fetch('https://trandafyl-test.onrender.com/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "birthday": birthday,
            "email": email,
            "pass": pass
        })
    })
    return response.json()
}

// відредагувати користувача  за айді
async function editUser(id, firstName, lastName, birthday, email) {
    const response = await fetch(`https://trandafyl-test.onrender.com/user/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "birthday": birthday,
            "email": email
        })
    })
    return response.json()
}

// вилучити користувача за айді
async function removeUser(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/user/${id}`, {
        method: 'DELETE'
    })
    return response.status
}

//birthday, email, firstName, id, lastName

// getAllUsers().then(resp => console.log(resp))

// addUser(
//     firstName = "Oleksandr",
//     lastName = "Martsin",
//     birthday = "2004-06-22",
//     email = 'sasni4ka@gmail.com',
//     pass = "djfosafdsadasdsas"
// ).then(resp => console.log(resp))

// getUser(id = 5).then(resp => console.log(resp))

// editUser(
//     id = 8,
//     firstName = "dnsa",
//     lastName = "ame",
//     birthday = "2012-01-17",
//     email = 'sdfsd@i.ua'
// ).then(resp => console.log(resp))

// removeUser(id = 40)

// додати платіж за кредит або депозит по його айді
async function addCreditOrDepositPayment(cd_id, operation_date, amount) {
    const response = await fetch('https://trandafyl-test.onrender.com/cd_payment', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "cd_id": cd_id,
            "operation_date": operation_date,
            "amount": amount
        })
    })
    return response.json()
}

// дістати платіж за кредит або депозит по його айді
async function getCreditOrDepositPayment(id, operation_date, amount) {
    const response = await fetch(`https://trandafyl-test.onrender.com/cd_payment/${id}`, {
        method: 'GET'
    })
    return response.json()
}

// відредагувати платіж за кредит або депозит по його айді
async function editCreditOrDepositPayment(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/cd_payment/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "operation_date": operation_date,
            "amount": amount
        })
    })
    return response.json()
}

// вилучити платіж за кредит або депозит по його айді
async function removeCreditOrDepositPayment(id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/cd_payment/${id}`, {
        method: 'DELETE'
    })
    return console.log(response.status)
}

// дістати усі платежі за кредит або депозит по його айді
async function getCreditOrDepositPayments(cd_id) {
    const response = await fetch(`https://trandafyl-test.onrender.com/cd_payment/all/${cd_id}`, {
        method: 'GET'
    })
    return response.json()
}

// id, operation_date, amount
// cd_id

// addCreditOrDepositPayment(
//     cd_id = 6,
//     operation_date = "2022-01-27",
//     amount = -239800
// ).then(resp => console.log(resp))

// getCreditOrDepositPayment(id = 10).then(resp => console.log(resp))

// editCreditOrDepositPayment(
//     id = 12,
//     operation_date = "2012-01-17",
//     amount = 100
// ).then(resp => console.log(resp))

// removeCreditOrDepositPayment(id = 11)
// getCreditOrDepositPayments(id = 6).then(resp => console.log(resp))