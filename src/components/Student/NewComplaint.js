import React, { useState } from 'react'
import styled from 'styled-components'

import { newComplaint, sendSupportRequest } from '../../services/complaintsService'

const NewComplaint = ({ rollno }) => {
    const [title, setTitle] = useState('')
    const [dept, setDept] = useState('')
    const [desc, setDesc] = useState('')
    const [suppList, setSuppList] = useState('')

    const submit = e => {
        e.preventDefault()
        if (!title || !dept || !desc) {
            return alert('Please fill in the fields')
        }
        if (title > 50) {
            return alert('Title too long')
        }
        if (desc > 100) {
            return alert('Complaint Description too long')
        }
        console.log('SUBMIT ME')

        const supportersList = suppList
            .trim()
            .split(',')
            .map(i => parseInt(i, 10))

        if (supportersList.length > 100) {
            return alert('Maximum limit to add supporters reached')
        }

        newComplaint(title, desc, rollno, dept)
            .then(response => {
                console.log(response)
                if (response.success) {
                    console.log('NEW COMPLAINT REGISTERED')
                    if (supportersList.length > 0 && supportersList[0]) {
                        sendSupportRequest(
                            response.data.id,
                            supportersList.filter(supporter => supporter !== rollno)
                        ).then(result => {
                            if (result.success) {
                                console.log('Notification sent')
                            }
                        })
                    }
                } else {
                    console.log('FAILED TO REGISTER COMPLAINT')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Main>
            <Heading>Submit a new complaint : </Heading>
            <Form>
                <Label htmlFor='title'>
                    Complaint Title :
                    <Input
                        type='text'
                        name='title'
                        id='title'
                        width='80%'
                        placeholder='Provide a title in less than 50 words'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Label>
                <Label htmlFor='dept'>
                    Department Name :
                    <br />
                    <br />
                    <select
                        name='dept'
                        id='dept'
                        value=''
                        width='80%'
                        value={dept}
                        onChange={e => setDept(e.target.value)}
                    >
                        <option disabled value=''>
                            {' '}
                            -- select a department --{' '}
                        </option>
                        <option value='Academic'>Academic</option>
                        <option value='Accounts'>Accounts</option>
                        <option value='Cleanliness'>Cleanliness</option>
                        <option value='Electricity'>Electricity</option>
                        <option value='Internet'>Internet</option>
                        <option value='Mess'>Mess</option>
                        <option value='Sports'>Sports</option>
                        <option value='Training & Placement'>Training & Placement</option>
                    </select>
                </Label>
                <Label
                    htmlFor='desc'
                    style={{
                        width: '100%'
                    }}
                >
                    Complaint Description :
                    <TextArea
                        width='80%'
                        placeholder='Describe your complaint in less than 100 words'
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </Label>
                <Label
                    htmlFor='supporters'
                    style={{
                        width: '100%'
                    }}
                >
                    Add supporters (roll no) :
                    <TextArea
                        width='80%'
                        placeholder="Add supporters' comma separated roll numbers (max - 100)"
                        value={suppList}
                        onChange={e => setSuppList(e.target.value)}
                    />
                </Label>
                <Button type='submit' onClick={submit}>
                    Register new complaint
                </Button>
            </Form>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transition: all 0.2s;
    margin-left: 10%;
`

const Heading = styled.h1`
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    font-size: 1.5em;
    padding: 20px;
`

const Form = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Label = styled.label`
    width: 50%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.3em;
    margin-bottom: 10px;
`

const Input = styled.input`
    margin: 10px 0;
    font-size: 1.1em;
    height: 50px;
    width: ${props => props.width || '100%'};
`

const TextArea = styled.textarea`
    margin: 10px 0;
    width: ${props => props.width || '80%'};
    max-width: 80%;
    font-size: 1.1em;
    height: 150px;
    padding: 5px;
`

const Button = styled.button`
    width: 20%;
    min-width: 300px;
    height: 50px;
    font-size: 1.2em;
    font-weight: 700;
`

export default NewComplaint
