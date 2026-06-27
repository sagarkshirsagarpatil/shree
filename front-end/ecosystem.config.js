module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npm",
      args: "start",
      cwd: "/var/www/html/shree/front-end", // Change to your React project path
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 3000
      }
    }
  ]
};