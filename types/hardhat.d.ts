/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "ElpisHeroDataStorages",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisHeroDataStorages__factory>;
    getContractFactory(
      name: "ElpisHeroesData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisHeroesData__factory>;
    getContractFactory(
      name: "ElpisHeroMarketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisHeroMarketplace__factory>;
    getContractFactory(
      name: "ElpisMetaverseHeroes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisMetaverseHeroes__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Pausable__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ElpisHeroMarketplaceEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisHeroMarketplaceEvents__factory>;
    getContractFactory(
      name: "ElpisHeroTradable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElpisHeroTradable__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "ElpisHeroDataStorages",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisHeroDataStorages>;
    getContractAt(
      name: "ElpisHeroesData",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisHeroesData>;
    getContractAt(
      name: "ElpisHeroMarketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisHeroMarketplace>;
    getContractAt(
      name: "ElpisMetaverseHeroes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisMetaverseHeroes>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Burnable>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Pausable>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ElpisHeroMarketplaceEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisHeroMarketplaceEvents>;
    getContractAt(
      name: "ElpisHeroTradable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElpisHeroTradable>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
