#!/usr/bin/env bash

# Usage: ./e2e.sh [BUILD_MODE] [MAESTRO_FLOWS_DIR]
# Both arguments are optional. Defaults: BUILD_MODE=debug, MAESTRO_FLOWS_DIR=./.maestro

set -euo pipefail

BUILD_MODE=${1-"debug"}
FLOWS_DIR=${2-"./.maestro"}
REPORT_PATH="$FLOWS_DIR/artifacts/report.html"

APK_PATH="./android/app/build/outputs/apk/${BUILD_MODE}/app-${BUILD_MODE}.apk"

echo "Using APK: $APK_PATH"
echo "Using Maestro test flow directory: $FLOWS_DIR"
echo "Using HTML report path: $REPORT_PATH"

# Install APK
adb install -r "$APK_PATH"

maestro test "$FLOWS_DIR" \
    --format html \
    -e USERNAME=user@example.com \
    -e PASSWORD=123 \
    --output "$REPORT_PATH" || echo "Maestro finished with failures (captured)."
