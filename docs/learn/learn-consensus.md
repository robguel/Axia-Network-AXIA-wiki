---
id: learn-consensus
title: AXIA Consensus
sidebar_label: Transaction Fees
description: An explanation of the consensus model used in AXIA
slug: ../learn-consensus
---

# Transaction Fee
Some resources in a blockchain network are not unlimited, for example, storage and computation. Transaction fee is a means to prevent improper consumption of these resources by the network users, and also stop malicious behaviours like spamming transactions. The AXIA network uses a weight driven fee model which is different from what most networks use, a gas metering model such as Ethereum. The fee is charged on each and every transaction on the chain and once the fee is deducted the network considers the transaction for further processing.
## The AXIA Network’s fee System is designed with the following objectives:
* Block production delays to be avoided and CoreChain must ensure efficient block production.
* CoreChain shall grow with a limited and predictable rate.
* Blocks must support having space for h-ipriority and reports for malicious events on chain.
* The network as a system must exhibit capability to handle sudden demand peaks.
* Senders must allow the capability to accurately estimate the fee for their transactions.
## Fees on the AXIA Network CoreChain are calculated based on the following:
* Fee for the length or the byte size
* A Charge against the weight.
* Optional fee to prioritize the transaction.
* The AXIA Coin Price in USD
The length fee is the manifestation of fixed per-byte fee and the transaction size in bytes.The weight fee is required to validate a block and is fixed for each block validation. Optional fee is an optional transaction fee that users can add to give higher priority to their transactions.
These three fees together make the fee and is deducted from the sender's account prior to execution of the transaction. A part of the fee will go to the block producer (validator) and the remaining will go to the network (AXIA Treasury). At the genesis of AXIA, it is set to 40% and 60% respectively.
## AXIA Treasury
AXIA Treasury, is a pool of funds which populate itself from the fees, rewards and slashing on the network. These funds require an appropriate governance proposal by the members to allow spending in any way. The time to spend allowed is 24 days and there is no limit to the proposals that can be made during this period. AXIA Treasury has a fixed burn percentage for all the funds left in it post the spend period of 24 days, it is set to 1% of the treasury funds in the AXIA network.
