---
title: ShipEngine endpoint
keywords: 
last_updated: October 16, 2019
tags: []
summary: "Detailed description of the API of the ShipEngine endpoint."
---

## Overview

ShipEngine APIs have powered over one billion shipments for the fastest growing brands and logistics companies.

The ShipEngine endpoint has the following features:

- Interact with ShipEngine API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.shipengine.post('addresses/validate');
```

However you probably want to use the shortcuts:

```js
var res = app.endpoints.shipengine.addresses.validate.post({...});
```

These shortcuts are based on the [ShipEngine REST API](https://www.shipengine.com/docs/introduction/).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

First you will need to setup an account in ShipEngine. Then you will be able to configure the endpoint you will
need to generate an API key. You can find more information about that [here](https://www.shipengine.com/docs/getting-started/#authentication).

### API key

The private key can be generated in the dashboard of your ShipEngine app. Just copy the generated API secret to this field.


### Webhook URL

This is the URL you should configure for webhooks in ShipEngine dashboard. 

## Javascript API

The Javascript API of the ShipEngine endpoint has three pieces:

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the 
[ShipEngine API](https://www.shipengine.com/docs/introduction/) like this:

```js
var res = app.endpoints.shipengine.post('addresses/validate/', {...});

var res = app.endpoints.shipengine.addresses.validate.post({...});
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/shipments/:shipment_id/` in section Core Resources 
  it is converted to `app.endpoints.shippo.shipment.get(...)`. 
- **If they have dashes, we should convert them to camel case**: GET `~/shipments/` is converted to 
  `app.endpoints.shippo.shipments.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`.  
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `PATCH`: `update`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/shipments/:shipment_id/` will become 
  `app.endpoints.shipengine.shipments.get(":shipment_id")` where :id is 123.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `PUT ~/shipments/:shipment_id`, 
  so it will become `app.endpoints.shipengine.shipments.put("123", {...})`.
- **Parameters are send as object**: in order to send parameters in URL you send as object parameter. For example the 
  method `~/shipments?page=2&page_size=10` so it will become 
  `app.endpoints.shipengine.shipments.get(123, {page: 2, page_size: 10});`
  
Following is a list of available helpers:

    - endpoint.addresses.recognize.put = function() { ... }
    - endpoint.addresses.validate.post = function() { ... }
    - endpoint.shipments.post = function() { ... }
    - endpoint.shipments.put = function() { ... }
    - endpoint.shipments.get = function() { ... }
    - endpoint.shipments.rates.get = function() { ... }
    - endpoint.shipments.tags.post = function() { ... }
    - endpoint.shipments.tags.delete = function() { ... }
    - endpoint.packages.put = function() { ... }
    - endpoint.packages.get = function() { ... }
    - endpoint.manifests.get = function() { ... }
    - endpoint.tags.post = function() { ... }
    - endpoint.tags.put = function() { ... }
    - endpoint.tags.get = function() { ... }
    - endpoint.tags.delete = function() { ... }
    - endpoint.warehouses.post = function() { ... }
    - endpoint.warehouses.put = function() { ... }
    - endpoint.warehouses.get = function() { ... }
    - endpoint.warehouses.delete = function() { ... }
    - endpoint.labels.get = function() { ... }
    - endpoint.batches.post = function() { ... }
    - endpoint.batches.get = function() { ... }
    - endpoint.batches.externalBatchId.get = function() { ... }
    - endpoint.batches.add.post = function() { ... }
    - endpoint.batches.remove.post = function() { ... }
    - endpoint.batches.process.labels.post = function() { ... }
    - endpoint.batches.errors.get = function() { ... }
    - endpoint.batches.delete = function() { ... }
    - endpoint.rates.post = function() { ... }
    - endpoint.rates.estimate.post = function() { ... }
    - endpoint.rates.bulk.post = function() { ... }
    - endpoint.connections.carriers.fedex.post = function() { ... }
    - endpoint.connections.carriers.fedex.settings.put = function() { ... }
    - endpoint.connections.carriers.fedex.settings.get = function() { ... }
    - endpoint.connections.carriers.fedex.delete = function() { ... }
    - endpoint.connections.carriers.ups.post = function() { ... }
    - endpoint.connections.carriers.ups.settings.put = function() { ... }
    - endpoint.connections.carriers.ups.settings.get = function() { ... }
    - endpoint.connections.carriers.ups.delete = function() { ... }
    - endpoint.carriers.get = function() { ... }
    - endpoint.carriers.services.get = function() { ... }
    - endpoint.carriers.options.get = function() { ... }
    - endpoint.carriers.packages.get = function() { ... }

## Events

### Webhook

ShipEngine's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://www.shipengine.com/docs/tracking/webhooks/) for more information on how to configure them.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
