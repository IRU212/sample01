import React, { useState } from 'react'
import styled from 'styled-components';
import TodoPost from '../Post/TodoPost';

import AddBoxIcon from '@mui/icons-material/AddBox';

const Plus = {
  fontSize: '4rem',
  height: '4rem',
  position: 'fixed',
  bottom: '1.5rem',
  right: '1.5rem',
  cursor: 'pointer'
}

const Overlay = styled.div`
  /*　画面全体を覆う設定　*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
`;

function Modal({show, setShow}) {
  if (show) {
    return (
      <Overlay>
        <Content>
          <TodoPost />
          <button onClick={() => setShow(false)}>Close</button>
        </Content>
      </Overlay>
    )
  } else {
    return null;
  }
}

function ModalBody() {

  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true)
  }

    return (
      <div>
        <AddBoxIcon onClick={openModal} style={Plus} />
        <Modal show={show} setShow={setShow} />
      </div>
  )
}

export default ModalBody;

