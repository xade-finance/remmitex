export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://api-alfajores.celoscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=P74P47ASILQ35VQ3G3UK9BENFR68FXV1VJ`);
        return await response.json();
    } catch(error) {
        return [];
    }
} 