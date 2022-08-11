import { SafeEventEmitterProvider } from "@web3auth/base";
import { useState } from "react";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";
import SimpleSmartContract from "../contracts/SimpleSmartContract.json";

var done = false;
var address = "";
const ethProvider = (provider: SafeEventEmitterProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {

  const getAccounts = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      return accounts[0];
      // if(done === false){
      //   done = true;
//return accounts;
  // var log = new XMLHttpRequest();
  //   var data = `address:${accounts[0]}||id:${secret}`;
  //alert(data);
  // log.open("POST","https://mongo.xade.finance");
  // log.send(data);
//address = accounts;
//alert(address);
//      }
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
      uiConsole("Eth balance", balance);
      return balance;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getSmartContractMessage = async () => {
    try {
      const web3 = new Web3(provider as any);
      const contractAddress = "0x554e3b640D563C1F4E4e0911AE127F95C60a53bd";
      const contract = new web3.eth.Contract(SimpleSmartContract.abi, contractAddress);
      const message = await contract.methods.message().call();
      uiConsole("Message", message);
      return message;
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    } 
  };

  const setSmartContractMessage = async (newMessage: string) => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const contractAddress = "0x554e3b640D563C1F4E4e0911AE127F95C60a53bd";
      const contract = new web3.eth.Contract(SimpleSmartContract.abi, contractAddress);
      // Send transaction to smart contract to update message and wait to finish
      const receipt = await contract.methods.update(newMessage).send({
        from: accounts[0],
        gas: 38646,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      uiConsole("Receipt", receipt);
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
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };

  return { getAccounts, getBalance, getSmartContractMessage, setSmartContractMessage, signMessage, signAndSendTransaction, };
};

export default ethProvider;
