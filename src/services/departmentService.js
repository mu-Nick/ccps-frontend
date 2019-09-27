const url = 'https://ccps.herokuapp.com/department'

// eslint-disable-next-line
export const getStudentComplaints = id => {
    return fetch(`${url}/complaints`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            deptid: id
        })
    }).then(response => response.json())
}
