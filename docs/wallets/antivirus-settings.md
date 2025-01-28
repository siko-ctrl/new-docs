# Antivirus and Firewall Settings

When running Salvium wallets, you may need to configure your antivirus and firewall settings to ensure proper functionality. This guide will help you set up the correct permissions and exclusions.

## Antivirus Settings

### Windows Defender
1. Open Windows Security
2. Go to Virus & threat protection
3. Click "Manage settings" under "Virus & threat protection settings"
4. Scroll to "Exclusions"
5. Click "Add or remove exclusions"
6. Add the following:
   - Salvium wallet executable
   - Wallet data directory
   - Blockchain directory

### Other Antivirus Software
For other antivirus software (Norton, McAfee, etc.):
1. Access the software's settings
2. Find the exclusions or exceptions section
3. Add the Salvium directories and executables
4. Save the changes

## Firewall Configuration

### Windows Firewall
1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Click "Change settings"
4. Click "Allow another app"
5. Browse to your Salvium wallet executable
6. Select both Private and Public networks
7. Click "OK" to save

### Router Firewall
If running a node:
1. Access your router settings
2. Find port forwarding settings
3. Add the following ports:
   - Port 18080 (default)
   - Port 18081 (RPC)
4. Save changes

## Recommended Exclusions

### Files and Folders
- salvium-wallet-cli.exe
- salvium-wallet-gui.exe
- salvium-daemon.exe
- Wallet data directory
- Blockchain directory

### Processes
- salvium-wallet-cli
- salvium-wallet-gui
- salvium-daemon

## Troubleshooting

### Common Issues
1. **Wallet Won't Connect**
   - Check firewall settings
   - Verify port accessibility
   - Confirm network permissions

2. **Slow Synchronization**
   - Review antivirus exclusions
   - Check process priorities
   - Verify network settings

3. **Connection Errors**
   - Confirm port forwarding
   - Check network restrictions
   - Verify daemon status

## Security Considerations

### Best Practices
1. Only add necessary exclusions
2. Keep security software updated
3. Monitor system activity
4. Use strong passwords

### Additional Security
1. Enable system auditing
2. Monitor network traffic
3. Regular security scans
4. Keep backups
