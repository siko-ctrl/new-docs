# Show Transfers Color Coding

The `show_transfers` command in the Salvium CLI wallet uses color coding to help users quickly identify different types of transactions and their status. This guide explains the meaning of each color and how to interpret the output.

## Color Code Reference

### Transaction Types

#### Green
- **Meaning**: Incoming transfers
- **Description**: Money received in your wallet
- **Example**: `[GREEN] Height 123456, txid <hash>, 100.000000 SAL`

#### Red
- **Meaning**: Outgoing transfers
- **Description**: Money sent from your wallet
- **Example**: `[RED] Height 123457, txid <hash>, -50.000000 SAL`

#### Yellow
- **Meaning**: Pending transfers
- **Description**: Transactions not yet confirmed
- **Example**: `[YELLOW] Height 0, txid <hash>, 75.000000 SAL`

#### White
- **Meaning**: Pool transfers
- **Description**: Mining rewards
- **Example**: `[WHITE] Height 123458, txid <hash>, 5.000000 SAL`

### Status Indicators

#### Blue
- **Meaning**: Confirmed transactions
- **Description**: Fully confirmed and irreversible
- **Example**: `[BLUE] Confirmed, 10 confirmations`

#### Gray
- **Meaning**: Mempool transactions
- **Description**: Not yet included in a block
- **Example**: `[GRAY] In mempool, waiting for confirmation`

## Using Show Transfers

### Basic Commands
```bash
# Show all transfers
show_transfers

# Show specific transfer types
show_transfers in      # Show incoming only
show_transfers out     # Show outgoing only
show_transfers pending # Show pending only
show_transfers pool    # Show mining rewards only

# Show transfers by height
show_transfers in height 123456
```

### Advanced Filtering
```bash
# Filter by payment ID
show_transfers payment_id <id>

# Filter by date
show_transfers date 2024-01-01 2024-01-31

# Filter by amount
show_transfers min_amount 100
```

## Reading the Output

### Output Format
```
[COLOR] Height XXXXX, txid <hash>, Amount SAL, {additional info}
```

### Example Output
```
[GREEN] Height 123456, txid abc...def, 100.000000 SAL, received
[RED] Height 123457, txid ghi...jkl, -50.000000 SAL, sent
[YELLOW] Height 0, txid mno...pqr, 75.000000 SAL, pending
[WHITE] Height 123458, txid stu...vwx, 5.000000 SAL, mined
```

## Additional Information

### Transaction Details
- Block height
- Transaction ID
- Amount
- Fee (if applicable)
- Payment ID (if present)
- Destination address
- Number of confirmations

### Common Scenarios

#### 1. Receiving Funds
```bash
# Green entry indicates received funds
[GREEN] Height 123456, txid <hash>, +100.000000 SAL
```

#### 2. Sending Funds
```bash
# Red entry shows sent amount and fee
[RED] Height 123457, txid <hash>, -50.000000 SAL, fee 0.000100 SAL
```

#### 3. Pending Transaction
```bash
# Yellow entry for unconfirmed transaction
[YELLOW] Height 0, txid <hash>, +75.000000 SAL, pending
```

#### 4. Mining Reward
```bash
# White entry for mining reward
[WHITE] Height 123458, txid <hash>, +5.000000 SAL, mined
```

## Troubleshooting

### Common Issues
1. Missing transactions
2. Incorrect colors
3. Display problems
4. Filtering issues

### Solutions
1. Refresh wallet
2. Check synchronization
3. Update wallet software
4. Verify command syntax
