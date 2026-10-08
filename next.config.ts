import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/gocuk", destination: "/denizli-gocuk", permanent: true },
      { source: "/ppf", destination: "/denizli-ppf", permanent: true },
      {
        source: "/denizli-gocuk-duzeltme",
        destination: "/denizli-gocuk",
        permanent: true,
      },
      {
        source: "/denizli-ppf-kaplama",
        destination: "/denizli-ppf",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
