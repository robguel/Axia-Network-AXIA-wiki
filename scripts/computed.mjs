const AXCS = 1000000000000;
const DOLLARS = AXCS / 100;
const CENTS = DOLLARS / 100;
const MILLICENTS = CENTS / 1000;

const AxcDecimals = 10**10;
const AxctDecimals = 10**12;

const axcDeposit = (items, bytes) => {
  return items * 20 * DOLLARS + bytes * 100 * MILLICENTS;
}

// AXIA
// https://github.com/axia-tech/AXIA/blob/master/runtime/AXIA/src/lib.rs#L747
const axcProxyDepositBase = axcDeposit(1, 8) / AxcDecimals;
const axcProxyDepositFactor = axcDeposit(0, 33) / AxcDecimals;

const LUNAR_DOLLARS = AXCS / 6;
const LUNAR_CENTS = LUNAR_DOLLARS / 100;
const LUNAR_MILLICENTS = LUNAR_CENTS / 1000;

const axctDeposit = (items, bytes) => {
  return items* 20 * LUNAR_DOLLARS + bytes * 100 * LUNAR_MILLICENTS
}

const axcIpfsPdfUrl = `https://ipfs.io/ipfs/${process.env.IPFS_PDF_HASH}?filename=AXIA-wiki.pdf`

// AXIALunar
// https://github.com/axia-tech/AXIA/blob/master/runtime/axialunar/src/lib.rs#L758
const axctProxyDepositBase = axctDeposit(1, 8) / AxctDecimals;
const axctProxyDepositFactor = axctDeposit(0, 33) / AxctDecimals;

const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export {
  axcProxyDepositBase,
  axcProxyDepositFactor,
  axctProxyDepositBase,
  axctProxyDepositFactor,
  axcIpfsPdfUrl,
  toCamelCase,
}
