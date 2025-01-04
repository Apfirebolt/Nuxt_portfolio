// import Cookies from 'js-cookie';

// export default ({ $pinia, req }) => {
//   const authStore = $pinia.use(authStore);

//   // If SSR, get token from cookies and set it in the store
//   if (process.server && req && req.headers.cookie) {
//     const parsedCookies = require('cookieparser').parse(req.headers.cookie);
//     const token = parsedCookies.authToken;
//     if (token) {
//       authStore.setToken(token);
//     }
//   }

//   // If client-side, get token from cookies and set it in the store
//   if (process.client) {
//     const token = Cookies.get('authToken');
//     if (token) {
//       authStore.setToken(token);
//     }
//   }
// };