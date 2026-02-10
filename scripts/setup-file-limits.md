# Fixing "EMFILE: too many open files" on macOS

The watchpack errors you're seeing are due to macOS file descriptor limits being too low.

## Quick Fix (Temporary - until reboot)

Run this in your terminal:

```bash
ulimit -n 4096
```

Then restart your dev server.

## Permanent Fix

### Option 1: Using launchctl (Recommended)

1. Create a plist file:
```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

2. Add this content:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>limit.maxfiles</string>
    <key>ProgramArguments</key>
    <array>
      <string>launchctl</string>
      <string>limit</string>
      <string>maxfiles</string>
      <string>4096</string>
      <string>65536</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>ServiceIPC</key>
    <false/>
  </dict>
</plist>
```

3. Load it:
```bash
sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist
```

### Option 2: Add to Shell Profile (Easier, but per-user)

Add this line to your `~/.zshrc` (or `~/.bash_profile` if using bash):

```bash
ulimit -n 4096
```

Then reload:
```bash
source ~/.zshrc
```

### Option 3: Use the provided script

```bash
chmod +x scripts/increase-file-limits.sh
sudo ./scripts/increase-file-limits.sh
```

## Verify

After applying, check your limits:
```bash
launchctl limit maxfiles
```

You should see something like:
```
maxfiles    4096            65536
```

## For Next.js Dev Server

After increasing limits, restart your dev server:
```bash
npm run dev
```

The watchpack errors should be significantly reduced or eliminated.
