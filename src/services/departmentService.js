const url = 'https://ccps.herokuapp.com/department'

// eslint-disable-next-line
export const getDepartmentComplaints = deptid => {
    return fetch(`${url}/${deptid}/complaints`, {
        method: 'GET'
    }).then(response => response.json())
}
