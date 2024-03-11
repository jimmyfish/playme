module.exports = {
  apps: [{
    name: 'expressplay',
    script: './build/bin/www.js',
    instances: '1',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    out_file: '/dev/null',
    error_file: '/dev/null',
    env: {
      NODE_ENV: 'development',
    },
    max_size: '3M',
    retain: '3',
    compress: true,
    dateFormat: 'YYYY-MM-DD_HH-mm-ss',
    workerInterval: '30',
    rotateInterval: '0 0 * * *',
    rotateModule: true,
  }],
};
