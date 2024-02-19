## Listing a token

Please see the
[@Hi-828/NordekSwap](https://github.com/Hi-828/NordekSwap) 
repository.

## Development

### Install Dependencies

```bash
yarn install
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing NordekSwap Interface V1

The NordekSwap Interface supports swapping against, and migrating or removing liquidity from NordekSwap V1. However,
if you would like to use NordekSwap V1, the NordekSwap V1 interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://github.com/Hi-828/NordekSwap).
