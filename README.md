# Fedimint & Next.js Examples

A starter template for building on Fedimint with Next.js

## Getting Started

This repo assumes you have rust (cargo) and nix installed on your system.

If you **don't** have nodejs and bun installed, run `nix develop` to get a dev shell with the required binaries.

1. Install dependencies:
    ```bash
    bun i
    ```
2. Run the nextjs server with `bun run dev`
3. Open a new shell and simultaneously run `bun run fedimint`. Creates a `./fm_db/fm.db` directory if it doesn't exist. Installs the `fedimint-clientd` binary if it doesn't exist.

