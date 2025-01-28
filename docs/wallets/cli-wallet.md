# Salvium CLI Wallet Guide

## Introduction
The Salvium Command Line Interface (CLI) wallet provides advanced users with full control over their Salvium funds through a text-based interface. This guide covers installation, usage, and advanced features of the CLI wallet.

## Installation

### Prerequisites
- Operating System: Windows, macOS, or Linux
- Command Line/Terminal access
- Basic understanding of command line operations

### Download and Setup
1. Download the CLI wallet from the official Salvium website
2. Verify the download signature
3. Extract the archive to your preferred location
4. Add the wallet directory to your system PATH (optional)

## Basic Commands

### Wallet Management
```bash
# Create new wallet
./salvium-wallet-cli --generate-new-wallet <wallet_name>

# Open existing wallet
./salvium-wallet-cli --wallet-file <wallet_name>

# Restore wallet from seed
./salvium-wallet-cli --restore-deterministic-wallet
```

### Account Operations
```bash
# Check balance
balance

# Get address
address

# Create new address
address new

# Check all addresses
address all
```

### Transactions
```bash
# Send SAL
transfer <address> <amount>

# Send with payment ID
transfer <address> <amount> <payment_id>

# Send to multiple recipients
transfer <address1> <amount1> <address2> <amount2>
```

## Advanced Features

### Multisig Operations
- Initialize multisig
- Create multisig wallet
- Exchange multisig info
- Sign multisig transaction

### Cold Wallet Operations
- Create cold wallet
- Sign offline transactions
- Transfer from cold wallet

### Mining Operations
- Start mining
- Stop mining
- Set mining threads

## Security Best Practices

1. **Seed Management**
   - Store seed phrase securely
   - Use encryption
   - Keep multiple backups

2. **Operational Security**
   - Use cold storage for large amounts
   - Verify addresses carefully
   - Keep software updated

3. **Network Security**
   - Use trusted nodes
   - Consider running your own node
   - Use VPN when appropriate

## Troubleshooting

### Common Issues
1. Connection problems
2. Sync issues
3. Transaction failures
4. Wallet restoration problems

### Debug Commands
```bash
# Check wallet height
status

# Rescan blockchain
rescan_bc

# Check transaction history
show_transfers
```

## Exchange Mode

For exchanges and services requiring special features:
1. Enable exchange mode
2. Track transactions
3. Handle payment IDs
4. Manage multiple subaddresses

## Additional Resources
- Command reference
- Error code guide
- Support channels
- Development resources
