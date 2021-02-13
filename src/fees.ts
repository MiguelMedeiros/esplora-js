import api from './api';

const getFeeEstimates = async () => {
  const axios = api();
  return await axios
    .get(`/fee-estimates`)
    .then((res: { data: Record<string, unknown> }) => {
      return res.data;
    })
    .catch(
      (err: {
        response: {
          data: string;
        };
      }) => {
        throw err.response.data;
      }
    );
};

export default {
  getFeeEstimates,
};
