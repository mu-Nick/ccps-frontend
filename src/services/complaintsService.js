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
    return fetch(`${url}/${compid}/supporters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            supporters
        })
    }).then(response => response.json())
}

export const requestApproved = (compid, rollno) => {
    return fetch(`${url}/${compid}/addsupporter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rollno
        })
    }).then(response => response.json())
}

export const changeStatus = (compid, newStatus) => {
    return fetch(`${url}/${compid}/changestatus`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: newStatus
        })
    }).then(response => response.json())
}
