require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember method give prison orange genuine'; 
let testAccounts = [
"0xc061c5d1446310c6c604022e9bd60b6821eb06160718627ae0621a1e6cbe570a",
"0x959b2c6ba1863be0d1b37ce1e352c91e48a357d9ac44c89f05b6d3988afecd97",
"0xfe1cf81d19f6335214463ec4182d2796662bf400960dac05f8db4c7bb8004286",
"0x0d256d873911d1a8c498d4a426588f672649ec1b4c852c2df91bbd4c34dcc371",
"0xe89e0529169e349823d7b410bf7f7cd4782d479742c1d3d7fa3865b193eab9f4",
"0x0641e1fce86c613becbb4fd23cb6f655d5dcc7e62cd75f167bb06b4d797a67dd",
"0x29ab520368945955743a88b2b345291926ca62971e37de6544874daa42c9dcc8",
"0x856db6dbf2ea9f37f2c704f279faee0afbe05842b1c1d5e81c4ef0537025c99b",
"0x69eed69dd149aa035f925b08b40c997fdcea4207003754378d1a8f1c3b5fd4dc",
"0x32e097cf5ed777b96c4d58e0c13db2bc932dcf179469809cc0219d7f15a4fb9e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


