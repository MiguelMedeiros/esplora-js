import api from './api';

const getAsset = async (params: { asset_id: string }) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}`)
    .then(
      (res: {
        data: {
          asset_id: string;
          chain_stats: {
            tx_count: number;
            peg_in_count: number;
            peg_in_amount: number;
            peg_out_count: number;
            peg_out_amount: number;
            burn_count: number;
            burned_amount: number;
          };
          mempool_stats: {
            tx_count: number;
            peg_in_count: number;
            peg_in_amount: number;
            peg_out_count: number;
            peg_out_amount: number;
            burn_count: number;
            burned_amount: number;
          };
        };
      }) => {
        return res.data;
      }
    )
    .catch((err: any) => {
      throw err;
    });
};

const getAssetTxs = async (params: { asset_id: string }) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}/txs`)
    .then(
      (res: {
        data: {
          txid: string;
          version: number;
          locktime: number;
          vin: Object[];
          vout: Object[];
          size: number;
          weight: number;
          fee: number;
          status: {
            confirmed: boolean;
            block_height: number;
            block_hash: string;
            block_time: number;
          };
        }[];
      }) => {
        return res.data;
      }
    )
    .catch((err: any) => {
      throw err;
    });
};

const getAssetTxsMempool = async (params: { asset_id: string }) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}/txs/mempool`)
    .then(
      (res: {
        data: {
          txid: string;
          version: number;
          locktime: number;
          vin: Object[];
          vout: Object[];
          size: number;
          weight: number;
          fee: number;
          status: {
            confirmed: boolean;
            block_height: number;
            block_hash: string;
            block_time: number;
          };
        }[];
      }) => {
        return res.data;
      }
    )
    .catch((err: any) => {
      throw err;
    });
};

const getAssetTxsChain = async (params: {
  asset_id: string;
  last_seen?: string;
}) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}/txs/chain/${params.last_seen}`)
    .then(
      (res: {
        data: {
          txid: string;
          version: number;
          locktime: number;
          vin: Object[];
          vout: Object[];
          size: number;
          weight: number;
          fee: number;
          status: {
            confirmed: boolean;
            block_height: number;
            block_hash: string;
            block_time: number;
          };
        }[];
      }) => {
        return res.data;
      }
    )
    .catch((err: any) => {
      throw err;
    });
};

const getAssetSupply = async (params: { asset_id: string }) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}/supply`)
    .then((res: { data: number }) => {
      return res.data;
    })
    .catch((err: any) => {
      throw err;
    });
};

const getAssetSupplyDecimal = async (params: { asset_id: string }) => {
  const axios = api();
  return axios
    .get(`/asset/${params.asset_id}/supply/decimal`)
    .then((res: { data: number }) => {
      return res.data;
    })
    .catch((err: any) => {
      throw err;
    });
};

const getAssetRegistry = async (params?: {
  start_index?: number;
  limit?: number;
  sort_field?: string;
  sort_dir?: string;
}) => {
  const axios = api();
  return axios
    .get(`/assets/registry`, { params })
    .then(
      (res: {
        data: {
          asset_id: string;
          issuance_txin: {
            txid: string;
            vin: number;
          };
          issuance_prevout: {
            txid: string;
            vout: number;
          };
          reissuance_token: string;
          contract_hash: string;
          status: {
            confirmed: boolean;
            block_height: number;
            block_hash: string;
            block_time: number;
          };
          chain_stats: {
            tx_count: number;
            issuance_count: number;
            issued_amount: number;
            burned_amount: number;
            has_blinded_issuances: false;
            reissuance_tokens: number;
            burned_reissuance_tokens: number;
          };
          mempool_stats: {
            tx_count: number;
            issuance_count: number;
            issued_amount: number;
            burned_amount: number;
            has_blinded_issuances: false;
            reissuance_tokens: string;
            burned_reissuance_tokens: number;
          };
          contract: {
            entity: Object[];
            issuer_pubkey: string;
            name: string;
            precision: number;
            ticker: string;
            version: number;
          };
          entity: { domain: string };
          precision: number;
          name: string;
          ticker: string;
        }[];
      }) => {
        return res.data;
      }
    )
    .catch((err: any) => {
      throw err;
    });
};

export default {
  getAsset,
  getAssetTxs,
  getAssetTxsMempool,
  getAssetTxsChain,
  getAssetSupply,
  getAssetSupplyDecimal,
  getAssetRegistry,
};
