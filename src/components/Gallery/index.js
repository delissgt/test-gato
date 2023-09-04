import React , {useEffect, useState} from "react";

import {Card, Space, Spin} from "antd";
// const {Meta} = Card;

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
            <div>
              <p>info perritos</p>
              {
                informationDog.map( dog => (
                    <Card cover={<img src={dog.url}/>} style={{ width: 240, }}>
                      <p>{dog["breeds"][0] ? dog["breeds"][0].name : "Unknown"}</p>
                    </Card>
                ))
              }
            </div>

            )

        // imagesDog.forEach((dog) => {
        //   return(
              // <Card cover={<img src={dog.image} />} />
              // <p>{dog.id}</p>
              // <p>info perritos</p>
          // )
        // })
      }


  // )


}

export default Gallery