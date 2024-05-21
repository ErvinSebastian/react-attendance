import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://qrize-app-online.preview-domain.com/index.php,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export { CanceledError };
