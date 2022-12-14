export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/jamesbwn/halcyon"; //theredpilldao_subgraph, https://api.thegraph.com/subgraphs/name/hectordao-hec/hector-dao-alt
export const EPOCH_INTERVAL = 2400;



// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 12;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  // 4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  // 1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  5: {
    DAI_ADDRESS: "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60",        // Enter
    USDC_ADDRESS: "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C",       // Enter
    HEC_ADDRESS: "0xF6b2d49CC186D924BD4b2E4A63002c423c1407e9",        // Enter
    STAKING_ADDRESS: "0xb6c29d4c8DBACcE43DE56b8EEdFAE8F84aE86596",    // Enter
    STAKING_HELPER_ADDRESS: "0x312cFb3cdf3BA9843AC507f91AfAb7A3F23495fB",   // Enter
    OLD_STAKING_ADDRESS: "0xb6c29d4c8DBACcE43DE56b8EEdFAE8F84aE86596",
    SHEC_ADDRESS: "0xa918019FC8220536094023dDe8Dc0A6f7967d953",
    WSOHM_ADDRESS: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
    OLD_SHEC_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x6B3b25e16E9dcF7B4fcC3F3B42C7FA348de77B45",      // Enter
    BONDINGCALC_ADDRESS: "0xC0d55251a50891b981b3067929926FA33f0642C0",      // Enter
    BONDINGCALC_ADDRESS1: "0xC0d55251a50891b981b3067929926FA33f0642C0", //#
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0fca1A50fE0f0954A84f2101B6b9ffBF60B7a04d",       
    REDEEM_HELPER_ADDRESS: "0x45d12aA5c8aA17BDdC4255f152E8D7b938B0E210",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  1: {
    DAI_ADDRESS: "0x6B175474E89094C44Da98b954EedeAC495271d0F", 
    USDT_ADDRESS: "0xdAC17F958D2ee523a2206206994597C13D831ec7",  
    USDC_ADDRESS: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    HEC_ADDRESS: "0xc3B20CF63B36909cd43A91C2786C373bc7D708Ab",
    STAKING_ADDRESS: "0x071584639F153668eb79E144826EC054B36eFEde", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x9f9107eDe88947F374477487D83447A316411340", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x071584639F153668eb79E144826EC054B36eFEde", //#
    OLD_STAKING_HELPER_ADDRESS: "0x9f9107eDe88947F374477487D83447A316411340", //#
    SHEC_ADDRESS: "0xa9E6559D6bc9e2AfC633E6558647f077D7970713",
    OLD_SHEC_ADDRESS: "0xa9E6559D6bc9e2AfC633E6558647f077D7970713", //#
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d", //#
    DISTRIBUTOR_ADDRESS: "0xaF5f18C846a73C0308369B74F485cd1e75381c33", //#
    BONDINGCALC_ADDRESS: "0x0d07314924cDBCa74C9Ec28d8Da0010668137BBA",
    BONDINGCALC_ADDRESS1: "0x0d07314924cDBCa74C9Ec28d8Da0010668137BBA", //#
    TREASURY_ADDRESS: "0xde5A191Da37a6c04630467dC19f41F58FbbCBF96",
    REDEEM_HELPER_ADDRESS: "0x25Bd767698246658F9Cdbb9021eb8B6940add17e",
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // #  33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // #  NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", //#   NEW
  },
};
