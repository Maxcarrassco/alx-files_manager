#!/usr/bin/node

const sha1 = require('sha1');

export const pwdHashed = (pwd) => sha1(pwd);
export const getAuthzHeader = (req) => req.headers.authorization;
export const getToken = (authzHeader) => authzHeader.substring(6);
export const decodeToken = (token) => Buffer.from(token, 'base64').toString('utf8');
export const getCredentials = (decodedToken) => {
  const [email, password] = decodedToken.split(':');
  if (!email || !password) {
    return null;
  }
  return { email, password };
};
