const url = 'https://ccps.herokuapp.com/login'

// to login department
export const departmentLogin = (signInId, signInPassword) => {
    return fetch(`${url}/department`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: signInId,
            password: signInPassword
        })
    }).then(response => response.json())
}

// to login student
export const studentLogin = (signInRoll, signInPassword) => {
    return fetch(`${url}/student`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rollno: signInRoll,
            password: signInPassword
        })
    }).then(response => response.json())
}
