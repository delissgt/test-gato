import axios from "axios";
import {env} from "../../configs/EnvironmentConfig"

const api_key = "live_jcY1vm3pe55O0Iw1m0xZFyp2IB93DiUy5FSJEFp8ciGsQVHyFbBwhxcy8gTIUKcf"

export const getApi = (url, token, callback) => {
  const path = `${env.API_ENDPOINT_DOG}${url}`

  return axios.get(path, {
    headers: {
      'x-api-key': api_key
    }
  })
}