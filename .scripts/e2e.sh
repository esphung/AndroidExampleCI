#!/bin/bash

# Default to debug
APK_PATH="./android/app/build/outputs/apk/debug/app-debug.apk"

# Parse arguments
for arg in "$@"; do
	case $arg in
		--release)
			APK_PATH="./android/app/build/outputs/apk/release/app-release.apk"
			;;
		--debug)
			APK_PATH="./android/app/build/outputs/apk/debug/app-debug.apk"
			;;
	esac
done

echo "Using APK: $APK_PATH"

# Install APK
adb install -r "$APK_PATH"

# Run Maestro tests
maestro test -e USERNAME=user@example.com -e PASSWORD=123 ./.maestro/android-flow.yml
