const url = 'https://ccps.herokuapp.com/login'

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
