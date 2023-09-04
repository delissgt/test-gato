const dev = {
  API_ENDPOINT_URL: 'http://localhost:5000/',
  API_ENDPOINT_DOG: 'https://api.thedogapi.com/v1/',
};

const prod = {
  API_ENDPOINT_URL: 'https://api.prod.com'
  // API_ENDPOINT_URL: process.env.NEXT_PUBLIC_API_ENDPOINT_URL,

};

const test = {
  API_ENDPOINT_URL: 'https://api.test.com'
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev
    case 'production':
      return prod
    case 'test':
      return test
    default:
      break;
  }
}

export const env = getEnv()
