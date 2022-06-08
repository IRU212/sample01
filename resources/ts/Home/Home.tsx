import React, { useState } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group';

const Img = styled.div`
  width: 100%;
  height: 16vh;
  background-image: url(./img/apex2.jpg);
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  color: #fff;
  letter-spacing: 0.5rem;
`;

const ApexImg = styled.img`
  width: 100%;
  height: 84vh;
`;

export default function home() {

  const [animate,setAnimate] = useState(false);

  return (
    <div>
      <Img>APEX</Img>
      <div><ApexImg src='./img/apex3.jpg' /></div>
      <h2>現在のanimate：{animate ? "true" : "false"}</h2>
      <button onClick={() => setAnimate((prev) => !prev)}>
        {animate ? "falsseにする" : "trueにする"}
      </button>
      <Transition in={animate} timeout={2000} unmountOnExit>
        {(state)=>{
          return <h1 style={{ backgroundColor: "red" }}>{ state }</h1>
        }}
      </Transition>
    </div>
  )
}

