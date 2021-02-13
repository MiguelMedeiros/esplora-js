# **Esplora JS API - Blockstream.info**

[![npm version](https://img.shields.io/npm/v/esplora-js.svg?style=flat-square)](https://www.npmjs.org/package/esplora-js)
[![NPM](https://img.shields.io/david/MiguelMedeiros/esplora-js.svg?style=flat-square)](https://david-dm.org/MiguelMedeiros/esplora-js#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/MiguelMedeiros/esplora-js/badge.svg?style=flat-square)](https://snyk.io/test/github/MiguelMedeiros/esplora-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

Easy way to add BlockStream.info API to your JS application.

---

## **Donate**

Help me to stack sats! :blush:

[bc1qvyw5kfx0uhu7g5qeahzna8tl9c5jsuemjumxzj](bitcoin:bc1qvyw5kfx0uhu7g5qeahzna8tl9c5jsuemjumxzj)

[Or donate via Lightning Network!](https://paywall.link/to/esplorajs)

---

## **References**

- Blockstream Info: [https://blockstream.info](https://blockstream.info)
- API Documentation: [https://github.com/Blockstream/esplora/blob/master/API.md](https://github.com/Blockstream/esplora/blob/master/API.md)

---

## **Features**

- Fees
  - [Get Fees Recommended](#get-fees-recommended)
- Mempool
  - [Get Mempool](#get-mempool)
  - [Get Mempool Recent](#get-mempool-recent)
  - [Get Mempool Txids](#get-mempool-txids)
- Blocks
  - [Get Block](#get-block)
  - [Get Block Header](#get-block-header)
  - [Get Block Status](#get-block-status)
  - [Get Block Txs](#get-block-txs)
  - [Get Block Txids](#get-block-txids)
  - [Get Block Txid](#get-block-txid)
  - [Get Block Raw](#get-block-raw)
  - [Get Blocks Height](#get-blocks-height)
  - [Get Blocks](#get-blocks)
  - [Get Blocks Tip Height](#get-blocks-tip-height)
  - [Get Blocks Tip Hash](#get-blocks-tip-hash)
- Transactions
  - [Get Tx](#get-tx)
  - [Get Tx Status](#get-tx-status)
  - [Get Tx Hex](#get-tx-hex)
  - [Get Tx Raw](#get-tx-raw)
  - [Get Tx Merkle Block Proof](#get-tx-merkle-block-proof)
  - [Get Tx Merkle Proof](#get-tx-merkle-proof)
  - [Get Tx Outspend](#get-tx-outspend)
  - [Get Tx Outspends](#get-tx-outspends)
- Addresses
  - [Get Address](#get-address)
  - [Get Address Txs](#get-address-txs)
  - [Get Address Txs Chain](#get-address-txs-chain)
  - [Get Address Txs Mempool](#get-address-txs-mempool)
  - [Get Address Txs Utxo](#get-address-txs-utxo)
- Assets **(Liquid Only)**
  - [Get Asset](#get-asset-liquid-only)
  - [Get Asset Txs](#get-asset-txs-liquid-only)
  - [Get Asset Txs Mempool](#get-asset-txs-mempool-liquid-only)
  - [Get Asset Registry](#get-asset-registry-liquid-only)
  - [Get Asset Supply](#get-asset-supply-liquid-only)
  - [Get Asset Txs Chain](#get-asset-txs-chain-liquid-only)
  - [Get Asset Txs Mempool](#get-asset-txs-mempool-liquid-only)

---

## **Installation**

Using npm:

```bash
$ npm install esplora-js
```

Using yarn:

```bash
$ yarn add esplora-js
```

---

## **Usage**

### **Get Fees Recommended**

Get an object where the key is the confirmation target (in number of blocks) and the value is the estimated feerate (in sat/vB).

[ [Example](examples/fees.ts) ]
[ [Top](#donate) ]

```js
import { fees } from 'esplora-js';
...
const feesRecommended = await fees.getFeesRecommended();
console.log(feesRecommended);
```

---

### **Get Mempool**

Get mempool backlog statistics.

[ [Example](examples/mempool.ts) ]
[ [Top](#donate) ]

```js
import { mempool } from 'esplora-js';
...
const getMempool = await mempool.getMempool();
console.log(getMempool);
```

---

### **Get Mempool Txids**

Get the full list of txids in the mempool as an array.
The order of the txids is arbitrary and does not match bitcoind's.

[ [Example](examples/mempool.ts) ]
[ [Top](#donate) ]

```js
import { mempool } from './../src/';
...
const getMempoolTxids = await mempool.getMempoolTxids();
console.log(getMempoolTxids);
```

---

### **Get Mempool Recent**

Get a list of the last 10 transactions to enter the mempool.
Each transaction object contains simplified overview data, with the following fields: txid, fee, vsize and value.

[ [Example](examples/mempool.ts) ]
[ [Top](#donate) ]

```js
import { mempool } from 'esplora-js';
...
const getMempoolRecent = await mempool.getMempoolRecent();
console.log(getMempoolRecent);
```

---

### **Get Block**

Returns information about a block.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const block = await blocks.getBlock({
  hash: '000000000000000015dc...'
});
console.log(block);
```

---

### **Get Block Status**

Returns the block status.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockStatus = await blocks.getBlockStatus({
  hash: '000000000000000015dc...'
});
console.log(blockStatus);
```

---

### **Get Block Header**

Returns the hex-encoded block header.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockHeader = await blocks.getBlockHeader({
  hash: '000000000000000015dc...'
});
console.log(blockStatus);
```

---

### **Get Block Txs**

Returns a list of transactions in the block (up to 25 transactions beginning at start_index).

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block
- {number} params.start_index - Default: 25

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockTxs = await blocks.getBlockTxs({
  hash: '000000000000000015dc...'
});
console.log(blockTxs);
```

---

### **Get Block Txids**

Returns a list of all txids in the block.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockTxids = await blocks.getBlockTxids({
  hash: '000000000000000015dc...'
});
console.log(blockTxids);
```

---

### **Get Block Txid**

Returns the transaction at index :index within the specified block.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block
- {number} params.index - Index

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockTxid = await blocks.getBlockTxid({
  hash: '000000000000000015dc...',
  index: 218
});
console.log(blockTxids);
```

---

### **Get Block Raw**

Returns the raw block representation in binary.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockRaw = await blocks.getBlockRaw({
  hash: '000000000000000015dc...'
});
console.log(blockRaw);
```

---

### **Get Blocks Height**

Returns the hash of the block currently at height.

Parameters:

- {Object} params - Params object.
- {number} params.height - Height from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blockHeight = await blocks.getBlockHeader({
  height: 66666,
});
console.log(blockHeight);
```

---

### **Get Blocks**

Returns the 10 newest blocks starting at the tip or at start_height if specified.

Parameters:

- {Object} params - Params object.
- {number} params.start_height - Height from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const getBlocks = await blocks.getBlocks({
  start_height: 66666
});
console.log(getBlocks);
```

---

### **Get Blocks Tip Height**

Returns the height of the last block.

Parameters:

- {Object} params - Params object.
- {number} params.start_height - Height from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blocksTipHeight = await blocks.getBlocksTipHeight();
console.log(blocksTipHeight);
```

---

### **Get Blocks Tip Hash**

Returns the hash of the last block.

Parameters:

- {Object} params - Params object.
- {number} params.start_height - Height from a block

[ [Example](examples/blocks.ts) ]
[ [Top](#donate) ]

```js
import { blocks } from 'esplora-js';
...
const blocksTipHash = await blocks.getBlocksTipHash();
console.log(blocksTipHash);
```

---

### **Get Tx**

Returns information about the transaction.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const tx = await transactions.getTx({
  txid: '15e10745f15593...'
});
console.log(tx);
```

---

### **Get Tx Status**

Returns the transaction confirmation status.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txStatus = await transactions.getTxStatus({
  txid: '15e10745f15593...'
});
console.log(txStatus);
```

---

### **Get Tx Hex**

Returns the transaction hex.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txHex = await transactions.getTxHex({
  txid: '15e10745f15593...'
});
console.log(txHex);
```

---

### **Get Tx Raw**

Returns the raw transaction in hex or as binary data.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txRaw = await transactions.getTxRaw({
  txid: '15e10745f15593...'
});
console.log(txRaw);
```

---

### **Get Tx Merkle Block Proof**

Returns a merkle inclusion proof for the transaction using bitcoind's merkleblock format.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txMerkleBlockProof = await transactions.getTxMerkleBlockProof({
  txid: '15e10745f15593...'
});
console.log(txMerkleBlockProof);
```

---

### **Get Tx Merkle Proof**

Returns a merkle inclusion proof for the transaction using Electrum's blockchain.transaction.get_merkle format.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txMerkleProof = await transactions.getTxMerkleProof({
  txid: '15e10745f15593...'
});
console.log(txMerkleProof);
```

---

### **Get Tx Outspend**

Returns the spending status of a transaction output.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txOutspend = await transactions.getTxOutspend({
  txid: '15e10745f15593...',
  vout: 3,
});
console.log(txOutspend);
```

---

### **Get Tx Outspends**

Returns the spending status of all transaction outputs.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const txOutspends = await transactions.getTxOutspends({
  txid: '15e10745f15593...'
});
console.log(txOutspends);
```

---

### **Post Tx Outspends**

Broadcast a raw transaction to the network.
The transaction should be provided as hex in the request body. The txid will be returned on success.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [Example](examples/transactions.ts) ]
[ [Top](#donate) ]

```js
import { transactions } from 'esplora-js';
...
const postTx = await transactions.postTx({
  txid: '15e10745f15593...'
});
console.log(postTx);
```

---

### **Get Address**

Get information about an address.

Parameters:

- {Object} params - Params object.
- {string} params.address - Address id.

[ [Example](examples/addresses.ts) ]
[ [Top](#donate) ]

```js
import { addresses } from 'esplora-js';
...
const addressTest = await addresses.getAddress({
  address: '15e10745f15593a...'
});
console.log(addressTest);
```

---

### **Get Address Txs**

Get transaction history for the specified address/scripthash, sorted with newest first.

Parameters:

- {Object} params - Params object.
- {string} params.address - Address id.

[ [Example](examples/addresses.ts) ]
[ [Top](#donate) ]

```js
import { addresses } from 'esplora-js';
...
const addressTxs = await addresses.getAddressTxs({
  address: '15e10745f15593a...'
});
console.log(addressTxs);
```

---

### **Get Address Txs Chain**

Get confirmed transaction history for the specified address/scripthash, sorted with newest first.

Parameters:

- {Object} params - Params object.
- {string} params.address - Address id.

[ [Example](examples/addresses.ts) ]
[ [Top](#donate) ]

```js
import { addresses } from 'esplora-js';
...
const addressTxsChain = await addresses.getAddressTxsChain({
  address: '15e10745f15593a...'
});
console.log(addressTxsChain);
```

---

### **Get Address Txs Mempool**

Get unconfirmed transaction history for the specified address/scripthash.

Parameters:

- {Object} params - Params object.

[ [Example](examples/addresses.ts) ]
[ [Top](#donate) ]

```js
import { addresses } from 'esplora-js';
...
const addressTxsMempool = await addresses.getAddressTxsMempool({
  address: '15e10745f15593a...'
});
console.log(addressTxsMempool);
```

---

### **Get Address Txs Utxo**

Get the list of unspent transaction outputs associated with the address/scripthash.

Parameters:

- {Object} params - Params object.
- {string} params.address - Address id.

[ [Example](examples/addresses.ts) ]
[ [Top](#donate) ]

```js
import { addresses } from 'esplora-js';
...
const addressTxsUtxo = await addresses.getAddressTxsUtxo({
  address: '15e10745f15593a...'
});
console.log(addressTxsUtxo);
```

---

### **Get Asset (Liquid Only)**

Get information about an asset.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id - Asset id.

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAsset({
  asset_id: '6f0279e9ed04...'
});
console.log(asset);
```

---

### **Get Asset Txs (Liquid Only)**

Get information about an asset txs.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id - Asset id.

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetTxs({
  asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
});
console.log(asset);
```

---

### **Get Asset Txs Mempool (Liquid Only)**

Get information about an asset mempool txs.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id - Asset id.

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetTxsMempool({
  asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
});
console.log(asset);
```

---

### **Get Asset Txs Chain (Liquid Only)**

Get information about an asset txs.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id
- {string} params.last_seen

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetTxsChain({
  asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
});
console.log(asset);
```

---

### **Get Asset Supply (Liquid Only)**

Get the current total supply of the specified asset.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id - Asset id.

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetSupply({
  asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
});
console.log(asset);
```

---

### **Get Asset Supply Decimal (Liquid Only)**

Get the current total supply of the specified asset.

Parameters:

- {Object} params - Params object.
- {string} params.asset_id - Asset id.
- {string} params.last_seen - Asset id.

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetSupplyDecimal({
  asset_id: `6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d`,
});
console.log(asset);
```

---

### **Get Asset Registry (Liquid Only)**

Get information about an asset mempool txs.

Parameters:

- {Object} params - Params object.
- {number} params.start_index
- {number} params.limit
- {string} params.sort_field
- {string} params.sort_dir

[ [Example](examples/assets.ts) ]
[ [Top](#donate) ]

```js
import { assets } from 'esplora-js';
...
const asset = await assets.getAssetRegistry();
console.log(asset);
```

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License [MIT](https://choosealicense.com/licenses/mit/)**
