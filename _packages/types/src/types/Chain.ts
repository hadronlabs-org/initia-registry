/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Denom = string;
export type Amount = string;

/**
 * Cosmos Chain.json is a metadata file that contains information about a cosmos sdk based chain.
 */
export interface Chain {
  $schema?: string;
  chain_name: string;
  chain_id: string;
  pre_fork_chain_name?: string;
  pretty_name?: string;
  website?: string;
  update_link?: string;
  status?: "live" | "upcoming" | "killed";
  network_type?: "mainnet" | "testnet" | "devnet";
  /**
   * The default prefix for the human-readable part of addresses that identifies the coin type. Must be registered with SLIP-0173. E.g., 'cosmos'
   */
  bech32_prefix: string;
  /**
   * Used to override the bech32_prefix for specific uses.
   */
  bech32_config?: {
    /**
     * e.g., 'cosmos'
     */
    bech32PrefixAccAddr?: string;
    /**
     * e.g., 'cosmospub'
     */
    bech32PrefixAccPub?: string;
    /**
     * e.g., 'cosmosvaloper'
     */
    bech32PrefixValAddr?: string;
    /**
     * e.g., 'cosmosvaloperpub'
     */
    bech32PrefixValPub?: string;
    /**
     * e.g., 'cosmosvalcons'
     */
    bech32PrefixConsAddr?: string;
    /**
     * e.g., 'cosmosvalconspub'
     */
    bech32PrefixConsPub?: string;
  };
  daemon_name?: string;
  node_home?: string;
  key_algos?: ("secp256k1" | "ethsecp256k1" | "ed25519" | "sr25519" | "bn254")[];
  slip44?: number;
  alternative_slip44s?: number[];
  fees?: {
    fee_tokens: FeeToken[];
  };
  staking?: {
    staking_tokens: StakingToken[];
    lock_duration?: {
      /**
       * The number of blocks for which the staked tokens are locked.
       */
      blocks?: number;
      /**
       * The approximate time for which the staked tokens are locked.
       */
      time?: string;
    };
  };
  codebase?: {
    git_repo?: string;
    recommended_version?: string;
    /**
     * Minimum accepted go version to build the binary.
     */
    go_version?: string;
    compatible_versions?: string[];
    binaries?: {
      "linux/amd64"?: string;
      "linux/arm64"?: string;
      "darwin/amd64"?: string;
      "darwin/arm64"?: string;
      "windows/amd64"?: string;
      "windows/arm64"?: string;
    };
    cosmos_sdk_version?: string;
    consensus?: {
      type: "tendermint" | "cometbft" | "sei-tendermint";
      version?: string;
    };
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
    /**
     * Relative path to the cosmwasm directory. ex. $HOME/.juno/data/wasm
     */
    cosmwasm_path?: string;
    ibc_go_version?: string;
    /**
     * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
     */
    ics_enabled?: ("ics20-1" | "ics27-1" | "mauth")[];
    genesis?: {
      name?: string;
      genesis_url: string;
      ics_ccv_url?: string;
    };
    versions?: {
      /**
       * Official Upgrade Name
       */
      name: string;
      /**
       * Git Upgrade Tag
       */
      tag?: string;
      /**
       * Block Height
       */
      height?: number;
      /**
       * Proposal that will officially signal community acceptance of the upgrade.
       */
      proposal?: number;
      /**
       * [Optional] Name of the previous version
       */
      previous_version_name?: string;
      /**
       * [Optional] Name of the following version
       */
      next_version_name?: string;
      recommended_version?: string;
      /**
       * Minimum accepted go version to build the binary.
       */
      go_version?: string;
      compatible_versions?: string[];
      cosmos_sdk_version?: string;
      consensus?: {
        type: "tendermint" | "cometbft" | "sei-tendermint";
        version?: string;
      };
      cosmwasm_version?: string;
      cosmwasm_enabled?: boolean;
      /**
       * Relative path to the cosmwasm directory. ex. $HOME/.juno/data/wasm
       */
      cosmwasm_path?: string;
      ibc_go_version?: string;
      /**
       * List of IBC apps (usually corresponding to a ICS standard) which have been enabled on the network.
       */
      ics_enabled?: ("ics20-1" | "ics27-1" | "mauth")[];
      binaries?: {
        "linux/amd64"?: string;
        "linux/arm64"?: string;
        "darwin/amd64"?: string;
        "darwin/arm64"?: string;
        "windows/amd64"?: string;
        "windows/arm64"?: string;
      };
    }[];
  };
  images?: (
    | {
        [k: string]: unknown;
      }
    | {
        [k: string]: unknown;
      }
  )[];
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  description?: string;
  peers?: {
    seeds?: Peer[];
    persistent_peers?: Peer[];
  };
  apis?: {
    rpc?: Endpoint[];
    rest?: Endpoint[];
    api?: Endpoint[];
    grpc?: Endpoint[];
    wss?: Endpoint[];
    "grpc-web"?: Endpoint[];
    "evm-http-jsonrpc"?: Endpoint[];
  };
  explorers?: Explorer[];
  faucets?: Faucet[];
  keywords?: string[];
  extra_codecs?: ("ethermint" | "injective")[];
  metadata?: {
    /**
     * [Optional] Indicates if the chain is a layer 1 chain.
     */
    is_l1?: boolean;
    /**
     * [Optional] The identifier of the OPinit bridge used to transfer assets between L1 and L2.
     */
    op_bridge_id?: string;
    /**
     * [Optional] The list of denoms that are supported by the OPinit bridge.
     */
    op_denoms?: string[];
    /**
     * [Optional] A list specifying coin amounts by denomination that exempt users from transaction fees when their balance meets or exceeds these amounts.
     */
    free_tx_threshold?: {
      denom: Denom;
      amount: Amount;
    }[];
    /**
     * [Optional] The list of IBC channels that are supported by the chain.
     */
    ibc_channels?: {
      chain_id: string;
      port_id: string;
      channel_id: string;
      version: string;
    }[];
    /**
     * URL pointing to the asset list, which provides metadata associated with Cosmos denoms.
     */
    assetlist?: string;
    /**
     * [Optional] The type of minitia and the version of it
     */
    minitia?: {
      type: "minimove" | "miniwasm" | "minievm" | "custom";
      /**
       * Version of minitia
       */
      version: string;
      [k: string]: unknown;
    };
  };
}
export interface FeeToken {
  denom: Denom;
  fixed_min_gas_price?: number;
  low_gas_price?: number;
  average_gas_price?: number;
  high_gas_price?: number;
  gas_costs?: {
    cosmos_send?: number;
    ibc_transfer?: number;
  };
}
export interface StakingToken {
  denom: Denom;
}
export interface Peer {
  id: string;
  address: string;
  provider?: string;
}
export interface Endpoint {
  address: string;
  provider?: string;
  archive?: boolean;
}
export interface Explorer {
  kind?: string;
  url?: string;
  tx_page?: string;
  account_page?: string;
}
export interface Faucet {
  kind?: string;
  url?: string;
}
