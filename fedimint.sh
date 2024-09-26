#!/bin/bash

# Create fm_db/fm.db directory if it doesn't exist
if [ ! -d "./fm_db/fm.db" ]; then
    mkdir -p "./fm_db/fm.db"
    echo "Directory created."
fi

# Check if cargo is installed
if ! command -v cargo >/dev/null 2>&1; then
    echo "Cargo not installed, ngmi"
    exit 1
fi

# Install fedimint-clientd if not found on system, and/or runs it
if ! command -v fedimint-clientd >/dev/null 2>&1; then
    echo "Installing fedimint-clientd..."
    FEDIMINT_BUILD_FORCE_GIT_HASH=1 cargo install fedimint-clientd
fi

RUST_LOG=debug fedimint-clientd
