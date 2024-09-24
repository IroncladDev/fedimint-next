# Fedimint & Next.js Examples

A starter template for building on Fedimint with Next.js

## Getting Started

This repo assumes you have rust (cargo) and nix installed on your system.

If you **don't** have nodejs and bun installed, run `nix develop` to get a dev shell with the required binaries.

1. Install the `fedimint-clientd` binary with cargo:
    ```bash
    FEDIMINT_BUILD_FORCE_GIT_HASH=1 cargo install fedimint-clientd
    ```
2. Install dependencies:
    ```bash
    bun i
    ```
3. Run the nextjs server with `bun run dev`
4. Open a new shell and run `bun run fedimint`

