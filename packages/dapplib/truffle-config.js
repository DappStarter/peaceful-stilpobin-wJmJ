require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind hub harvest glory bridge session'; 
let testAccounts = [
"0x1dc40b0bf5e2678715a450723f4c40c21d5f13d9825e8b0935f967353957f474",
"0xd6b56add4df2217d9f7edac53f6b69cdbdee71a584f7fd04bd09da1fbe7b3a25",
"0x6a663b6e569172df120a27edf183ebf17567509d1a9c16df892e34bd01b13187",
"0xe15499de0a3f44e094bac5acb46258088906299c75615282f836570e2da66951",
"0x75caf672c80632b44fe9509d8660aca7047242a4f414d5f8ffb378d9a9281ef6",
"0x5e12a6e8ed850bcc10d42cb32e62db6fdeb17377f54185db145864fd9e3334d2",
"0xfef5c2610039adeb80fd2e8f1ee50e1482ca10c83d96ae156a423f2fccb53c20",
"0x493e02de8e1ce07afbbe68f0e7d0f30524088d814b066cfd93cd274e6809f653",
"0xf3b04a85271ee1f44eb50f4641c9c7d690e62cc89e2dbb6fca1d463ded3981ac",
"0x26a42258d61db509e3b0d0b761a2ad27e4dfb31e06d4616ad57f20323e6408b0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

