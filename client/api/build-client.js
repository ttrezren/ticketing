import axios from 'axios';

const Function = ({ req }) => {
  if (typeof window === 'undefined') {
    //server
    return axios.create({
      baseURL: 'http://www.new-ticketing.xyz/',
      headers: req.headers
    })
  } else {
    //browser
    return axios.create({
      baseURL: '/'
    })
  }
};

export default Function;