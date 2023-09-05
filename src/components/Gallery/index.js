import React , {useEffect, useState} from "react";

import {Space, Spin} from "antd";
// const {Meta} = Card;

import CardDescription from "./CardDescription";

import {getApi} from "../../library/helpers/ApiActions";


const Gallery = () => {
  const [informationDog, setInformationDog] = useState([])
  const [waiting, setWaiting] = useState(true)


  const getImages = async () => {
    const url = "images/search?limit=15"

    try {
      const response = await getApi(url, "")
      console.log("response", response)
      const data = response.data
      console.log("data")
      setInformationDog(data)

    }catch (e) {
      console.log("ERROR NOT GET IMAGES")
    } finally {
      console.log("OK GET IMAGES")
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
            <Space align={"center"} size={[32, 32]}>
              {
                informationDog.map( dog => (
                    <CardDescription dog={dog}/>
                ))
              }
            </Space>

            )
      }

}

export default Gallery