import { createStore } from "vuex";
import Web3 from "web3/dist/web3.min.js";
const { ethereum } = window;
const web3 = new Web3(ethereum);
import detectEthereumProvider from "@metamask/detect-provider";

const FAETH = require("../build/FAETH.json");

let contract = new web3.eth.Contract(
  FAETH.abi,
  "0xc088078F77EA94b0747C3C0a8E541f1330F4C8f4"
);

export default createStore({
  state() {
    return {
      account: "",
      network: "",
      flipOutput: "",
      flipCount: "",
      loading: false,
    };
  },
  getters: {},
  mutations: {},
  actions: {
    async connect(state) {
      const provider = await detectEthereumProvider();
      if (provider) {
        if (provider !== ethereum) {
          console.error("Metamask not installed");
        } else {
          await web3.eth.getAccounts().then(async (accounts) => {
            state.state.network = await web3.eth.getChainId();
            if (accounts.length > 0) {
              state.state.account = accounts[0];
            } else {
              await ethereum
                .request({ method: "eth_requestAccounts" })
                .then(async () => {
                  const acc = await web3.eth.getAccount();
                  state.state.account = acc[0];
                });
            }
          });
        }
      }
    },
    async Flip(store) {
      store.state.loading = true;
      let address = store.state.account;
      if (address) {
        await contract.methods.flip().send({ from: address });
        let data = await contract.methods.temp().call();
        store.state.flipCount = await contract.methods.count().call();
        if (data == 0) {
          store.state.flipOutput = "heads";
        } else {
          store.state.flipOutput = "tails";
        }
      }
      store.state.loading = false;
    },
  },
  modules: {},
});
