import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const BodyDiv = styled.div`
  width: 95%;
  margin: 0 0 0 5%;
`;

const Chat = styled.div`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 100%;
`;

const MapDiv = styled.div`
  background-color: #666;
  color: #fff;
  margin: 30px 2vw;
  padding: 10px;
  width: 27%;
  border: 3px solid #bbb;
`;

const FormDiv = styled.form`
  width: 98%;
  margin: 20px 0 0 2%;
    button{
      border: 2px #ccc solid;
    }
`;

export default function article() {

  const apiGetURL: string = 'api/article';
  const apiPostURL: string = 'api/article/create';

  type Data = {
    id: number;
    name: string;
    message: string;
  }

  type FormInput = {
    name : string
    message : string
  }

  interface IPostResponse {
    name : string
    message : string
  }

  const [articles,setArticles] = useState([]);
  const [name,setName] = useState<string>('');
  const [message,setMessage] = useState<string>('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  useEffect(()=>{
    axios
      .get(apiGetURL)
      .then(function (response) {
        setArticles(response.data);
        console.log(response);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e);
      });
  },[])

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
      <BodyDiv>
        <FormDiv onClick={createNewButton}>
          <input value={name} onChange={handleChangeName} placeholder='name' />
          <input value={message} onChange={handleChangeMessage} placeholder='message' />
          <button>作成</button>
        </FormDiv>
        <Chat>
          {
            articles.map((article: Data) => {
              return(
                <MapDiv key={article.id}>
                  <div>{article.name}</div>
                  <div>{article.message}</div>
                </MapDiv>
              )
            })
          }
        </Chat>
      </BodyDiv>
    </div>
  )
}
