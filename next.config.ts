import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [new URL("https://avatars.githubusercontent.com/u/26851843?v=4")]
	}
};

export default nextConfig;
