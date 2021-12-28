/**
 * MDES Digital Enablement API
 * These APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br><br> **Authentication** <br><br> Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br><br> 1. A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br><br> **Encryption** <br><br> All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br><br> **Additional Encryption of Sensitive Data** <br><br> In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java) 
 *
 * The version of the OpenAPI document: 1.3.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TokenDetailDataGetTokenOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TokenDetailDataGetTokenOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesDigitalEnablementApi) {
      root.MdesDigitalEnablementApi = {};
    }
    root.MdesDigitalEnablementApi.TokenDetailGetTokenOnly = factory(root.MdesDigitalEnablementApi.ApiClient, root.MdesDigitalEnablementApi.TokenDetailDataGetTokenOnly);
  }
}(this, function(ApiClient, TokenDetailDataGetTokenOnly) {
  'use strict';



  /**
   * The TokenDetailGetTokenOnly model module.
   * @module model/TokenDetailGetTokenOnly
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>TokenDetailGetTokenOnly</code>.
   * @alias module:model/TokenDetailGetTokenOnly
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TokenDetailGetTokenOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenDetailGetTokenOnly} obj Optional instance to populate.
   * @return {module:model/TokenDetailGetTokenOnly} The populated <code>TokenDetailGetTokenOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tokenUniqueReference')) {
        obj['tokenUniqueReference'] = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
      }
      if (data.hasOwnProperty('publicKeyFingerprint')) {
        obj['publicKeyFingerprint'] = ApiClient.convertToType(data['publicKeyFingerprint'], 'String');
      }
      if (data.hasOwnProperty('encryptedKey')) {
        obj['encryptedKey'] = ApiClient.convertToType(data['encryptedKey'], 'String');
      }
      if (data.hasOwnProperty('oaepHashingAlgorithm')) {
        obj['oaepHashingAlgorithm'] = ApiClient.convertToType(data['oaepHashingAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('iv')) {
        obj['iv'] = ApiClient.convertToType(data['iv'], 'String');
      }
      if (data.hasOwnProperty('encryptedData')) {
        obj['encryptedData'] = TokenDetailDataGetTokenOnly.constructFromObject(data['encryptedData']);
      }
    }
    return obj;
  }

  /**
   * Globally unique identifier for the Token, as assigned by MDES. 
   * @member {String} tokenUniqueReference
   */
  exports.prototype['tokenUniqueReference'] = undefined;
  /**
   * The certificate fingerprint identifying the public key used to encrypt the ephemeral AES key. 
   * @member {String} publicKeyFingerprint
   */
  exports.prototype['publicKeyFingerprint'] = undefined;
  /**
   * One-time use AES key encrypted by the MasterCard public key (as identified by 'publicKeyFingerprint') using the OAEP or RSA Encryption Standard PKCS #1 v1.5 scheme (depending on the value of 'oaepHashingAlgorithm'. Requirement is for a 128-bit key (with 256-bit key supported as an option). 
   * @member {String} encryptedKey
   */
  exports.prototype['encryptedKey'] = undefined;
  /**
   * Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS #1 v1.5 will be used. Must be either 'SHA256' (Use the SHA-256 algorithm) or 'SHA512' (Use the SHA-512 algorithm). 
   * @member {String} oaepHashingAlgorithm
   */
  exports.prototype['oaepHashingAlgorithm'] = undefined;
  /**
   * It is recommended to supply a random initialization vector when encrypting the data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. Hex-encoded data (case-insensitive). 
   * @member {String} iv
   */
  exports.prototype['iv'] = undefined;
  /**
   * @member {module:model/TokenDetailDataGetTokenOnly} encryptedData
   */
  exports.prototype['encryptedData'] = undefined;



  return exports;
}));


