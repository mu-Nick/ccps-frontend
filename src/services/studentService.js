const url = 'https://ccps.herokuapp.com/student'

// eslint-disable-next-line
export const getStudentComplaints = rollno => {
    return fetch(`${url}/${rollno}/complaints`, {
        method: 'GET'
    }).then(response => response.json())
}
