module.exports = {
  apps: [
    {
      name: "emenu-v2",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3200,
      },
    },
  ],
};
