import { config } from 'process';
import { config, assets } from '../src/index';

const init = async () => {
  await config({
    endpoint: 'https://blockstream.info/liquid/api',
  });
  const asset = await assets.getAssets({
    asset_id:
      '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d',
  });
  console.log(asset);
};
init();
