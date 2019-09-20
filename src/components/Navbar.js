import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavDiv>
            <Title>Student Portal</Title>
            <Username>Harshit</Username>
        </NavDiv>
    )
}

const NavDiv = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.1s;
    border-bottom: 1px solid black;
    position: relative;
    top: 0;
    left: 0;
    background: #291720;
    color: #f75c03;
`

const Title = styled.div`
    font-size: 1.8em;
    font-weight: 700;
    width: 25%;
    margin: auto 30px;
`

const Username = styled.div`
    font-weight: 1.2em;
    width: 25%;
    margin: auto 30px;
    text-align: right;
`

export default Navbar
