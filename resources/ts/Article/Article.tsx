import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'

export default function article() {

  const apiURL: string = 'api/article';

  const [articles,setArticles] = useState([]);

  type Data = {
    id: number;
    name: string;
    message: string;
  }

  useEffect(()=>{
    axios
      .get(apiURL)
      .then(function (response) {
        setArticles(response.data);
        console.log(response);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e);
      });
  },[])

  return (
    <div>
      <div>
        {
          articles.map((article: Data)=>{
            return(
              <div key={article.id}>
                {article.name}
                {article.message}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
