/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ElpisHeroDataStorages,
  ElpisHeroDataStoragesInterface,
} from "../ElpisHeroDataStorages";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "elpisHeroesData",
    outputs: [
      {
        internalType: "uint256",
        name: "elpisHeroId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "elpisHeroName",
        type: "string",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "heroPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "reputation",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102dd806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630b9d8e3614610030575b600080fd5b61004361003e3660046101d1565b61005e565b60405161005596959493929190610234565b60405180910390f35b6000818154811061006e57600080fd5b6000918252602090912060069091020180546001820180549193509061009390610295565b80601f01602080910402602001604051908101604052809291908181526020018280546100bf90610295565b801561010c5780601f106100e15761010080835404028352916020019161010c565b820191906000526020600020905b8154815290600101906020018083116100ef57829003601f168201915b5050505060028301546003840154600485018054949573ffffffffffffffffffffffffffffffffffffffff909316949193509061014890610295565b80601f016020809104026020016040519081016040528092919081815260200182805461017490610295565b80156101c15780601f10610196576101008083540402835291602001916101c1565b820191906000526020600020905b8154815290600101906020018083116101a457829003601f168201915b5050505050908060050154905086565b6000602082840312156101e2578081fd5b5035919050565b60008151808452815b8181101561020e576020818501810151868301820152016101f2565b8181111561021f5782602083870101525b50601f01601f19169290920160200192915050565b86815260c06020820152600061024d60c08301886101e9565b73ffffffffffffffffffffffffffffffffffffffff87166040840152856060840152828103608084015261028181866101e9565b9150508260a0830152979650505050505050565b600181811c908216806102a957607f821691505b602082108114156102ca57634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c6343000804000a";

type ElpisHeroDataStoragesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElpisHeroDataStoragesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElpisHeroDataStorages__factory extends ContractFactory {
  constructor(...args: ElpisHeroDataStoragesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ElpisHeroDataStorages";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ElpisHeroDataStorages> {
    return super.deploy(overrides || {}) as Promise<ElpisHeroDataStorages>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ElpisHeroDataStorages {
    return super.attach(address) as ElpisHeroDataStorages;
  }
  connect(signer: Signer): ElpisHeroDataStorages__factory {
    return super.connect(signer) as ElpisHeroDataStorages__factory;
  }
  static readonly contractName: "ElpisHeroDataStorages";
  public readonly contractName: "ElpisHeroDataStorages";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElpisHeroDataStoragesInterface {
    return new utils.Interface(_abi) as ElpisHeroDataStoragesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ElpisHeroDataStorages {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ElpisHeroDataStorages;
  }
}