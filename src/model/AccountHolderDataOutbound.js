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
    define(['ApiClient', 'model/BillingAddress', 'model/PhoneNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingAddress'), require('./PhoneNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesDigitalEnablementApi) {
      root.MdesDigitalEnablementApi = {};
    }
    root.MdesDigitalEnablementApi.AccountHolderDataOutbound = factory(root.MdesDigitalEnablementApi.ApiClient, root.MdesDigitalEnablementApi.BillingAddress, root.MdesDigitalEnablementApi.PhoneNumber);
  }
}(this, function(ApiClient, BillingAddress, PhoneNumber) {
  'use strict';



  /**
   * The AccountHolderDataOutbound model module.
   * @module model/AccountHolderDataOutbound
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AccountHolderDataOutbound</code>.
   * **(CONDITIONAL)** Present in tokenize response if supported by the Merchant, if using a pushAccountReceipt and if there is account holder data associated with the pushAccountReceipt in case that the issuer decision is APPROVED. Refer to MDES Token Connect Token Requestor Implementation Guide and Specification  for more details. 
   * @alias module:model/AccountHolderDataOutbound
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountHolderDataOutbound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountHolderDataOutbound} obj Optional instance to populate.
   * @return {module:model/AccountHolderDataOutbound} The populated <code>AccountHolderDataOutbound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountHolderName')) {
        obj['accountHolderName'] = ApiClient.convertToType(data['accountHolderName'], 'String');
      }
      if (data.hasOwnProperty('accountHolderAddress')) {
        obj['accountHolderAddress'] = BillingAddress.constructFromObject(data['accountHolderAddress']);
      }
      if (data.hasOwnProperty('accountHolderEmailAddress')) {
        obj['accountHolderEmailAddress'] = ApiClient.convertToType(data['accountHolderEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('accountHolderMobilePhoneNumber')) {
        obj['accountHolderMobilePhoneNumber'] = PhoneNumber.constructFromObject(data['accountHolderMobilePhoneNumber']);
      }
    }
    return obj;
  }

  /**
   * **(OPTIONAL)** The name of the cardholder 
   * @member {String} accountHolderName
   */
  exports.prototype['accountHolderName'] = undefined;
  /**
   * @member {module:model/BillingAddress} accountHolderAddress
   */
  exports.prototype['accountHolderAddress'] = undefined;
  /**
   * **(OPTIONAL)** The e-mail address of the Account Holder 
   * @member {String} accountHolderEmailAddress
   */
  exports.prototype['accountHolderEmailAddress'] = undefined;
  /**
   * @member {module:model/PhoneNumber} accountHolderMobilePhoneNumber
   */
  exports.prototype['accountHolderMobilePhoneNumber'] = undefined;



  return exports;
}));

