import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Chat = styled.div`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 2vw;
  width: 93vw;
`;

const MapDiv = styled.div`
  background-color: #000;
  color: #fff;
  margin: 30px 2vw;
  width: 25vw;
`;

export default function article() {

  const apiGetURL: string = 'api/article';
  const apiPostURL: string = 'api/article/create';

  type Data = {
    id: number;
    name: string;
    message: string;
  }

  interface IPostResponse {
    name : string
    message : string
  }

  const [articles,setArticles] = useState([]);
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }

  const handleChangeMessage = (e: any) => {
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
      <div>
        <input value={name} onChange={handleChangeName} />
        <input value={message} onChange={handleChangeMessage} />
        <button onClick={createNewButton}>作成</button>
      </div>
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
    </div>
  )
}
