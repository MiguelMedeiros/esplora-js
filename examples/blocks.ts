import { blocks } from '../src/index';

const init = async () => {
  const hash =
    '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

  const block = await blocks.getBlock({ hash });
  console.log(block);

  const blockHeader = await blocks.getBlockHeader({ hash });
  console.log(blockHeader);

  const blockStatus = await blocks.getBlockStatus({ hash });
  console.log(blockStatus);

  const blockTxs = await blocks.getBlockTxs({ hash });
  console.log(blockTxs);

  const blockTxids = await blocks.getBlockTxids({ hash });
  console.log(blockTxids);

  const blockTxid = await blocks.getBlockTxid({ hash, index: 218 });
  console.log(blockTxid);

  const blockRaw = await blocks.getBlockRaw({ hash });
  console.log(blockRaw);

  const blockHeight = await blocks.getBlockHeight({
    start_height: 66666,
  });
  console.log(blockHeight);

  const getBlocks = await blocks.getBlocks({ start_height: 66666 });
  console.log(getBlocks);

  const blocksTipHeight = await blocks.getBlocksTipHeight();
  console.log(blocksTipHeight);

  const blocksTipHash = await blocks.getBlocksTipHash();
  console.log(blocksTipHash);
};
init();
