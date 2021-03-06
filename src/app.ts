import Web3 from 'web3';


const _IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

// rpc of chain that proxy is located on
const rpc = 'https://arb1.arbitrum.io/rpc';
const web3 = new Web3(rpc);

// input your proxy address here
const proxyAddress = "0x55a9e5cdb11e9812b40233e504380c68a3b8c901";

const getProxyImplementation = async () => {
    const response = await web3.eth.getStorageAt(proxyAddress, _IMPLEMENTATION_SLOT)
    return response
}

getProxyImplementation().then(response => {
    const formattedAddress = response.replace("0x000000000000000000000000", "0x")
    console.log(formattedAddress)
})
