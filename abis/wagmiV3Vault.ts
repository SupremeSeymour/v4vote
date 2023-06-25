export const wagmiV3Vault =[
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "contract IERC20",
          "name": "_govToken",
          "type": "address"
        },
        {
          "internalType": "contract IERC20",
          "name": "_weth",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "_feeTier",
          "type": "uint24"
        },
        {
          "internalType": "contract INonfungiblePositionManager",
          "name": "_NFTPositionManager",
          "type": "address"
        },
        {
          "internalType": "contract IUniswapV3Factory",
          "name": "_Factory",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "desiredPool",
              "type": "address"
            },
            {
              "internalType": "int24",
              "name": "centerTick",
              "type": "int24"
            },
            {
              "internalType": "int24",
              "name": "width",
              "type": "int24"
            },
            {
              "internalType": "address",
              "name": "userToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "token0AmountDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "token1AmountDesired",
              "type": "uint256"
            }
          ],
          "internalType": "struct V3Vault.posInfo",
          "name": "v3Info",
          "type": "tuple"
        }
      ],
      "name": "mintPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "queryVotePower",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "viewUserPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
] as const