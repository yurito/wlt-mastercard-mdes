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
    define(['ApiClient', 'model/GatewayErrorsResponse', 'model/TransactError', 'model/TransactRequestSchema', 'model/TransactResponseSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GatewayErrorsResponse'), require('../model/TransactError'), require('../model/TransactRequestSchema'), require('../model/TransactResponseSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesDigitalEnablementApi) {
      root.MdesDigitalEnablementApi = {};
    }
    root.MdesDigitalEnablementApi.TransactApi = factory(root.MdesDigitalEnablementApi.ApiClient, root.MdesDigitalEnablementApi.GatewayErrorsResponse, root.MdesDigitalEnablementApi.TransactError, root.MdesDigitalEnablementApi.TransactRequestSchema, root.MdesDigitalEnablementApi.TransactResponseSchema);
  }
}(this, function(ApiClient, GatewayErrorsResponse, TransactError, TransactRequestSchema, TransactResponseSchema) {
  'use strict';

  /**
   * Transact service.
   * @module api/TransactApi
   * @version 1.3.0
   */

  /**
   * Constructs a new TransactApi. 
   * @alias module:api/TransactApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTransact operation.
     * @callback module:api/TransactApi~createTransactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactResponseSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used by the Token Requestor to create a Digital Secure Remote Payment (\"DSRP\") transaction cryptogram using the credentials stored within MDES in order to perform a DSRP transaction.
     * This API is used by the Token Requestor to create a Digital Secure Remote Payment (\"DSRP\") transaction cryptogram using the credentials stored within MDES in order to perform a DSRP transaction through a payment processor.  The entire response is encrypted. The caller may only transact using the Tokens belonging to them. 
     * @param {Object} opts Optional parameters
     * @param {module:model/TransactRequestSchema} opts.transactRequestSchema Contains the details of the request message. 
     * @param {module:api/TransactApi~createTransactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactResponseSchema}
     */
    this.createTransact = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['transactRequestSchema'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransactResponseSchema;
      return this.apiClient.callApi(
        '/remotetransaction/static/1/0/transact', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
