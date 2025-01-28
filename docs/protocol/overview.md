# About Privacy in Salvium

Salvium adopts a robust set of privacy features based on the Cryptonote protocol, similar to the standards set by Monero, ensuring comprehensive privacy for all transactions and account balances. This includes protecting the identity of the sender, the receiver, and the transaction amount.

## Core Privacy Features

Salvium incorporates advanced privacy-enhancing technologies from the CryptoNote codebase, ensuring comprehensive protection for all transactions and account balances. These features work in concert to safeguard the identity of senders and receivers, as well as the amounts transferred.

### Ring Signatures

**Function**: Ring signatures help obscure the identity of the sender in a transaction.

How it works:
- When a user initiates a transaction, their signature is combined with past transaction outputs on the blockchain
- This creates a "ring" of possible signers, making it computationally infeasible to determine which member of the group actually signed the transaction
- The larger the ring size, the greater the privacy provided

**Benefit**: Enhances transaction privacy by making it difficult to trace the true origin of a transaction.

### Ring Confidential Transactions (RingCT)

**Function**: RingCT conceals the amount of each transaction.

How it works:
- Transactions amounts are encrypted while still allowing verification of the transaction's validity
- Only the sender and receiver can see the actual amount transferred
- The blockchain maintains zero-knowledge proofs to ensure no coins are created or destroyed

### Stealth Addresses

Utilized to protect the recipient's identity by creating a one-time address for each transaction. This ensures that multiple payments to the same recipient cannot be linked together on the blockchain.

## Privacy Considerations for Advanced Features

While Salvium maintains strong base-layer privacy, users should be aware of potential privacy implications when using certain features:

- **Staking**: The act of staking and receiving rewards may create patterns that could potentially be analyzed to infer information about a user's holdings.
- **DeFi Interactions**: Engaging with DeFi protocols may require revealing certain information to interact with smart contracts effectively.

It is crucial for users to read the relevant documentation for each feature to understand its specific privacy implications. The Salvium team is committed to maximizing privacy even in these more complex interactions, but users should make informed decisions based on their privacy needs.
