/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTStaking,
  NFTStakingInterface,
} from "../../../contracts/NFTStaking.sol/NFTStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "contract IRewardToken",
        name: "_rewardsToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "ClaimableStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "EmergencyUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimableTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "emergencyUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getStakedTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IRewardToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    name: "setTokensClaimable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "stakeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedTotal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsReleased",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpauseStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "unstakeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "updateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018ec380380620018ec8339810160408190526200003491620001a9565b6200003f336200008e565b6000805460ff60a01b19169055600280546001600160a01b038085166001600160a01b031992831617909255600180549284169290911691909117905562000086620000de565b5050620001e8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000f2600054600160a01b900460ff1690565b15620001375760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640160405180910390fd5b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258620001733390565b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0381168114620001a657600080fd5b50565b60008060408385031215620001bd57600080fd5b8251620001ca8162000190565b6020840151909250620001dd8162000190565b809150509250929050565b6116f480620001f86000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c8063715018a6116100d8578063bab8fe401161008c578063d66692a711610066578063d66692a71461038b578063e64a21f314610394578063f2fde38b146103a757600080fd5b8063bab8fe4014610358578063d1af0c7d14610365578063d279c1911461037857600080fd5b80639168ae72116100bd5780639168ae72146102fe57806393f4bcde1461033d578063a694fc3a1461034557600080fd5b8063715018a6146102e55780638da5cb5b146102ed57600080fd5b806347ccca021161013a578063632447c911610114578063632447c91461029b57806363c28db1146102ae5780636abfd183146102ce57600080fd5b806347ccca0214610257578063542360fd1461026a5780635c975abb1461027d57600080fd5b80631caaa4871161016b5780631caaa487146101f0578063230f436d146102315780632e17de781461024457600080fd5b8063012ce50114610187578063150b7a021461019c575b600080fd5b61019a610195366004611363565b6103ba565b005b6101ba6101aa3660046113d8565b630a85bd0160e11b949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6102196101fe366004611363565b6006602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016101e7565b61019a61023f36600461149c565b61048e565b61019a610252366004611363565b610520565b600254610219906001600160a01b031681565b61019a610278366004611542565b610536565b600054600160a01b900460ff165b60405190151581526020016101e7565b61019a6102a936600461156b565b6105d7565b6102c16102bc36600461156b565b6107e2565b6040516101e79190611588565b6102d760045481565b6040519081526020016101e7565b61019a61084e565b6000546001600160a01b0316610219565b61032861030c36600461156b565b6005602052600090815260409020600281015460039091015482565b604080519283526020830191909152016101e7565b61019a6108b4565b61019a610353366004611363565b610973565b60075461028b9060ff1681565b600154610219906001600160a01b031681565b61019a61038636600461156b565b6109ca565b6102d760035481565b61019a6103a236600461149c565b610b8c565b61019a6103b536600461156b565b610c1f565b6000818152600660205260409020546001600160a01b0316331461044b5760405162461bcd60e51b815260206004820152602d60248201527f6e66742e5f756e7374616b653a2053656e646572206d7573742068617665207360448201527f74616b656420746f6b656e49440000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104553382610cfe565b60405181815233907f571394674ec9d9e81517060110f8f894ce912af2b2febc091bee0cdea68adf00906020015b60405180910390a250565b600054600160a01b900460ff16156104db5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b60005b815181101561051c5761050a338383815181106104fd576104fd6115cc565b6020026020010151610f54565b80610514816115f8565b9150506104de565b5050565b610529336109ca565b6105333382610cfe565b50565b6000546001600160a01b031633146105905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610442565b6007805460ff19168215159081179091556040519081527f4a113b1b56ac87c884bce0b1715ef967c43f546e247aa746d79d92335fe9f8259060200160405180910390a150565b6001600160a01b03811660009081526005602052604081209081905b81548110156107dc5761060760b442611611565b83600101600084848154811061061f5761061f6115cc565b90600052602060002001548152602001908152602001600020541080156106775750600083600101600084848154811061065b5761065b6115cc565b9060005260206000200154815260200190815260200160002054115b156107ca57600060b4846001016000858581548110610698576106986115cc565b9060005260206000200154815260200190815260200160002054426106bd9190611629565b6106c79190611656565b9050600060b48560010160008686815481106106e5576106e56115cc565b90600052602060002001548152602001908152602001600020544261070a9190611629565b610714919061166a565b905061072882678ac7230489e8000061167e565b85600201600082825461073b9190611611565b9091555061074b90508142611611565b856001016000868681548110610763576107636115cc565b90600052602060002001548152602001908152602001600020819055506107ba85600101600086868154811061079b5761079b6115cc565b90600052602060002001548152602001908152602001600020546111a3565b6107c785600201546111a3565b50505b806107d4816115f8565b9150506105f3565b50505050565b6001600160a01b03811660009081526005602090815260409182902080548351818402810184019094528084526060939283018282801561084257602002820191906000526020600020905b81548152602001906001019080831161082e575b50505050509050919050565b6000546001600160a01b031633146108a85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610442565b6108b260006111fd565b565b6000546001600160a01b0316331461090e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610442565b600054600160a01b900460ff166109675760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610442565b426004556108b261125a565b600054600160a01b900460ff16156109c05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b6105333382610f54565b60075460ff161515600114610a215760405162461bcd60e51b815260206004820152601d60248201527f546f6b656e732063616e6e6e6f7420626520636c61696d6564207965740000006044820152606401610442565b6001600160a01b038116600090815260056020526040902060020154610a895760405162461bcd60e51b815260206004820152600d60248201527f30207265776172647320796574000000000000000000000000000000000000006044820152606401610442565b6001600160a01b038116600090815260056020526040812060028101546003909101805491929091610abc908490611611565b90915550506001600160a01b0381811660008181526005602052604080822060020182905560015490516340c10f1960e01b815260048101939093526024830191909152909116906340c10f1990604401600060405180830381600087803b158015610b2757600080fd5b505af1158015610b3b573d6000803e3d6000fd5b505050506001600160a01b0381166000818152600560209081526040918290206002015491519182527fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04869101610483565b610b95336109ca565b60005b815181101561051c57336001600160a01b031660066000848481518110610bc157610bc16115cc565b6020908102919091018101518252810191909152604001600020546001600160a01b031603610c0d57610c0d33838381518110610c0057610c006115cc565b6020026020010151610cfe565b80610c17816115f8565b915050610b98565b6000546001600160a01b03163314610c795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610442565b6001600160a01b038116610cf55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610442565b610533816111fd565b6000818152600660205260409020546001600160a01b03838116911614610d8d5760405162461bcd60e51b815260206004820152603c60248201527f4e6674205374616b696e672053797374656d3a2075736572206d75737420626560448201527f20746865206f776e6572206f6620746865207374616b6564206e6674000000006064820152608401610442565b6001600160a01b03821660009081526005602052604081208054909190610db690600190611629565b90506000826000018281548110610dcf57610dcf6115cc565b600091825260209091200154835490915015610e0d578254839080610df657610df661169d565b600190038181906000526020600020016000905590555b6000848152600184016020526040812081905560028401549003610e5f576001600160a01b038516600090815260056020526040812090610e4e8282611331565b506000600282018190556003909101555b60008481526006602052604090819020805473ffffffffffffffffffffffffffffffffffffffff191690556002549051632142170760e11b81523060048201526001600160a01b03878116602483015260448201879052909116906342842e0e90606401600060405180830381600087803b158015610edd57600080fd5b505af1158015610ef1573d6000803e3d6000fd5b5050604080516001600160a01b0389168152602081018890527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75935001905060405180910390a160038054906000610f48836116b3565b91905055505050505050565b6002546040516331a9108f60e11b8152600481018390526001600160a01b03848116921690636352211e90602401602060405180830381865afa158015610f9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc391906116ca565b6001600160a01b0316146110195760405162461bcd60e51b815260206004820152601e60248201527f75736572206973206e6f74206f776e6572206f662074686520746f6b656e00006044820152606401610442565b6001600160a01b03828116600081815260056020908152604080832080546001808201835582865284862090910188905587855281018352818420429055600690925291829020805473ffffffffffffffffffffffffffffffffffffffff1916909317909255600254905163095ea7b360e01b8152306004820152602481018590529192169063095ea7b390604401600060405180830381600087803b1580156110c257600080fd5b505af11580156110d6573d6000803e3d6000fd5b5050600254604051632142170760e11b81526001600160a01b0387811660048301523060248301526044820187905290911692506342842e0e9150606401600060405180830381600087803b15801561112e57600080fd5b505af1158015611142573d6000803e3d6000fd5b5050604080516001600160a01b0387168152602081018690527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d935001905060405180910390a160038054906000611199836115f8565b9190505550505050565b610533816040516024016111b991815260200190565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663f5b1bba960e01b179052611310565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff166112b35760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610442565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b508054600082559060005260206000209081019061053391905b8082111561135f576000815560010161134b565b5090565b60006020828403121561137557600080fd5b5035919050565b6001600160a01b038116811461053357600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156113d0576113d0611391565b604052919050565b600080600080608085870312156113ee57600080fd5b84356113f98161137c565b935060208581013561140a8161137c565b935060408601359250606086013567ffffffffffffffff8082111561142e57600080fd5b818801915088601f83011261144257600080fd5b81358181111561145457611454611391565b611466601f8201601f191685016113a7565b9150808252898482850101111561147c57600080fd5b808484018584013760008482840101525080935050505092959194509250565b600060208083850312156114af57600080fd5b823567ffffffffffffffff808211156114c757600080fd5b818501915085601f8301126114db57600080fd5b8135818111156114ed576114ed611391565b8060051b91506114fe8483016113a7565b818152918301840191848101908884111561151857600080fd5b938501935b838510156115365784358252938501939085019061151d565b98975050505050505050565b60006020828403121561155457600080fd5b8135801515811461156457600080fd5b9392505050565b60006020828403121561157d57600080fd5b81356115648161137c565b6020808252825182820181905260009190848201906040850190845b818110156115c0578351835292840192918401916001016115a4565b50909695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161160a5761160a6115e2565b5060010190565b60008219821115611624576116246115e2565b500190565b60008282101561163b5761163b6115e2565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261166557611665611640565b500490565b60008261167957611679611640565b500690565b6000816000190483118215151615611698576116986115e2565b500290565b634e487b7160e01b600052603160045260246000fd5b6000816116c2576116c26115e2565b506000190190565b6000602082840312156116dc57600080fd5b81516115648161137c56fea164736f6c634300080d000a";

type NFTStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTStaking__factory extends ContractFactory {
  constructor(...args: NFTStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _nft: string,
    _rewardsToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTStaking> {
    return super.deploy(
      _nft,
      _rewardsToken,
      overrides || {}
    ) as Promise<NFTStaking>;
  }
  override getDeployTransaction(
    _nft: string,
    _rewardsToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nft, _rewardsToken, overrides || {});
  }
  override attach(address: string): NFTStaking {
    return super.attach(address) as NFTStaking;
  }
  override connect(signer: Signer): NFTStaking__factory {
    return super.connect(signer) as NFTStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTStakingInterface {
    return new utils.Interface(_abi) as NFTStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTStaking {
    return new Contract(address, _abi, signerOrProvider) as NFTStaking;
  }
}