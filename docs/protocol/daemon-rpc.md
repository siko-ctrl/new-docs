# Daemon RPC Documentation

## Overview

The Salvium daemon provides a JSON-RPC interface for interacting with the network. This documentation covers all available RPC methods, their parameters, and example usage.

## Connection

### Endpoint
```
http://localhost:18081/json_rpc
```

### Authentication
```bash
# Basic auth
curl -u username:password

# Bearer token
curl -H "Authorization: Bearer token"
```

## General Methods

### get_info
Returns general information about the node and network.

```json
{
  "method": "get_info",
  "params": {},
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
    "height": 123456,
    "difficulty": 12345,
    "tx_count": 1000,
    "tx_pool_size": 10,
    "alt_blocks_count": 5,
    "outgoing_connections_count": 8,
    "incoming_connections_count": 12,
    "white_peerlist_size": 100
  }
}
```

### get_block
Retrieves block information by height or hash.

```json
{
  "method": "get_block",
  "params": {
    "height": 123456
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Transaction Methods

### get_transactions
Retrieves transaction information.

```json
{
  "method": "get_transactions",
  "params": {
    "txs_hashes": ["hash1", "hash2"],
    "decode_as_json": true
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### send_raw_transaction
Submits a raw transaction to the network.

```json
{
  "method": "send_raw_transaction",
  "params": {
    "tx_as_hex": "..."
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Network Methods

### get_connections
Lists all connections to the node.

```json
{
  "method": "get_connections",
  "params": {},
  "id": "1",
  "jsonrpc": "2.0"
}
```

### set_log_level
Sets the log level for the daemon.

```json
{
  "method": "set_log_level",
  "params": {
    "level": 1
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

## Mining Methods

### start_mining
Starts the mining process.

```json
{
  "method": "start_mining",
  "params": {
    "threads_count": 4,
    "do_background_mining": false,
    "ignore_battery": false
  },
  "id": "1",
  "jsonrpc": "2.0"
}
```

### stop_mining
Stops the mining process.

```json
{
  "method": "stop_mining",
  "params": {},
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

## Best Practices

### Rate Limiting
- Maximum requests per second
- Batch requests when possible
- Handle backoff properly
- Monitor usage

### Security
1. Use HTTPS
2. Implement authentication
3. Restrict access
4. Monitor logs

## Examples

### Node Status Check
```bash
curl -X POST http://localhost:18081/json_rpc \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0",
    "id":"0",
    "method":"get_info"
  }'
```

### Transaction Submission
```bash
curl -X POST http://localhost:18081/json_rpc \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0",
    "id":"0",
    "method":"send_raw_transaction",
    "params": {
      "tx_as_hex":"..."
    }
  }'
```

## Integration Guide

### Libraries
- Python client
- JavaScript client
- Go client
- Java client

### Code Examples
```python
# Python example
from salvium_rpc import SalviumRPC

client = SalviumRPC('http://localhost:18081')
info = client.get_info()
```

## Troubleshooting

### Common Issues
1. Connection refused
2. Authentication failed
3. Invalid parameters
4. Timeout errors

### Solutions
1. Check node status
2. Verify credentials
3. Validate parameters
4. Adjust timeouts

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
