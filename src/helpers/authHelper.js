const TOKEN_KEY = 'LIVE_GIFT_TOKEN'
// eslint-disable-next-line no-undef
const storage = localStorage

export function setToken (token) {
  storage.setItem(TOKEN_KEY, token)
}

export function getToken () {
  return storage.getItem(TOKEN_KEY)
}

export function deleteToken () {
  storage.removeItem(TOKEN_KEY)
}
