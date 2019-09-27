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
        console.log('SUBMIT ME')

        const supportersList = suppList
            .trim()
            .split(',')
            .map(i => parseInt(i, 10))

        newComplaint(title, desc, rollno, dept)
            .then(response => {
                console.log(response)
                if (response.success) {
                    console.log('NEW COMPLAINT REGISTERED')
                    if (supportersList.length > 0 && supportersList[0]) {
                        sendSupportRequest(response.data.id, supportersList).then(result => {
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
                <Label for='title'>
                    Complaint Title :
                    <Input
                        type='text'
                        name='title'
                        id='title'
                        width='80%'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </Label>
                <Label for='dept'>
                    Department Name :
                    <Input
                        type='text'
                        name='dept'
                        id='dept'
                        width='80%'
                        value={dept}
                        onChange={e => setDept(e.target.value)}
                        required
                    />
                </Label>
                <Label
                    for='desc'
                    style={{
                        width: '100%'
                    }}
                >
                    Complaint Description :
                    <TextArea
                        width='80%'
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        required
                    />
                </Label>
                <Label
                    for='supporters'
                    style={{
                        width: '100%'
                    }}
                >
                    Add supporters (roll no) :
                    <TextArea
                        width='80%'
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
