import api from './api';

const getMempool = async () => {
  const axios = api();
  return await axios
    .get(`/mempool`)
    .then(
      (res: {
        data: {
          count: number;
          vsize: number;
          total_fee: number;
          fee_histogram: number[];
        }[];
      }) => {
        return res.data;
      }
    )
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

const getMempoolTxids = async () => {
  const axios = api();
  return await axios
    .get(`/mempool/txids`)
    .then((res: { data: string[] }) => {
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

const getMempoolRecent = async () => {
  const axios = api();
  return await axios
    .get(`/mempool/recent`)
    .then(
      (res: {
        data: {
          txid: string;
          fee: number;
          vsize: number;
          value: number;
        }[];
      }) => {
        return res.data;
      }
    )
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
  getMempool,
  getMempoolTxids,
  getMempoolRecent,
};
