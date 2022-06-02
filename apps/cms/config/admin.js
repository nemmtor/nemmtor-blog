module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'm+J6q2f6koVrHg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'i5bf3FXPT4N93Q=='),
  },
});
