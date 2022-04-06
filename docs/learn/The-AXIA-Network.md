---
id: The-AXIA-Network
title: The AXIA Network
sidebar_label: The AXIA Network
slug: ../The-AXIA-Network
---

## Network design
On first generation blockchains, broadcasting of transactions is synchronic. Root of logic is in the peer strategy and not in the protocol itself. Second-generation protocols like Ethereum 2.0 addressed this gap by facilitating the amalgamation of several subprotocols over a single peer connection. This structure, however, also remains quite simple. Therefore, the P2P protocol on these blockchains lacks vital functionalities such as Quality of Service support and many more.
The AXIA Network stands out for having a design that has several types of participants with different requirements regarding their peer makeup. There are several network avenues where participants communicate specific data formats. Leading to a more structured data overlay supported by a robust protocol. 
Network participants can broadly be segregated into two sets -  CoreChain and AllyChains each of these having three subsets, validators, nominators and collators. Members of each AllyChain interact among themselves rather than conversing with participants in the other AllyChains. 
For a well-scaled out multi-chain, the strategy of peer make-up for each class of participant will differ. Collators will need to be continuously in touch with the set of elected validators. Alternatively, they will need to have on-going agreements with a subset of the validators. 
The CoreChain is the main chain which serves as the communication layer for all AllyChains. This communication layer further facilitates the interoperability between multiple AllyChains with each of them being part of the same CoreChain. There is not an intrinsic requirement for CoreChainfor the CoreChain to support the smart contracts of AllyChains. This is due to the fact that the AllyChains on the AXIA Network have complete freedom and autonomy to enable their own token and token standards as well as the economics as they so choose. This provides an even higher level of decentralization.


## Network Architecture
### CoreChain
The AXIA CoreChain is state-based, where the state maps address to account information, including the balances and a transaction counter. 
For contract deployment on the CoreChain it needs to be noted that deployment of contracts through transactions is not feasible as the system does not support public deployment of contracts on the CoreChain which avoids any application functionality on the CoreChain.
However, the system supports listed contracts facilitating auto-execution and network message outputs.	

### Validators
AXIA validators are selected by the PoP consensus. Proof-of-Participation  is the AXIA  adaptation of PoS where an unlimited number of AXIA Coin holders can participate as nominators, backing with their stake with a limited set of validators. This paradigm simultaneously achieves high levels of security and scalability, as well as an unprecedented level of decentralization by ensuring a property known in voting theory as a proportional justified representation.
### Nominators
Nominators are economically vested in the security of the network, acting as watchdogs over the performance of the validators. Once the nominators determine their validator node candidates, for each era, the system utilized for staking will then select the validators with the highest staking balance and with the most fair distribution of percentage. 
An era is a time span during which there is a set of validators actively participating in the block authoring. Each era will have six sessions, or epochs, equating to four hours in the real world. Before the last epoch the active set of validators for the next era are then elected.  At the completion of each era the total rewards are then calculated and will be distributed to the validators and nominators. 
Nominators are also economically disincentivized from concentrating their votes on too few validators, which assists in keeping the AXIA Networks decentralized over time. Furthermore, the election process is highly adaptive to any sudden changes, including an instance when a validator may be removed after a slashing. 
To ensure there is always fairness on the AXIA Network should there ever be an instance that a validator is removed there will be no need for the nominator to change their vote as this will be done automatically. 
### Collators
Collator's main goal is to maintain all of the AXIA AllyChains, to do so they collect user transactions and also the proof of this transition on CoreChain. They run a full node of the CoreChain alongside a full node of the AllyChain(s) they provide for. Hence, having the capability to not just produce new blocks but execute transactions as well. Collators are not responsible to decide to reject any block, only validators are tasked to do that. If there is any wrong block on any AllyChain then the validators will reject it directly having more than one Collators will have no part to play in its success but slowing down the entire network.
### Validator election
A new set of validators is elected at the beginning of every era – a period during roughly one day – to serve for that era, according to the preferences of the nominators. More precisely, any AXIA Coin holder may choose to become a validator candidate or a nominator. Each candidate indicates the amount of stake and the desired commission fee for operational costs. In turn, each nominator stakes and publishes a list with any number of trusted candidates. Then a public protocol takes the lists as an input and elects the candidates with the highest backing to serve as validators for the next era.
Nominators share the rewards, or eventual slashings, with the validators they nominated on a per-staked-AXIA basis.. This allows for the system to elect validators with large amounts of aggregate stake and thus helps turn the validator election process into a meritocracy rather than a plutocracy. In fact, at any given moment there will be a considerable amount of AXIA Supply that is staked in PoP. This makes it very difficult for an adversarial entity to get validators elected since it either needs a large amount of AXIA Coin or a high enough reputation to get the required backing by nominators, making it virtually impossible to attack.
AXIA elects validators via a decentralized protocol with carefully selected, simple and publicly known rules, taking the lists from nominators of the trusted candidates as input. The AXIA election process will remain fair as it does not allow the nominators to have voting power in equal proportion to their stake, in turn solving the multi winner problem on an approval ballot basis.
### Minimization of latency
As the validators selected to verify the AllyChain transactions are randomly chosen in the basic protocol proposal, each of the above-mentioned subsets change with each block. When disparate nodes need to exchange data, this may create a problem. The dApp or Blockchain architect has to rely on a fairly-distributed and well-linked peer network to determine that the worst-case latency goes up only with the logarithm of the network size. Otherwise, longer block times have to be introduced to pave the way for the necessary connection negotiation so that a peer-set reflecting the current communication needs takes shape. However, this does not solve the current latency issue as to the extent needed.
Long block times render a network useless. Forcing uninterested nodes to forward data, which results in the creation of substantial wastage of bandwidth. 
The architect may combine both directions to arrive at a solution. Minimization of latency will help water down the volatility of these AllyChain validator sets. Placing tabs on the amount of peer churn and providing for the partial predictability of AllyChain sets can help keep latency at the minimum possible level at all times.

## Network key components and features

### AXIA Client
AXIA Network client is a distributable open source executable binary for the AXIA network, either to start, connect or communicate between multiple nodes for all the activities which will take place in CoreChain or between CoreChain and AllyChains. It is implemented in RUST and ensures the network is secure and data is accurate. AXIA network and its essence remains fundamental to the following elements:
### Storage and Peer to Peer communication
The AXIA network storage is a continuously growing and ever evolving record with its own state updates. Its built out of the key value pair 	mechanism which is highly optimised, efficient and fairly simple to operate upon. While the communication is driven out of the libp2p based modular network stack which allows AXIA network to remain free from runtime and address services without worrying of the location of the communicating nodes.
### Runtime and Consensus
One of the obvious strengths of AXIA networks core strength is its the run time which is built using WASM (WebAssembly) and simply gets stored as a wasm binary on the chain storage. It is capable of handling the block processing as well as state transition logic. It being on- the chain storage makes the network capable of becoming forkless in terms of upgrades while it lives on chain as a wasm compiled binary.
### RPC(Remote Procedure Call)  and Telemetry
AXIAs RPCs are built over both HTTPs and WSS (WebSockets) that allows developers to not just interact with the Blockchain but to get the running network details out of the telemetry endpoints available all the time.

