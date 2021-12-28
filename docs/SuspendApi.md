# MdesDigitalEnablementApi.SuspendApi

All URIs are relative to *https://api.mastercard.com/mdes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSuspend**](SuspendApi.md#createSuspend) | **POST** /digitization/static/1/0/suspend | Used to temporarily suspend one or more Tokens.



## createSuspend

> SuspendResponseSchema createSuspend(opts)

Used to temporarily suspend one or more Tokens.

This API is used to temporarily suspend one or more Tokens (for example, suspending all Tokens on a device in response to the device being lost).  The API is limited to 10 Tokens per request. MDES will coordinate the suspension of the Tokens and notify any relevant parties that the Tokens have been suspended. A suspended Token can be unsuspended using the Unsuspend resource. 

### Example

```javascript
var MdesDigitalEnablementApi = require('mdes_digital_enablement_api');

var apiInstance = new MdesDigitalEnablementApi.SuspendApi();
var opts = {
  'suspendRequestSchema': new MdesDigitalEnablementApi.SuspendRequestSchema() // SuspendRequestSchema | Contains the details of the request message. 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSuspend(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suspendRequestSchema** | [**SuspendRequestSchema**](SuspendRequestSchema.md)| Contains the details of the request message.  | [optional] 

### Return type

[**SuspendResponseSchema**](SuspendResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

