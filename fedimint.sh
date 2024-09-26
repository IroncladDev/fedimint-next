#!/bin/bash

# Check if the directory exists
if [ ! -d "./fm_db/fm.db" ]; then
    # Create the directory
    mkdir -p "./fm_db/fm.db"
    echo "Directory created."
else
    echo "Directory already exists."
fi

if ! command -v fedimint-clientd >/dev/null 2>&1; then
    echo "fedimint-clientd not installed. Installing..."
    cargo install fedimint-clientd
else
    echo "fedimint-clientd is installed. Running..."
    RUST_LOG=debug fedimint-clientd
fi
