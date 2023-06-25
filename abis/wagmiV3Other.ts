export const wagmiV3Other = [
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
          "internalType": "address",
          "name": "mailBoxAddy",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "gasAddy",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_foreignChainID",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "interchainGasPaymaster",
      "outputs": [
        {
          "internalType": "contract IInterchainGasPaymaster",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "struct otherChainVault.posInfo",
          "name": "v3Info",
          "type": "tuple"
        }
      ],
      "name": "mintPosition",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "destination",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "gasAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "specifiedUser",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "width",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "liquidty",
          "type": "uint128"
        },
        {
          "internalType": "int24",
          "name": "lowerBound",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "upperBound",
          "type": "int24"
        }
      ],
      "name": "sendPositionInfo",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "transferBack",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
] as const