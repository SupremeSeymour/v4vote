export const proposalMaker = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_timelock",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_baseQuorum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minProposalPower",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_gsc",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "votingVaults",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "created",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "execution",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "expiration",
          "type": "uint256"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "votingPower",
              "type": "uint128"
            },
            {
              "internalType": "enum CoreVoting.Ballot",
              "name": "castBallot",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct CoreVoting.Vote",
          "name": "vote",
          "type": "tuple"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DAY_IN_BLOCKS",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvedVaults",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "authorize",
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
        }
      ],
      "name": "authorized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseQuorum",
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
          "name": "_extraVoteTime",
          "type": "uint256"
        }
      ],
      "name": "changeExtraVotingTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isValid",
          "type": "bool"
        }
      ],
      "name": "changeVaultStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "deauthorize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        }
      ],
      "name": "execute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "extraVoteTime",
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
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "getProposalVotingPower",
      "outputs": [
        {
          "internalType": "uint128[3]",
          "name": "",
          "type": "uint128[3]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "isAuthorized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockDuration",
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
      "inputs": [],
      "name": "minProposalPower",
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
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
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
          "internalType": "address[]",
          "name": "votingVaults",
          "type": "address[]"
        },
        {
          "internalType": "bytes[]",
          "name": "extraVaultData",
          "type": "bytes[]"
        },
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256",
          "name": "lastCall",
          "type": "uint256"
        },
        {
          "internalType": "enum CoreVoting.Ballot",
          "name": "ballot",
          "type": "uint8"
        }
      ],
      "name": "proposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proposalCount",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "proposalHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint128",
          "name": "created",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "unlock",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "expiration",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "quorum",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "lastCall",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes4",
          "name": "functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "quorums",
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
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes4",
          "name": "selector",
          "type": "bytes4"
        },
        {
          "internalType": "uint256",
          "name": "quorum",
          "type": "uint256"
        }
      ],
      "name": "setCustomQuorum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "quorum",
          "type": "uint256"
        }
      ],
      "name": "setDefaultQuorum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_lockDuration",
          "type": "uint256"
        }
      ],
      "name": "setLockDuration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minProposalPower",
          "type": "uint256"
        }
      ],
      "name": "setMinProposalPower",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "votingVaults",
          "type": "address[]"
        },
        {
          "internalType": "bytes[]",
          "name": "extraVaultData",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "enum CoreVoting.Ballot",
          "name": "ballot",
          "type": "uint8"
        }
      ],
      "name": "vote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
      "name": "votes",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "votingPower",
          "type": "uint128"
        },
        {
          "internalType": "enum CoreVoting.Ballot",
          "name": "castBallot",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
] as const