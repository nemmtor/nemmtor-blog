module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(
      'APP_KEYS',
      ['e2swPte3agft0A==','LQUHnAEk+VG4Cg==','62c3mv+MUiajWg==','r4/kueLsKK5ZgQ==']
    ),
  },
});
