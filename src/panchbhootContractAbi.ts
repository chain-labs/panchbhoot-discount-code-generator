const panchbhootContractAbi = [
    {
      "inputs": [],
      "name": "AccountNotInAllowlist",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ArraysLengthDontMatch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_invalidDiscountIndex",
          "type": "uint256"
        }
      ],
      "name": "DiscountCodeAlreadyUsed",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint96",
          "name": "_invalidStartTime",
          "type": "uint96"
        },
        {
          "internalType": "uint256",
          "name": "_invalidEndTime",
          "type": "uint256"
        }
      ],
      "name": "EndTimeBehindStartTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedsSaleSupply",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedsTokensPerTransactionLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExceedsTokensPerWalletLimit",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_invalidSaleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "InexistentSaleCategory",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDiscountCode",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_invalidPerTransactionLimit",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_invalidPerWalletLimit",
          "type": "uint64"
        }
      ],
      "name": "PerTransactionLimitGreaterThanPerWalletLimit",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_inactivePhase",
          "type": "uint8"
        }
      ],
      "name": "PhaseInactive",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_currentPhaseId",
          "type": "uint8"
        }
      ],
      "name": "PhaseIsAlreadyActive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SaleNotActive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SaleNotAllowlisted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SaleNotDiscounted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SalePaused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SetTokensToReserveForAllPhases",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint96",
          "name": "_invalidStartTime",
          "type": "uint96"
        }
      ],
      "name": "StartTimeInPast",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_phaseId",
          "type": "uint8"
        }
      ],
      "name": "TokensAlreadyReservedForPhase",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferExactAmount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "_phase",
          "type": "uint8"
        }
      ],
      "name": "AddedSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_oldAvatar",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newAvatar",
          "type": "address"
        }
      ],
      "name": "AvatarUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_discountCodeIndex",
          "type": "uint256"
        }
      ],
      "name": "DiscountCodeApplied",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "DiscountDisabledOnSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "DiscountEnabledOnSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newDiscountSigner",
          "type": "address"
        }
      ],
      "name": "DiscountSignerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract IERC20Upgradeable",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ERC20PaymentReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_newKeyCardRatio",
          "type": "uint64"
        }
      ],
      "name": "KeyCardRatioUpdatedForSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_oldKeyCard",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newKeyCard",
          "type": "address"
        }
      ],
      "name": "MemberKeyCardUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "_newMerkleRoot",
          "type": "bytes32"
        }
      ],
      "name": "MerkleRootUpdatedSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "PausedSale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "PayeeAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "PaymentReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "PaymentReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_newPerTransactionLimit",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_newPerWalletLimit",
          "type": "uint64"
        }
      ],
      "name": "PerLimitUpdatedOfSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum IController.PHASE_ID",
          "name": "newPhaseId",
          "type": "uint8"
        }
      ],
      "name": "PhaseChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newPrice",
          "type": "uint256"
        }
      ],
      "name": "PriceUpdatedForSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_newSupplyForTheSale",
          "type": "uint64"
        }
      ],
      "name": "SupplyUpdatedForSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "_newStartTime",
          "type": "uint96"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "_newEndTime",
          "type": "uint96"
        }
      ],
      "name": "TimeUpdatedForSaleCategory",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum IController.PHASE_ID",
          "name": "phaseId",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "tokensToReserve",
          "type": "uint96"
        }
      ],
      "name": "TokenToReserveUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum IController.PHASE_ID",
          "name": "phaseId",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint96",
          "name": "numberOfTokensReserved",
          "type": "uint96"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "TokensReserved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "UnpausedSale",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "EMPTY_BYTES",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_PHASES",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "NAME",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VERSION",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint96",
          "name": "_startTime",
          "type": "uint96"
        },
        {
          "internalType": "uint96",
          "name": "_endTime",
          "type": "uint96"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_perWalletLimit",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_perTransactionLimit",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_supply",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_keyCardPerAvatar",
          "type": "uint64"
        },
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_phase",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "_isDiscountEnabled",
          "type": "bool"
        }
      ],
      "name": "addSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_discountIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountedPrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiverAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "checkDiscountCodeValidity",
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
          "internalType": "enum IController.PHASE_ID",
          "name": "_phaseId",
          "type": "uint8"
        }
      ],
      "name": "checkIfTokenReservedForPhase",
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
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "_newKeyCardRatio",
          "type": "uint64"
        }
      ],
      "name": "editKeyCardRatioOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_newMerkleRoot",
          "type": "bytes32"
        }
      ],
      "name": "editMerkleRootOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "_newPerWalletLimit",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_newPerTransactionLimit",
          "type": "uint64"
        }
      ],
      "name": "editPerLimitOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_newPrice",
          "type": "uint256"
        }
      ],
      "name": "editPriceOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "uint96",
          "name": "_newStartTime",
          "type": "uint96"
        },
        {
          "internalType": "uint96",
          "name": "_newEndTime",
          "type": "uint96"
        }
      ],
      "name": "editSaleTimeOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "_newTokensSupply",
          "type": "uint64"
        }
      ],
      "name": "editSupplyOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAvatar",
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
      "inputs": [],
      "name": "getCurrentPhase",
      "outputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDiscountSigner",
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
      "inputs": [],
      "name": "getKeyCard",
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
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        }
      ],
      "name": "getSaleCategory",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "perWalletLimit",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "perTransactionLimit",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "supply",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "tokensMinted",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "keyCardPerAvatar",
              "type": "uint64"
            },
            {
              "internalType": "uint96",
              "name": "startTime",
              "type": "uint96"
            },
            {
              "internalType": "uint96",
              "name": "endTime",
              "type": "uint96"
            },
            {
              "internalType": "enum IController.PHASE_ID",
              "name": "phase",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "paused",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isDiscountEnabled",
              "type": "bool"
            }
          ],
          "internalType": "struct IController.SaleCategory",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSaleCategoryCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "counter",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_phaseId",
          "type": "uint8"
        }
      ],
      "name": "getTokensToReserveInPhase",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newAvatar",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newKeyCard",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newDiscountSigner",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_payees",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_shares",
          "type": "uint256[]"
        },
        {
          "internalType": "uint96[]",
          "name": "_tokensToReserveInPhase",
          "type": "uint96[]"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_numberOfTokens",
          "type": "uint96"
        },
        {
          "internalType": "bytes32[]",
          "name": "_proofs",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "_saleId",
          "type": "uint256"
        }
      ],
      "name": "mintAllowlisted",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_numberOfTokens",
          "type": "uint96"
        },
        {
          "internalType": "uint256",
          "name": "_saleId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountedPrice",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "mintDiscounted",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_numberOfTokens",
          "type": "uint96"
        },
        {
          "internalType": "bytes32[]",
          "name": "_proofs",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "_saleId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountedPrice",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "mintDiscountedAllowlist",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "_numberOfTokens",
          "type": "uint96"
        },
        {
          "internalType": "uint256",
          "name": "_saleId",
          "type": "uint256"
        }
      ],
      "name": "mintPublic",
      "outputs": [],
      "stateMutability": "payable",
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
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "payee",
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
      "inputs": [],
      "name": "pendingOwner",
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
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "releasable",
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
          "internalType": "contract IERC20Upgradeable",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "releasable",
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
          "internalType": "address payable",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "release",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Upgradeable",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "release",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Upgradeable",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "released",
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "released",
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
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_phaseId",
          "type": "uint8"
        }
      ],
      "name": "reserveTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newAvatar",
          "type": "address"
        }
      ],
      "name": "setAvatar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newDiscountSigner",
          "type": "address"
        }
      ],
      "name": "setDiscountSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newKeyCard",
          "type": "address"
        }
      ],
      "name": "setKeyCard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID",
          "name": "_newPhase",
          "type": "uint8"
        }
      ],
      "name": "setNewPhase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IController.PHASE_ID[]",
          "name": "_phaseId",
          "type": "uint8[]"
        },
        {
          "internalType": "uint96[]",
          "name": "_numberOfTokens",
          "type": "uint96[]"
        }
      ],
      "name": "setTokensToReserveInPhase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "shares",
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
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isDiscounted",
          "type": "bool"
        }
      ],
      "name": "toggleDiscountOfSaleCategory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleCategoryId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_isPaused",
          "type": "bool"
        }
      ],
      "name": "togglePauseSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "tokensMintedByOwnerInSale",
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
          "internalType": "contract IERC20Upgradeable",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "totalReleased",
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
      "name": "totalReleased",
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
      "name": "totalShares",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]

export default panchbhootContractAbi;