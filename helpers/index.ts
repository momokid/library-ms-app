import crypto from "crypto"

const SECRET = "LAGARI_LIB_API"

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: String, password: String) => crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest()