import Web3 from 'web3';

const arbitrumRpc = 'https://arb1.arbitrum.io/rpc';
const web3 = new Web3(arbitrumRpc);
const _IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
const proxyAddress = "0x8085fedcfd35D8346b98A2E3Beb58cFD88876BF9";

const getProxyImplementation = async () => {
    const response = await web3.eth.getStorageAt(proxyAddress, _IMPLEMENTATION_SLOT)
    return response
}

getProxyImplementation().then(response => {
    const formattedAddress = response.replace("0x000000000000000000000000", "0x")
    console.log(formattedAddress)
})
