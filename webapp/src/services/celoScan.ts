export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://api-alfajores.celoscan.io/api?module=account&action=txlist&address=${address}&sort=desc`);
        return await response.json();
    } catch(error) {
        return [];
    }
}
