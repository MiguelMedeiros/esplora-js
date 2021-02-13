import fees from './fees';
import addresses from './addresses';
import blocks from './blocks';
import mempool from './mempool';
import transactions from './transactions';
import assets from './assets';

export { default as fees } from './fees';
export { default as mempool } from './mempool';
export { default as blocks } from './blocks';
export { default as transactions } from './transactions';
export { default as addresses } from './addresses';
export { default as assets } from './assets';

export { default as config } from './api';

const init = (
  params: {
    endpoint?: string;
  } = { endpoint: 'https://blockstream.info/api' }
): void => {
  process.env.ENDPOINT = params.endpoint;
};
init();

export default {
  config: init,
  fees,
  mempool,
  blocks,
  transactions,
  addresses,
  assets,
};
