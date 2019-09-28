const url = 'https://ccps.herokuapp.com/student'

// To fetch complaints of this rollno
export const getStudentComplaints = rollno => {
    return fetch(`${url}/${rollno}/complaints`, {
        method: 'GET'
    }).then(response => response.json())
}

// To fetch notifications of this rollno
export const getStudentNotifications = rollno => {
    return fetch(`${url}/${rollno}/notifications`, {
        method: 'GET'
    }).then(response => response.json())
}
