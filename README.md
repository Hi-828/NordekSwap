## Listing a token

Please see the
[@Hi-828/NordekSwap](https://github.com/Hi-828/NordekSwap) 
repository.

## Development

This website was built of React Typescript version 16.13.1 working on node version > v16.0.
There used infura api to track transactions and coingecko api to get token's price. 


### Install Dependencies

```bash
npm install
```

### Run

```bash
npm run start
```
### Build

```bash
npm run build
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Accessing NordekSwap Interface V1

The NordekSwap Interface supports swapping against, and migrating or removing liquidity from NordekSwap V1. However,
if you would like to use NordekSwap V1, the NordekSwap V1 interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://nordekdexui.web.app).

## Contributed tokens

"eth", "aave", "ape", "axs", "chz", "dai", "fet", "ftm", "gala", "grt", "imx", "inj", "ldo", "link", "mana", "matic", "mkr", "qnt", "rndr", "sand", "shib", "snx", "uni", "usdc", "usdt", "wbtc",

## Live website

[https://nordekdexui.web.app/#/swap](https://nordekdexui.web.app/#/swap)

## Limitation

We used the free plan coingecko API. So there is a limitation to accessing API per minute and getting tokens.