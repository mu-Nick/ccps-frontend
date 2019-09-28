const url = 'https://ccps.herokuapp.com/complaint'

export const newComplaint = (subject, description, rollno, deptid) => {
    console.log({
        subject,
        description,
        rollno,
        deptid
    })
    return fetch(`${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            subject,
            description,
            rollno,
            deptid
        })
    }).then(response => response.json())
}

export const sendSupportRequest = (compid, supporters) => {
    return fetch(`${url}/${compid}/addsupporters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            supporters
        })
    }).then(response => response.json())
}

export const requestApproved = (compid, rollno) => {
    return fetch(`${url}/${compid}/confirmsupport`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rollno
        })
    }).then(response => response.json())
}

export const setPending = compid => {
    return fetch(`${url}/${compid}/pending`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then(response => response.json())
}

export const markResolved = compid => {
    return fetch(`${url}/${compid}/markresolved`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then(response => response.json())
}

export const setResolved = compid => {
    return fetch(`${url}/${compid}/resolved`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then(response => response.json())
}
