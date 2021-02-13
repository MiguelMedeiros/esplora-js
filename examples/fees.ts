import { fees } from './../src/index';

const init = async () => {
  const feeEstimates = await fees.getFeeEstimates();
  console.log(feeEstimates);
};
init();
