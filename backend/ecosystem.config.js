module.exports = {
  apps: [
    {
      name: "node-app",
      script: "./server.js", // Change to app.js or index.js if needed
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "development",
        PORT: 4000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};