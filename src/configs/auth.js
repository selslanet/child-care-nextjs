export default {
  // baseUrl: 'http://localhost:2020/api',
  baseUrl: 'https://child.care.selsla.net/api',
  loginEndpoint: '/auth/login',
  meEndpoint: '/auth/me',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
