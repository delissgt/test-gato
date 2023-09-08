import React from "react";

import {Card, Modal} from "antd";

const CardDescription = ({dog, visible, closer}) => {
  return(
      // TODO no necessary define like array function
      // <Modal open={visible} onCancel={()=>{closer()} }>
      <Modal
          open={visible}
          onCancel={closer}
          title={<p>{dog["breeds"][0] ? dog["breeds"][0].name : "Unknown"}</p>}
      >
        <Card cover={<img src={dog.url} style={{ height: 150, width:150 }} />} style={{ width: 100, height: 100 }}/>
      </Modal>


  )
}

export default CardDescription

