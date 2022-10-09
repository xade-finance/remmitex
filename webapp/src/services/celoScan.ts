export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://alfajores-blockscout.celo-testnet.org/api?module=account&action=tokentx&address=${address}&contractaddress=0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1`);
        return await response.json();
    } catch(error) {
        return [];
    }
} 
