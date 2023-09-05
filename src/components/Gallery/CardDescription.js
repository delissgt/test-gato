import React from "react";

import {Card} from "antd";

const CardDescription = ({dog}) => {
  return(
        <Card cover={<img src={dog.url} style={{ height: 100, width:100 }} />} style={{ width: 100, height: 100 }}>
          <p>{dog["breeds"][0] ? dog["breeds"][0].name : "Unknown"}</p>
        </Card>

  )
}

export default CardDescription

