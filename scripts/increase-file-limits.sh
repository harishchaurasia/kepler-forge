#!/bin/bash

# Script to increase macOS file descriptor limits
# Run with: sudo ./scripts/increase-file-limits.sh

echo "Current limits:"
launchctl limit maxfiles

echo ""
echo "Setting new limits (soft: 4096, hard: 65536)..."
sudo launchctl limit maxfiles 4096 65536

echo ""
echo "New limits:"
launchctl limit maxfiles

echo ""
echo "To make this permanent, create /etc/launchd.conf with:"
echo "limit maxfiles 4096 65536"
echo ""
echo "Or add to your shell profile (~/.zshrc or ~/.bash_profile):"
echo "ulimit -n 4096"
