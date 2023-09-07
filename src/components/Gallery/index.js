import React , {useEffect, useState} from "react";

import {Spin, List, Avatar, Row, Col} from "antd";

// import CardDescription from "./CardDescription";

import {getApi} from "../../library/helpers/ApiActions";
import CardDescription from "./CardDescription";


const Gallery = () => {
  const [informationDog, setInformationDog] = useState([])
  const [waiting, setWaiting] = useState(true)
  const [currentDog, setCurrentDog] = useState({})
  const[showCard, setShowCard] = useState(false)


  const getImages = async () => {
    const url = "images/search?limit=15"

    try {
      const response = await getApi(url, "")
      const data = response.data
      // console.log("data", data)
      setInformationDog(data)

    }catch (e) {
      console.log("ERROR NOT GET IMAGES")
    } finally {
      setWaiting(false)
    }

  }


  useEffect(() => {
    getImages()
  }, [])


      if (waiting) {
        return (
            <Spin/>
        )
      } else {
        return(
            <Row>
              <Col span={20} offset={2}>



            <List
                itemLayout={"horizontal"}
                dataSource={informationDog}
            >
              {
                informationDog.map( dog => (
                    <List.Item key={dog.id} onClick={() => {
                      setCurrentDog(dog)
                      setShowCard(true)
                    }}>
                      <List.Item.Meta
                          avatar={<Avatar src={dog.url} size={"large"} />}
                          title={<a>{dog["breeds"][0] ? dog["breeds"][0].name : "Unknown"}</a>}
                      />
                    </List.Item>
                ))
              }
            </List>
                {
                  showCard && (
                      <CardDescription
                          dog={currentDog}
                          visible={showCard}
                          closer={()=> setShowCard(false)}
                      />
                  )
                }
              </Col>
            </Row>

            )
      }

}

export default Gallery