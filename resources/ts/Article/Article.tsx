import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal'
import styled from 'styled-components';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalBody from '../Modal/ModalBody';

const TrashIcon = {
  backgroundColor: '#666',
}

const DivFlex = styled.div`
  display: flex;
`;

const MainDiv = styled.div`
  font-size: 2rem;
  margin: 3rem auto;
  padding: 0;
  width: 10%;
  letter-spacing: 6px;
  font-family: Meiryo;
`;

const modalStyle = {
  backgroundColor: '#fff',
  padding: '60px 100px',
  borderRadius: '10px',
}

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

  const deleteUser = (id : number) => {
    axios
      .delete(`/api/article/delete/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e);
    });
  }

  return (
    <div>
      <MainDiv>
        TODO
      </MainDiv>
      <div>
        <ModalBody />
      </div>
      <BodyDiv>
        <FormDiv onClick={createNewButton}>
          <input value={name} onChange={handleChangeName} placeholder='name' />
          <input value={message} onChange={handleChangeMessage} placeholder='message' />
          <button>作成</button>
          <div id='overlay'></div>
        </FormDiv>
        <Chat>
          {
            articles.map((article: Data) => {
              return(
                <MapDiv key={article.id}>
                  <div>{article.name}</div>
                  <DivFlex>
                    <div>{article.message}</div>
                    <div><DeleteForeverIcon onClick={() => deleteUser(article.id)} style={TrashIcon}  /></div>
                  </DivFlex>
                </MapDiv>
              )
            })
          }
        </Chat>
      </BodyDiv>
    </div>
  )
}
