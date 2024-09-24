#!/bin/bash

if ! command -v fedimint-clientd >/dev/null 2>&1; then
    echo "fedimint-clientd not installed. Installing..."
    cargo install fedimint-clientd
else
    echo "fedimint-clientd is installed. Running..."
    RUST_LOG=debug fedimint-clientd
fi
