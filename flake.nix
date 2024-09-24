{
    description = "Fedimint Next.js Examples";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
            let pkgs = import nixpkgs { 
                inherit system; 
                config.allowUnfree = true;
            };
            in {
                devShells = {
                    default = pkgs.mkShell {
                        nativeBuildInputs = [ 
                            pkgs.bun
                            pkgs.nodejs_20
                            # uncomment if you don't have rust/cargo installed (ngmi)
                            # pkgs.rustc
                            # pkgs.cargo
                        ];
                    };
                };
            }
        );
}
