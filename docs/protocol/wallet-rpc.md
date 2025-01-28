# Wallet RPC Documentation

## Overview

The Salvium Wallet RPC interface provides programmatic access to wallet functionality. This documentation covers all available methods, parameters, and examples for wallet integration.

## Connection

### Endpoint
```
http://localhost:18082/json_rpc
```

### Authentication
```bash
# Basic auth
curl -u username:password

# Bearer token
curl -H "Authorization: Bearer token"
```

## Wallet Methods

### create_wallet
Creates a new wallet.

```json
{
  "method": "create_wallet",
  "params": {
    "filename": "mywallet",
    "password": "password",
    "language": "English"
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### open_wallet
Opens an existing wallet.

```json
{
  "method": "open_wallet",
  "params": {
    "filename": "mywallet",
    "password": "password"
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Balance Methods

### get_balance
Retrieves wallet balance.

```json
{
  "method": "get_balance",
  "params": {
    "account_index": 0,
    "address_indices": [0, 1, 2]
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

Response:
```json
{
  "id": "1",
  "jsonrpc": "2.0",
  "result": {
    "balance": 1000000000000,
    "unlocked_balance": 1000000000000
  }
}
```

## Transaction Methods

### transfer
Sends a transaction.

```json
{
  "method": "transfer",
  "params": {
    "destinations": [
      {
        "amount": 1000000000,
        "address": "Sal..."
      }
    ],
    "priority": 1,
    "ring_size": 11
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### get_transfers
Retrieves transfer history.

```json
{
  "method": "get_transfers",
  "params": {
    "in": true,
    "out": true,
    "pending": true,
    "failed": true,
    "pool": true
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Address Management

### create_address
Creates a new address for the wallet.

```json
{
  "method": "create_address",
  "params": {
    "account_index": 0,
    "label": "donation"
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### get_address
Retrieves wallet addresses.

```json
{
  "method": "get_address",
  "params": {
    "account_index": 0,
    "address_index": [0, 1, 2]
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Key Management

### query_key
Retrieves various wallet keys.

```json
{
  "method": "query_key",
  "params": {
    "key_type": "mnemonic"
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### make_integrated_address
Creates an integrated address.

```json
{
  "method": "make_integrated_address",
  "params": {
    "payment_id": "..."
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Multisig Operations

### prepare_multisig
Prepares a wallet for multisig.

```json
{
  "method": "prepare_multisig",
  "params": {},
  "id": "1",
  "jsonrpc": "2.0"
}
```

### make_multisig
Creates a multisig wallet.

```json
{
  "method": "make_multisig",
  "params": {
    "multisig_info": [],
    "threshold": 2
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Error Handling

### Error Codes
- -32600: Invalid Request
- -32601: Method not found
- -32602: Invalid params
- -32603: Internal error
- -32700: Parse error

### Example Error
```json
{
  "error": {
    "code": -32600,
    "message": "Invalid Request"
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Integration Examples

### Python
```python
import requests
import json

def get_balance():
    url = "http://localhost:18082/json_rpc"
    headers = {'content-type': 'application/json'}
    payload = {
        "jsonrpc": "2.0",
        "id": "0",
        "method": "get_balance",
        "params": {"account_index": 0}
    }
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    return response.json()
```

### JavaScript
```javascript
async function getBalance() {
    const response = await fetch('http://localhost:18082/json_rpc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: '0',
            method: 'get_balance',
            params: {account_index: 0}
        })
    });
    return await response.json();
}
```

## Best Practices

### Security
1. Use HTTPS
2. Implement authentication
3. Restrict access
4. Monitor activity

### Performance
1. Connection pooling
2. Request batching
3. Error handling
4. Timeout management

## Resources

### Documentation
- API reference
- Examples
- Tutorials
- Updates

### Support
- Developer forum
- Technical support
- Issue tracking
- Community help
