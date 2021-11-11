module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:everything(.+)",
        destination: "/",
        permanent: true,
      },
    ]
  },
}
