const url = 'https://ccps.herokuapp.com/department'

// To fetch complaints of this department
// eslint-disable-next-line
export const getDepartmentComplaints = deptid => {
    return fetch(`${url}/${deptid}/complaints`, {
        method: 'GET'
    }).then(response => response.json())
}
