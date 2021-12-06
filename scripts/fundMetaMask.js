#!/usr/bin/env node

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: '0x37f4a13f3Af9a8397d09c0Dc3ca508dB6181e492', value: 1e19 })
