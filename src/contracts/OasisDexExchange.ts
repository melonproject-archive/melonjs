import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class OasisDexExchange extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `OasisDexExchange` contract call for the `matchingEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature function matchingEnabled() view returns (bool)
   */
  matchingEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `getBestOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getBestOffer(address,address) view returns (uint256)
   */
  getBestOffer: (sell_gem: string, buy_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getBuyAmount` function.
   *
   * @contract OasisDexExchange
   * @signature function getBuyAmount(address,address,uint256) view returns (uint256)
   */
  getBuyAmount: (
    buy_gem: string,
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `last_offer_id` function.
   *
   * @contract OasisDexExchange
   * @signature function last_offer_id() view returns (uint256)
   */
  last_offer_id: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getOffer(uint256) view returns (uint256, address, uint256, address)
   */
  getOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `OasisDexExchange` contract call for the `getMinSell` function.
   *
   * @contract OasisDexExchange
   * @signature function getMinSell(address) view returns (uint256)
   */
  getMinSell: (pay_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getTime` function.
   *
   * @contract OasisDexExchange
   * @signature function getTime() view returns (uint64)
   */
  getTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getNextUnsortedOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getNextUnsortedOffer(uint256) view returns (uint256)
   */
  getNextUnsortedOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `close_time` function.
   *
   * @contract OasisDexExchange
   * @signature function close_time() view returns (uint64)
   */
  close_time: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_span` function.
   *
   * @contract OasisDexExchange
   * @signature function _span(address,address) view returns (uint256)
   */
  _span: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_best` function.
   *
   * @contract OasisDexExchange
   * @signature function _best(address,address) view returns (uint256)
   */
  _best: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `stopped` function.
   *
   * @contract OasisDexExchange
   * @signature function stopped() view returns (bool)
   */
  stopped: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `getOfferCount` function.
   *
   * @contract OasisDexExchange
   * @signature function getOfferCount(address,address) view returns (uint256)
   */
  getOfferCount: (sell_gem: string, buy_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `isActive` function.
   *
   * @contract OasisDexExchange
   * @signature function isActive(uint256) view returns (bool)
   */
  isActive: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `offers` function.
   *
   * @contract OasisDexExchange
   * @signature function offers(uint256) view returns (uint256, address, uint256, address, address, uint64)
   */
  offers: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    pay_amt: ethers.BigNumber;
    pay_gem: string;
    buy_amt: ethers.BigNumber;
    buy_gem: string;
    owner: string;
    timestamp: ethers.BigNumber;
  }>;

  /**
   * `OasisDexExchange` contract call for the `getFirstUnsortedOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getFirstUnsortedOffer() view returns (uint256)
   */
  getFirstUnsortedOffer: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `isTokenPairWhitelisted` function.
   *
   * @contract OasisDexExchange
   * @signature function isTokenPairWhitelisted(address,address) view returns (bool)
   */
  isTokenPairWhitelisted: (
    baseToken: string,
    quoteToken: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `owner` function.
   *
   * @contract OasisDexExchange
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `getBetterOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getBetterOffer(uint256) view returns (uint256)
   */
  getBetterOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_dust` function.
   *
   * @contract OasisDexExchange
   * @signature function _dust(address) view returns (uint256)
   */
  _dust: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getWorseOffer` function.
   *
   * @contract OasisDexExchange
   * @signature function getWorseOffer(uint256) view returns (uint256)
   */
  getWorseOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_menu` function.
   *
   * @contract OasisDexExchange
   * @signature function _menu(bytes32) view returns (bool)
   */
  _menu: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `_near` function.
   *
   * @contract OasisDexExchange
   * @signature function _near(uint256) view returns (uint256)
   */
  _near: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `authority` function.
   *
   * @contract OasisDexExchange
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `isClosed` function.
   *
   * @contract OasisDexExchange
   * @signature function isClosed() view returns (bool)
   */
  isClosed: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `_rank` function.
   *
   * @contract OasisDexExchange
   * @signature function _rank(uint256) view returns (uint256, uint256, uint256)
   */
  _rank: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ next: ethers.BigNumber; prev: ethers.BigNumber; delb: ethers.BigNumber }>;

  /**
   * `OasisDexExchange` contract call for the `getOwner` function.
   *
   * @contract OasisDexExchange
   * @signature function getOwner(uint256) view returns (address)
   */
  getOwner: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `isOfferSorted` function.
   *
   * @contract OasisDexExchange
   * @signature function isOfferSorted(uint256) view returns (bool)
   */
  isOfferSorted: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `buyEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature function buyEnabled() view returns (bool)
   */
  buyEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `getPayAmount` function.
   *
   * @contract OasisDexExchange
   * @signature function getPayAmount(address,address,uint256) view returns (uint256)
   */
  getPayAmount: (
    pay_gem: string,
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract transaction for `sellAllAmount` function.
   *
   * @contract OasisDexExchange
   * @signature function sellAllAmount(address,uint256,address,uint256) returns (uint256)
   */
  sellAllAmount: (
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_gem: string,
    min_fill_amount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `stop` function.
   *
   * @contract OasisDexExchange
   * @signature function stop()
   */
  stop: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `make` function.
   *
   * @contract OasisDexExchange
   * @signature function make(address,address,uint128,uint128) returns (bytes32)
   */
  make: (
    pay_gem: string,
    buy_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_amt: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setOwner` function.
   *
   * @contract OasisDexExchange
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `addTokenPairWhitelist` function.
   *
   * @contract OasisDexExchange
   * @signature function addTokenPairWhitelist(address,address) returns (bool)
   */
  addTokenPairWhitelist: (baseToken: string, quoteToken: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `remTokenPairWhitelist` function.
   *
   * @contract OasisDexExchange
   * @signature function remTokenPairWhitelist(address,address) returns (bool)
   */
  remTokenPairWhitelist: (baseToken: string, quoteToken: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `offer` function.
   *
   * @contract OasisDexExchange
   * @signature function offer(uint256,address,uint256,address,uint256) returns (uint256)
   */
  offer: (
    pay_amt: ethers.BigNumberish,
    pay_gem: string,
    buy_amt: ethers.BigNumberish,
    buy_gem: string,
    pos: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `insert` function.
   *
   * @contract OasisDexExchange
   * @signature function insert(uint256,uint256) returns (bool)
   */
  insert: (id: ethers.BigNumberish, pos: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setMatchingEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature function setMatchingEnabled(bool) returns (bool)
   */
  setMatchingEnabled: (matchingEnabled_: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `cancel` function.
   *
   * @contract OasisDexExchange
   * @signature function cancel(uint256) returns (bool)
   */
  cancel: (id: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `del_rank` function.
   *
   * @contract OasisDexExchange
   * @signature function del_rank(uint256) returns (bool)
   */
  del_rank: (id: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `take` function.
   *
   * @contract OasisDexExchange
   * @signature function take(bytes32,uint128)
   */
  take: (
    id: string | ethers.utils.BytesLike,
    maxTakeAmount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `bump` function.
   *
   * @contract OasisDexExchange
   * @signature function bump(bytes32)
   */
  bump: (id_: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setAuthority` function.
   *
   * @contract OasisDexExchange
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `buyAllAmount` function.
   *
   * @contract OasisDexExchange
   * @signature function buyAllAmount(address,uint256,address,uint256) returns (uint256)
   */
  buyAllAmount: (
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    pay_gem: string,
    max_fill_amount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `kill` function.
   *
   * @contract OasisDexExchange
   * @signature function kill(bytes32)
   */
  kill: (id: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setMinSell` function.
   *
   * @contract OasisDexExchange
   * @signature function setMinSell(address,uint256) returns (bool)
   */
  setMinSell: (pay_gem: string, dust: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setBuyEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature function setBuyEnabled(bool) returns (bool)
   */
  setBuyEnabled: (buyEnabled_: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `buy` function.
   *
   * @contract OasisDexExchange
   * @signature function buy(uint256,uint256) returns (bool)
   */
  buy: (id: ethers.BigNumberish, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function matchingEnabled() view returns (bool)',
    'function getBestOffer(address sell_gem, address buy_gem) view returns (uint256)',
    'function sellAllAmount(address pay_gem, uint256 pay_amt, address buy_gem, uint256 min_fill_amount) returns (uint256 fill_amt)',
    'function stop()',
    'function make(address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt) returns (bytes32)',
    'function setOwner(address owner_)',
    'function getBuyAmount(address buy_gem, address pay_gem, uint256 pay_amt) view returns (uint256 fill_amt)',
    'function addTokenPairWhitelist(address baseToken, address quoteToken) returns (bool)',
    'function remTokenPairWhitelist(address baseToken, address quoteToken) returns (bool)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, uint256 pos) returns (uint256)',
    'function insert(uint256 id, uint256 pos) returns (bool)',
    'function last_offer_id() view returns (uint256)',
    'function setMatchingEnabled(bool matchingEnabled_) returns (bool)',
    'function cancel(uint256 id) returns (bool success)',
    'function getOffer(uint256 id) view returns (uint256, address, uint256, address)',
    'function del_rank(uint256 id) returns (bool)',
    'function take(bytes32 id, uint128 maxTakeAmount)',
    'function getMinSell(address pay_gem) view returns (uint256)',
    'function getTime() view returns (uint64)',
    'function getNextUnsortedOffer(uint256 id) view returns (uint256)',
    'function close_time() view returns (uint64)',
    'function _span(address, address) view returns (uint256)',
    'function _best(address, address) view returns (uint256)',
    'function stopped() view returns (bool)',
    'function bump(bytes32 id_)',
    'function setAuthority(address authority_)',
    'function getOfferCount(address sell_gem, address buy_gem) view returns (uint256)',
    'function buyAllAmount(address buy_gem, uint256 buy_amt, address pay_gem, uint256 max_fill_amount) returns (uint256 fill_amt)',
    'function isActive(uint256 id) view returns (bool active)',
    'function offers(uint256) view returns (uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, address owner, uint64 timestamp)',
    'function getFirstUnsortedOffer() view returns (uint256)',
    'function isTokenPairWhitelisted(address baseToken, address quoteToken) view returns (bool)',
    'function owner() view returns (address)',
    'function getBetterOffer(uint256 id) view returns (uint256)',
    'function _dust(address) view returns (uint256)',
    'function getWorseOffer(uint256 id) view returns (uint256)',
    'function _menu(bytes32) view returns (bool)',
    'function _near(uint256) view returns (uint256)',
    'function kill(bytes32 id)',
    'function setMinSell(address pay_gem, uint256 dust) returns (bool)',
    'function authority() view returns (address)',
    'function isClosed() view returns (bool closed)',
    'function _rank(uint256) view returns (uint256 next, uint256 prev, uint256 delb)',
    'function getOwner(uint256 id) view returns (address owner)',
    'function isOfferSorted(uint256 id) view returns (bool)',
    'function setBuyEnabled(bool buyEnabled_) returns (bool)',
    'function buy(uint256 id, uint256 amount) returns (bool)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, uint256 pos, bool rounding) returns (uint256)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem) returns (uint256)',
    'function buyEnabled() view returns (bool)',
    'function getPayAmount(address pay_gem, address buy_gem, uint256 buy_amt) view returns (uint256 fill_amt)',
    'constructor(uint64 close_time)',
    'event LogNote(bytes4 indexed sig, address indexed guy, bytes32 indexed foo, bytes32 indexed bar, uint256 wad, bytes fax) anonymous',
    'event LogItemUpdate(uint256 id)',
    'event LogTrade(uint256 pay_amt, address indexed pay_gem, uint256 buy_amt, address indexed buy_gem)',
    'event LogMake(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogBump(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogTake(bytes32 id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, address indexed taker, uint128 take_amt, uint128 give_amt, uint64 timestamp)',
    'event LogKill(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event LogBuyEnabled(bool isEnabled)',
    'event LogMinSell(address pay_gem, uint256 min_amount)',
    'event LogMatchingEnabled(bool isEnabled)',
    'event LogUnsortedOffer(uint256 id)',
    'event LogSortedOffer(uint256 id)',
    'event LogAddTokenPairWhitelist(address baseToken, address quoteToken)',
    'event LogRemTokenPairWhitelist(address baseToken, address quoteToken)',
    'event LogInsert(address keeper, uint256 id)',
    'event LogDelete(address keeper, uint256 id)',
  ];
}
