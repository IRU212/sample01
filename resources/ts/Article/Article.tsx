import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
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


export default function article() {

  const apiGetURL: string = 'api/article';

  type Data = {
    id: number;
    name: string;
    message: string;
  }

  const [articles,setArticles] = useState([]);

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
