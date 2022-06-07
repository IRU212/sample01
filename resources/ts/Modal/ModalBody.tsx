import React, { useState } from 'react'
import styled from 'styled-components';

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
          <p>これがモーダルウィンドウです。</p>
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
        <button onClick={openModal}>Click</button>
        <Modal show={show} setShow={setShow} />
      </div>
  )
}

export default ModalBody;

