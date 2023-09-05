import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const WelcomeMessage = ({modalOpen, setModelOpen}) => {

  const handleOk = () => {
    setModelOpen(false)
  }


  return (
        <Modal title={"Welcome"} open={modalOpen} onOk={handleOk} onCancel={handleOk}>

        </Modal>
  )

}

export default WelcomeMessage