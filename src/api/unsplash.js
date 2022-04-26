import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eRK4N-iqD5ADbMrIspfxAK-YN82okUgTCLYC_f0TIvU'
  }
})