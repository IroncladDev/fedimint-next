# Fedimint & Next.js Examples

A starter template for building on Fedimint with Next.js

## Getting Started

You'll need to have [nix](https://nixos.org) installed on your machine.

**If you don't have cargo installed**:, uncomment `rustup` and `cargo` in `flake.nix`

1. Run `nix develop` to create a devshell with the required dependencies
2. Install dependencies:
    ```bash
    bun i
    ```
3. Run the nextjs server
    ```bash
    bun dev
    ```
4. Open a new shell and simultaneously run the fedimint client daemon with
    ```bash
    bun run fedimint
    ``` 

Running the fedimint client daemon script will

- Create a `./fm_db/fm.db` directory if it doesn't exist. 
- Install the `fedimint-clientd` binary if it doesn't exist.

## Resources

- Fedimint Web SDK:
    - [Docs](https://web.fedimint.org/)
    - [GitHub](https://github.com/fedimint/fedimint-web-sdk)
    - [NPM](https://www.npmjs.com/package/@fedimint/core-web)
- Fedimint Clientd:
    - [Typescript Wrapper](https://github.com/fedimint/fedimint-clientd/tree/master/wrappers/fedimint-ts)
    - [GitHub](https://github.com/fedimint/fedimint-clientd)
    - [crates.io](https://crates.io/crates/fedimint-clientd)
