import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class OasisDexExchange extends Contract {
  public readonly ethers: OasisDexExchangeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `OasisDexExchange` contract call for the `_best` function.
   *
   * @contract OasisDexExchange
   * @signature _best(address,address)
   * @method function _best(address,address) view returns (uint256)
   */
  _best: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_dust` function.
   *
   * @contract OasisDexExchange
   * @signature _dust(address)
   * @method function _dust(address) view returns (uint256)
   */
  _dust: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_near` function.
   *
   * @contract OasisDexExchange
   * @signature _near(uint256)
   * @method function _near(uint256) view returns (uint256)
   */
  _near: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `_rank` function.
   *
   * @contract OasisDexExchange
   * @signature _rank(uint256)
   * @method function _rank(uint256) view returns (uint256, uint256, uint256)
   */
  _rank: (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ next: ethers.BigNumber; prev: ethers.BigNumber; delb: ethers.BigNumber }>;

  /**
   * `OasisDexExchange` contract call for the `_span` function.
   *
   * @contract OasisDexExchange
   * @signature _span(address,address)
   * @method function _span(address,address) view returns (uint256)
   */
  _span: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `authority` function.
   *
   * @contract OasisDexExchange
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `buyEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature buyEnabled()
   * @method function buyEnabled() view returns (bool)
   */
  buyEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `close_time` function.
   *
   * @contract OasisDexExchange
   * @signature close_time()
   * @method function close_time() view returns (uint64)
   */
  close_time: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `dustId` function.
   *
   * @contract OasisDexExchange
   * @signature dustId()
   * @method function dustId() view returns (uint256)
   */
  dustId: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getBestOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getBestOffer(address,address)
   * @method function getBestOffer(address,address) view returns (uint256)
   */
  getBestOffer: (sell_gem: string, buy_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getBetterOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getBetterOffer(uint256)
   * @method function getBetterOffer(uint256) view returns (uint256)
   */
  getBetterOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getBuyAmount` function.
   *
   * @contract OasisDexExchange
   * @signature getBuyAmount(address,address,uint256)
   * @method function getBuyAmount(address,address,uint256) view returns (uint256)
   */
  getBuyAmount: (
    buy_gem: string,
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getFirstUnsortedOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getFirstUnsortedOffer()
   * @method function getFirstUnsortedOffer() view returns (uint256)
   */
  getFirstUnsortedOffer: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getMinSell` function.
   *
   * @contract OasisDexExchange
   * @signature getMinSell(address)
   * @method function getMinSell(address) view returns (uint256)
   */
  getMinSell: (pay_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getNextUnsortedOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getNextUnsortedOffer(uint256)
   * @method function getNextUnsortedOffer(uint256) view returns (uint256)
   */
  getNextUnsortedOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getOffer(uint256)
   * @method function getOffer(uint256) view returns (uint256, address, uint256, address)
   */
  getOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `OasisDexExchange` contract call for the `getOfferCount` function.
   *
   * @contract OasisDexExchange
   * @signature getOfferCount(address,address)
   * @method function getOfferCount(address,address) view returns (uint256)
   */
  getOfferCount: (sell_gem: string, buy_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getOwner` function.
   *
   * @contract OasisDexExchange
   * @signature getOwner(uint256)
   * @method function getOwner(uint256) view returns (address)
   */
  getOwner: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `getPayAmount` function.
   *
   * @contract OasisDexExchange
   * @signature getPayAmount(address,address,uint256)
   * @method function getPayAmount(address,address,uint256) view returns (uint256)
   */
  getPayAmount: (
    pay_gem: string,
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getTime` function.
   *
   * @contract OasisDexExchange
   * @signature getTime()
   * @method function getTime() view returns (uint64)
   */
  getTime: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `getWorseOffer` function.
   *
   * @contract OasisDexExchange
   * @signature getWorseOffer(uint256)
   * @method function getWorseOffer(uint256) view returns (uint256)
   */
  getWorseOffer: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `isActive` function.
   *
   * @contract OasisDexExchange
   * @signature isActive(uint256)
   * @method function isActive(uint256) view returns (bool)
   */
  isActive: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `isClosed` function.
   *
   * @contract OasisDexExchange
   * @signature isClosed()
   * @method function isClosed() view returns (bool)
   */
  isClosed: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `isOfferSorted` function.
   *
   * @contract OasisDexExchange
   * @signature isOfferSorted(uint256)
   * @method function isOfferSorted(uint256) view returns (bool)
   */
  isOfferSorted: (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `last_offer_id` function.
   *
   * @contract OasisDexExchange
   * @signature last_offer_id()
   * @method function last_offer_id() view returns (uint256)
   */
  last_offer_id: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `OasisDexExchange` contract call for the `matchingEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature matchingEnabled()
   * @method function matchingEnabled() view returns (bool)
   */
  matchingEnabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract call for the `offers` function.
   *
   * @contract OasisDexExchange
   * @signature offers(uint256)
   * @method function offers(uint256) view returns (uint256, address, uint256, address, address, uint64)
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
   * `OasisDexExchange` contract call for the `owner` function.
   *
   * @contract OasisDexExchange
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `OasisDexExchange` contract call for the `stopped` function.
   *
   * @contract OasisDexExchange
   * @signature stopped()
   * @method function stopped() view returns (bool)
   */
  stopped: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `OasisDexExchange` contract transaction for `bump` function.
   *
   * @contract OasisDexExchange
   * @signature bump(bytes32)
   * @method function bump(bytes32)
   */
  bump: (id_: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `buy` function.
   *
   * @contract OasisDexExchange
   * @signature buy(uint256,uint256)
   * @method function buy(uint256,uint256) returns (bool)
   */
  buy: (id: ethers.BigNumberish, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `buyAllAmount` function.
   *
   * @contract OasisDexExchange
   * @signature buyAllAmount(address,uint256,address,uint256)
   * @method function buyAllAmount(address,uint256,address,uint256) returns (uint256)
   */
  buyAllAmount: (
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    pay_gem: string,
    max_fill_amount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `cancel` function.
   *
   * @contract OasisDexExchange
   * @signature cancel(uint256)
   * @method function cancel(uint256) returns (bool)
   */
  cancel: (id: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `del_rank` function.
   *
   * @contract OasisDexExchange
   * @signature del_rank(uint256)
   * @method function del_rank(uint256) returns (bool)
   */
  del_rank: (id: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `insert` function.
   *
   * @contract OasisDexExchange
   * @signature insert(uint256,uint256)
   * @method function insert(uint256,uint256) returns (bool)
   */
  insert: (id: ethers.BigNumberish, pos: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `kill` function.
   *
   * @contract OasisDexExchange
   * @signature kill(bytes32)
   * @method function kill(bytes32)
   */
  kill: (id: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `make` function.
   *
   * @contract OasisDexExchange
   * @signature make(address,address,uint128,uint128)
   * @method function make(address,address,uint128,uint128) returns (bytes32)
   */
  make: (
    pay_gem: string,
    buy_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_amt: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `offer` function.
   *
   * @contract OasisDexExchange
   * @signature offer(uint256,address,uint256,address,uint256)
   * @method function offer(uint256,address,uint256,address,uint256) returns (uint256)
   */
  offer: (
    pay_amt: ethers.BigNumberish,
    pay_gem: string,
    buy_amt: ethers.BigNumberish,
    buy_gem: string,
    pos: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `sellAllAmount` function.
   *
   * @contract OasisDexExchange
   * @signature sellAllAmount(address,uint256,address,uint256)
   * @method function sellAllAmount(address,uint256,address,uint256) returns (uint256)
   */
  sellAllAmount: (
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_gem: string,
    min_fill_amount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setAuthority` function.
   *
   * @contract OasisDexExchange
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setBuyEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature setBuyEnabled(bool)
   * @method function setBuyEnabled(bool) returns (bool)
   */
  setBuyEnabled: (buyEnabled_: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setMatchingEnabled` function.
   *
   * @contract OasisDexExchange
   * @signature setMatchingEnabled(bool)
   * @method function setMatchingEnabled(bool) returns (bool)
   */
  setMatchingEnabled: (matchingEnabled_: boolean) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setMinSell` function.
   *
   * @contract OasisDexExchange
   * @signature setMinSell(address,uint256)
   * @method function setMinSell(address,uint256) returns (bool)
   */
  setMinSell: (pay_gem: string, dust: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `setOwner` function.
   *
   * @contract OasisDexExchange
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `stop` function.
   *
   * @contract OasisDexExchange
   * @signature stop()
   * @method function stop()
   */
  stop: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `OasisDexExchange` contract transaction for `take` function.
   *
   * @contract OasisDexExchange
   * @signature take(bytes32,uint128)
   * @method function take(bytes32,uint128)
   */
  take: (
    id: string | ethers.utils.BytesLike,
    maxTakeAmount: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(uint64 close_time)',
    'event LogBump(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogBuyEnabled(bool isEnabled)',
    'event LogDelete(address keeper, uint256 id)',
    'event LogInsert(address keeper, uint256 id)',
    'event LogItemUpdate(uint256 id)',
    'event LogKill(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogMake(bytes32 indexed id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt, uint64 timestamp)',
    'event LogMatchingEnabled(bool isEnabled)',
    'event LogMinSell(address pay_gem, uint256 min_amount)',
    'event LogNote(bytes4 indexed sig, address indexed guy, bytes32 indexed foo, bytes32 indexed bar, uint256 wad, bytes fax) anonymous',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'event LogSortedOffer(uint256 id)',
    'event LogTake(bytes32 id, bytes32 indexed pair, address indexed maker, address pay_gem, address buy_gem, address indexed taker, uint128 take_amt, uint128 give_amt, uint64 timestamp)',
    'event LogTrade(uint256 pay_amt, address indexed pay_gem, uint256 buy_amt, address indexed buy_gem)',
    'event LogUnsortedOffer(uint256 id)',
    'function _best(address, address) view returns (uint256)',
    'function _dust(address) view returns (uint256)',
    'function _near(uint256) view returns (uint256)',
    'function _rank(uint256) view returns (uint256 next, uint256 prev, uint256 delb)',
    'function _span(address, address) view returns (uint256)',
    'function authority() view returns (address)',
    'function bump(bytes32 id_)',
    'function buy(uint256 id, uint256 amount) returns (bool)',
    'function buyAllAmount(address buy_gem, uint256 buy_amt, address pay_gem, uint256 max_fill_amount) returns (uint256 fill_amt)',
    'function buyEnabled() view returns (bool)',
    'function cancel(uint256 id) returns (bool success)',
    'function close_time() view returns (uint64)',
    'function del_rank(uint256 id) returns (bool)',
    'function dustId() view returns (uint256)',
    'function getBestOffer(address sell_gem, address buy_gem) view returns (uint256)',
    'function getBetterOffer(uint256 id) view returns (uint256)',
    'function getBuyAmount(address buy_gem, address pay_gem, uint256 pay_amt) view returns (uint256 fill_amt)',
    'function getFirstUnsortedOffer() view returns (uint256)',
    'function getMinSell(address pay_gem) view returns (uint256)',
    'function getNextUnsortedOffer(uint256 id) view returns (uint256)',
    'function getOffer(uint256 id) view returns (uint256, address, uint256, address)',
    'function getOfferCount(address sell_gem, address buy_gem) view returns (uint256)',
    'function getOwner(uint256 id) view returns (address owner)',
    'function getPayAmount(address pay_gem, address buy_gem, uint256 buy_amt) view returns (uint256 fill_amt)',
    'function getTime() view returns (uint64)',
    'function getWorseOffer(uint256 id) view returns (uint256)',
    'function insert(uint256 id, uint256 pos) returns (bool)',
    'function isActive(uint256 id) view returns (bool active)',
    'function isClosed() view returns (bool closed)',
    'function isOfferSorted(uint256 id) view returns (bool)',
    'function kill(bytes32 id)',
    'function last_offer_id() view returns (uint256)',
    'function make(address pay_gem, address buy_gem, uint128 pay_amt, uint128 buy_amt) returns (bytes32)',
    'function matchingEnabled() view returns (bool)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, uint256 pos) returns (uint256)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, uint256 pos, bool rounding) returns (uint256)',
    'function offer(uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem) returns (uint256)',
    'function offers(uint256) view returns (uint256 pay_amt, address pay_gem, uint256 buy_amt, address buy_gem, address owner, uint64 timestamp)',
    'function owner() view returns (address)',
    'function sellAllAmount(address pay_gem, uint256 pay_amt, address buy_gem, uint256 min_fill_amount) returns (uint256 fill_amt)',
    'function setAuthority(address authority_)',
    'function setBuyEnabled(bool buyEnabled_) returns (bool)',
    'function setMatchingEnabled(bool matchingEnabled_) returns (bool)',
    'function setMinSell(address pay_gem, uint256 dust) returns (bool)',
    'function setOwner(address owner_)',
    'function stop()',
    'function stopped() view returns (bool)',
    'function take(bytes32 id, uint128 maxTakeAmount)',
  ];
}

export interface OasisDexExchangeEthersContract extends ethers.Contract {
  '_best(address,address)': ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  '_dust(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  '_near(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  '_rank(uint256)': (
    $$0: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ next: ethers.BigNumber; prev: ethers.BigNumber; delb: ethers.BigNumber }>;
  '_span(address,address)': ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'buyEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'close_time()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'dustId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getBestOffer(address,address)': (
    sell_gem: string,
    buy_gem: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getBetterOffer(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getBuyAmount(address,address,uint256)': (
    buy_gem: string,
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getFirstUnsortedOffer()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getMinSell(address)': (pay_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getNextUnsortedOffer(uint256)': (
    id: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getOffer(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getOfferCount(address,address)': (
    sell_gem: string,
    buy_gem: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getOwner(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'getPayAmount(address,address,uint256)': (
    pay_gem: string,
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getWorseOffer(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'isActive(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isClosed()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isOfferSorted(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'last_offer_id()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'matchingEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'offers(uint256)': (
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
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'stopped()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'bump(bytes32)': (
    id_: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'buy(uint256,uint256)': (
    id: ethers.BigNumberish,
    amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'buyAllAmount(address,uint256,address,uint256)': (
    buy_gem: string,
    buy_amt: ethers.BigNumberish,
    pay_gem: string,
    max_fill_amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'cancel(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'del_rank(uint256)': (
    id: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'insert(uint256,uint256)': (
    id: ethers.BigNumberish,
    pos: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'kill(bytes32)': (
    id: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'make(address,address,uint128,uint128)': (
    pay_gem: string,
    buy_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_amt: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'offer(uint256,address,uint256,address,uint256)': (
    pay_amt: ethers.BigNumberish,
    pay_gem: string,
    buy_amt: ethers.BigNumberish,
    buy_gem: string,
    pos: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'sellAllAmount(address,uint256,address,uint256)': (
    pay_gem: string,
    pay_amt: ethers.BigNumberish,
    buy_gem: string,
    min_fill_amount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setBuyEnabled(bool)': (buyEnabled_: boolean, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setMatchingEnabled(bool)': (
    matchingEnabled_: boolean,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setMinSell(address,uint256)': (
    pay_gem: string,
    dust: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'stop()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'take(bytes32,uint128)': (
    id: string | ethers.utils.BytesLike,
    maxTakeAmount: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  callStatic: {
    '_best(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    '_dust(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    '_near(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    '_rank(uint256)': (
      $$0: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ next: ethers.BigNumber; prev: ethers.BigNumber; delb: ethers.BigNumber }>;
    '_span(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'buyEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'close_time()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'dustId()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getBestOffer(address,address)': (
      sell_gem: string,
      buy_gem: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getBetterOffer(uint256)': (
      id: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getBuyAmount(address,address,uint256)': (
      buy_gem: string,
      pay_gem: string,
      pay_amt: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getFirstUnsortedOffer()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMinSell(address)': (pay_gem: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getNextUnsortedOffer(uint256)': (
      id: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOffer(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getOfferCount(address,address)': (
      sell_gem: string,
      buy_gem: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getOwner(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'getPayAmount(address,address,uint256)': (
      pay_gem: string,
      buy_gem: string,
      buy_amt: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTime()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getWorseOffer(uint256)': (
      id: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'isActive(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isClosed()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isOfferSorted(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'last_offer_id()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'matchingEnabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'offers(uint256)': (
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
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'stopped()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'bump(bytes32)': (id_: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<void>;
    'buy(uint256,uint256)': (
      id: ethers.BigNumberish,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'buyAllAmount(address,uint256,address,uint256)': (
      buy_gem: string,
      buy_amt: ethers.BigNumberish,
      pay_gem: string,
      max_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'cancel(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<boolean>;
    'del_rank(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<boolean>;
    'insert(uint256,uint256)': (
      id: ethers.BigNumberish,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'kill(bytes32)': (id: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<void>;
    'make(address,address,uint128,uint128)': (
      pay_gem: string,
      buy_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<string>;
    'offer(uint256,address,uint256,address,uint256)': (
      pay_amt: ethers.BigNumberish,
      pay_gem: string,
      buy_amt: ethers.BigNumberish,
      buy_gem: string,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'sellAllAmount(address,uint256,address,uint256)': (
      pay_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_gem: string,
      min_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setBuyEnabled(bool)': (buyEnabled_: boolean, $$overrides?: ethers.Overrides) => Promise<boolean>;
    'setMatchingEnabled(bool)': (matchingEnabled_: boolean, $$overrides?: ethers.Overrides) => Promise<boolean>;
    'setMinSell(address,uint256)': (
      pay_gem: string,
      dust: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'stop()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'take(bytes32,uint128)': (
      id: string | ethers.utils.BytesLike,
      maxTakeAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'bump(bytes32)': (
      id_: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'buy(uint256,uint256)': (
      id: ethers.BigNumberish,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'buyAllAmount(address,uint256,address,uint256)': (
      buy_gem: string,
      buy_amt: ethers.BigNumberish,
      pay_gem: string,
      max_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'cancel(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'del_rank(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'insert(uint256,uint256)': (
      id: ethers.BigNumberish,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'kill(bytes32)': (id: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'make(address,address,uint128,uint128)': (
      pay_gem: string,
      buy_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'offer(uint256,address,uint256,address,uint256)': (
      pay_amt: ethers.BigNumberish,
      pay_gem: string,
      buy_amt: ethers.BigNumberish,
      buy_gem: string,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'sellAllAmount(address,uint256,address,uint256)': (
      pay_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_gem: string,
      min_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setBuyEnabled(bool)': (buyEnabled_: boolean, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setMatchingEnabled(bool)': (
      matchingEnabled_: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setMinSell(address,uint256)': (
      pay_gem: string,
      dust: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'stop()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'take(bytes32,uint128)': (
      id: string | ethers.utils.BytesLike,
      maxTakeAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'bump(bytes32)': (
      id_: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'buy(uint256,uint256)': (
      id: ethers.BigNumberish,
      amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'buyAllAmount(address,uint256,address,uint256)': (
      buy_gem: string,
      buy_amt: ethers.BigNumberish,
      pay_gem: string,
      max_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'cancel(uint256)': (id: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'del_rank(uint256)': (
      id: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'insert(uint256,uint256)': (
      id: ethers.BigNumberish,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'kill(bytes32)': (
      id: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'make(address,address,uint128,uint128)': (
      pay_gem: string,
      buy_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'offer(uint256,address,uint256,address,uint256)': (
      pay_amt: ethers.BigNumberish,
      pay_gem: string,
      buy_amt: ethers.BigNumberish,
      buy_gem: string,
      pos: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'sellAllAmount(address,uint256,address,uint256)': (
      pay_gem: string,
      pay_amt: ethers.BigNumberish,
      buy_gem: string,
      min_fill_amount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setBuyEnabled(bool)': (
      buyEnabled_: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setMatchingEnabled(bool)': (
      matchingEnabled_: boolean,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setMinSell(address,uint256)': (
      pay_gem: string,
      dust: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'stop()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'take(bytes32,uint128)': (
      id: string | ethers.utils.BytesLike,
      maxTakeAmount: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
