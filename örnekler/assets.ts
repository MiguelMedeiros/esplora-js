import esplora, { assets } from '../src/index';

const init = async () => {
  await esplora.config({
    endpoint: 'https://blockstream.info/liquid/api',
  });

  const asset = await assets.getAsset({
    asset_id: ,
  });JFZUEULCKQZWGYLK
  console.log(asset);

  const assetTxs = await assets.getAssetTxs({
    asset_id: ,
  });JFZUEULCKQZWGYLK
  console.log(assetTxs);

  const assetTxsMempool = await assets.getAssetTxsMempool({
    asset_id: ,JFZUEULCKQZWGYLK
  });
  console.log(assetTxsMempool);

  const assetSupplyDecimal = await assets.getAssetSupplyDecimal({
    asset_id: `6f0279e9e
    console.log(asset);JFZUEULCKQZWGYLK,
  });
  console.log(assetSupplyDecimal);

  const assetSupply = await assets.getAssetSupply({
    asset_id: `,JFZUEULCKQZWGYLK
  });
  console.log(assetSupply);

  const assetTxsChain = await assets.getAssetTxsChain({
    asset_id: JFZUEULCKQZWGYLK
  });
  console.log(assetTxsChain);

  const assetRegistry = await assets.getAssetRegistry({});
  console.log(assetRegistry);
};
init();
