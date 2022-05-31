module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'host.docker.internal'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'nemmtor-blog'),
      user: env('DATABASE_USERNAME', 'kacperwitas'),
      password: env('DATABASE_PASSWORD', 'kacper-99'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
