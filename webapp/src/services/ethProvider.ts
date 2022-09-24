import { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";

var done = false;
var address = "";
const ethProvider = (provider: SafeEventEmitterProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {
  const getAccounts = async (secret) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      if(done === false){
        done = true;
//return accounts;
  var log = new XMLHttpRequest();
    var data = `address:${accounts[0]}||id:${secret}`;
  //alert(data);
  log.open("POST","https://mongo.api.xade.finance");
  log.send(data);
console.log(accounts);
//return accounts[0];
//address = accounts;
//alert(address);
      }
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };


  const getBalance = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    try {
      const pubKey = (await provider.request({ method: "eth_accounts" })) as string[];
      const web3 = new Web3(provider as any);
      const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
      (web3.currentProvider as any)?.send(
        {
          method: "eth_sign",
          params: [pubKey[0], message],
          from: pubKey[0],
        },
        (err: Error, result: any) => {
          if (err) {
            return uiConsole(err);
          }
          uiConsole("Eth sign message => true", result);
        }
      );
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };

const signAndSendTransaction = async (toAddress: string, amount: string) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const txRes = await web3.eth.sendTransaction({
        from: accounts[0],
        to: toAddress,
        value: web3.utils.toWei(amount),
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      uiConsole("txRes", txRes);
      if (txRes.status == '0x1' || txRes.status == 1) {
        console.log(`${txRes.status} Transaction Success`);
        return true;
      } else {
        console.log(`${txRes.status} Transaction Failed`);
        return false;
      }
    } catch (error) {
      console.log("Could not process transaction!")
      console.log("error", error);
      return false;
    }
  };

  return { getAccounts, getBalance, signAndSendTransaction };
};

export default ethProvider;
