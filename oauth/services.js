const uuidv4 = require('uuid/v4')
const authCodes = {}
const accessTokens = {}
const clients = {
  '1': {
    id: '1',
    secret: 'kittens',
    grantTypes: ['implicit', 'password', 'client_credentials', 'authorization_code']
  }
}

module.exports = {
  clientService: {
    getById: function (id, callback) {
      return callback(null, clients[id])
    },
    isValidRedirectUri: function (/* client, requestedUri */) {
      return true
    }
  },
  tokenService: {
    generateToken: function (callback) {
      callback(null, uuidv4())
    },
    generateAuthorizationCode: function (callback) {
      callback(null, uuidv4())
    }
  },
  authorizationService: {
    saveAuthorizationCode: function (codeData, callback) {
      authCodes[codeData.code] = codeData
      return callback(null, authCodes[codeData.code])
    },
    saveAccessToken: function (tokenData, callback) {
      accessTokens[tokenData.access_token] = tokenData
      return callback(null, accessTokens[tokenData.access_token])
    },
    getAuthorizationCode: function (code, callback) {
      return callback(null, authCodes[code])
    },
    getAccessToken: function (token, callback) {
      return callback(null, accessTokens[token])
    }
  },
  membershipService: {
    areUserCredentialsValid: function (userName, password, scope, callback) {
      return callback(null, true)
    }
  }
}
