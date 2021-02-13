import esplora, { assets } from '../src/index';

const init = async () => {
  await esplora.config({
    endpoint: 'https://blockstream.info/liquid/api',
  });

  const asset = await assets.getAsset({
    asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(asset);

  const assetTxs = await assets.getAssetTxs({
    asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(assetTxs);

  const assetTxsMempool = await assets.getAssetTxsMempool({
    asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(assetTxsMempool);

  const assetSupplyDecimal = await assets.getAssetSupplyDecimal({
    asset_id: `6f0279e9e
    console.log(asset);d041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(assetSupplyDecimal);

  const assetSupply = await assets.getAssetSupply({
    asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(assetSupply);

  const assetTxsChain = await assets.getAssetTxsChain({
    asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
  });
  console.log(assetTxsChain);

  const assetRegistry = await assets.getAssetRegistry({});
  console.log(assetRegistry);
};
init();
