import React, { useState } from 'react'
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';

const apiPostURL: string = 'api/article/create';

interface IPostResponse {
    name : string
    message : string
  }

const modalStyle = {
    backgroundColor: '#fff',
    padding: '60px 100px',
    borderRadius: '10px',
}

const FormDiv = styled.form`
  width: 98%;
  margin: 20px 0 0 2%;
    button{
      border: 2px #ccc solid;
    }
`;

export default function TodoPost() {

    const [name,setName] = useState<string>('');
    const [message,setMessage] = useState<string>('');
  
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    }
  
    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    }

    const createNewButton = () => {
        axios
          .post<IPostResponse,any>(apiPostURL,{
            name : name,
            message : message
          })
          .then(function (response) {
            console.log(response);
          })
          .catch((e: AxiosError<{ error: string }>) => {
            console.log(e);
        });
      }

  return (
    <div>
        <FormDiv onClick={createNewButton}>
          <input value={name} onChange={handleChangeName} placeholder='name' />
          <input value={message} onChange={handleChangeMessage} placeholder='message' />
          <button>作成</button>
        </FormDiv>
    </div>
  )
}
