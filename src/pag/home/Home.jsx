import styled from 'styled-components'
import React from 'react'


const WrapperHome = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url() no-repeat;
    background-size: cover;
    background-position: center;
    gap: .5rem;
    & h1{
        font-size: 5rem;
        color: red;
        
    }
  
`


const Home = () => {
  return (
       <WrapperHome>
                 <h1>Home</h1>
       </WrapperHome>
  )
}

export default Home