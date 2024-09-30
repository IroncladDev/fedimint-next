/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        };

        return config;
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,HEAD,PUT,PATCH,POST,DELETE",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
