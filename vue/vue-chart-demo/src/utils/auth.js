import Cookie from 'js-cookie';
const TokenKey = 'DS-Token'
export function getToken() {
  return Cookie.get(TokenKey);
}