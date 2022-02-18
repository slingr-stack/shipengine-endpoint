---
title: ShipEngine endpoint
keywords: 
last_updated: October 16, 2019
tags: []
summary: "Detailed description of the API of the ShipEngine endpoint."
---

# Overview

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

# Configuration

First you will need to setup an account in ShipEngine. Then you will be able to configure the endpoint you will
need to generate an API key. You can find more information about that [here](https://www.shipengine.com/docs/getting-started/#authentication).

## API key

The private key can be generated in the dashboard of your ShipEngine app. Just copy the generated API secret to this field.

## Webhook URL

This is the URL you should configure for webhooks in ShipEngine dashboard. 

# Javascript API

The Javascript API of the ShipEngine endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `PUT`,`POST`,`GET`,`DELETE`,`PATCH` requests to the [ShipEngine API](https://www.shipengine.com/docs/getting-started/) like this:
```javascript
var response = app.endpoints.ShipEngine.put('/v1/labels/:label_id/void', body)
var response = app.endpoints.ShipEngine.post('/v1/labels', body)
var response = app.endpoints.ShipEngine.get('/v1/manifests')
var response = app.endpoints.ShipEngine.delete('/v1/warehouses/:warehouseId')
var response = app.endpoints.ShipEngine.patch('/v1/insurance/shipsurance/add_funds', body)
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v1/addresses/recognize'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/addresses/parse/,
  https://shipengine.github.io/shipengine-openapi/#operation/parse_address
```javascript
app.endpoints.ShipEngine.addresses.recognize(body)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'PUT'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/update_batch,
  https://shipengine.github.io/shipengine-openapi/#operation/update_batch
```javascript
app.endpoints.ShipEngine.batches.put(batchId, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id/settings'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/carriers/connect/,
  https://shipengine.github.io/shipengine-openapi/#operation/update_carrier_settings
```javascript
app.endpoints.ShipEngine.connections.carriers.settings.put(carrierName, id, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:carrier_id'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/carriers/update-carrier/
```javascript
app.endpoints.ShipEngine.connections.carriers.put(carrierName, carrierId, body)
```
---
* API URL: '/v1/carriers/:carrier_id/add_funds'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/carriers/add-funds/,
  https://shipengine.github.io/shipengine-openapi/#operation/add_funds_to_carrier
```javascript
app.endpoints.ShipEngine.carriers.addFunds(carrierId, body)
```
---
* API URL: '/v1/labels/:label_id/void'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/labels/voiding/,
  https://shipengine.github.io/shipengine-openapi/#operation/void_label
```javascript
app.endpoints.ShipEngine.labels.void(labelId, body)
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/update-custom-package/,
  https://shipengine.github.io/shipengine-openapi/#operation/update_package_type
```javascript
app.endpoints.ShipEngine.packages.put(packageId, body)
```
---
* API URL: '/v1/shipments/recognize'
* HTTP Method: 'PUT'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/parse_shipment
```javascript
app.endpoints.ShipEngine.shipments.recognize.put(body)
```
---
* API URL: '/v1/shipments/:shipment_id'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/update-shipment/,
  https://shipengine.github.io/shipengine-openapi/#operation/update_shipment
```javascript
app.endpoints.ShipEngine.shipments.put(shipmentId, body)
```
---
* API URL: '/v1/shipments/:shipment_id/cancel'
* HTTP Method: 'PUT'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/cancel_shipments
```javascript
app.endpoints.ShipEngine.shipments.cancel.put(shipmentId, body)
```
---
* API URL: '/v1/tags/:tag_name/:new_tag_name'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/rename-tag/,
  https://shipengine.github.io/shipengine-openapi/#operation/rename_tag
```javascript
app.endpoints.ShipEngine.tags.put(tagName, newTagName, body)
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/reference/update-warehouse/,
  https://shipengine.github.io/shipengine-openapi/#operation/update_warehouse
```javascript
app.endpoints.ShipEngine.warehouses.put(warehouseId, body)
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'PUT'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/update_webhook
```javascript
app.endpoints.ShipEngine.environment.webhooks.put(webhookId, body)
```
---
* API URL: '/v-beta/ltl/connections/:carrier_code/:carrier_id'
* HTTP Method: 'PUT'
* More info: https://www.shipengine.com/docs/ltl/connect-carrier/
```javascript
app.endpoints.ShipEngine.beta.ltl.connections.put(carrierCode, carrierId, body)
```
---
* API URL: '/v1/addresses/validate'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/addresses/validation/,
  https://shipengine.github.io/shipengine-openapi/#operation/validate_address
```javascript
app.endpoints.ShipEngine.addresses.validate(body)
```
---
* API URL: '/v1/batches'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/create-batch/
```javascript
app.endpoints.ShipEngine.batches.post(body)
```
---
* API URL: '/v1/batches/:batch_id/add'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/add-to-batch/,
  https://shipengine.github.io/shipengine-openapi/#operation/add_to_batch
```javascript
app.endpoints.ShipEngine.batches.add(batchId, body)
```
---
* API URL: '/v1/batches/:batch_id/process/labels'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/process-batch/,
  https://shipengine.github.io/shipengine-openapi/#operation/process_batch
```javascript
app.endpoints.ShipEngine.batches.process.labels(batchId, body)
```
---
* API URL: '/v1/batches/:batch_id/remove'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/remove-from-batch/,
  https://shipengine.github.io/shipengine-openapi/#operation/remove_from_batch
```javascript
app.endpoints.ShipEngine.batches.remove(batchId, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/carriers/connect/,
  https://shipengine.github.io/shipengine-openapi/#operation/connect_carrier
```javascript
app.endpoints.ShipEngine.connections.carriers.post(carrierName, body)
```
---
* API URL: '/v1/connections/insurance/shipsurance'
* HTTP Method: 'POST'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/connect_insurer
```javascript
app.endpoints.ShipEngine.connections.insurance.shipsurance.connect(body)
```
---
* API URL: '/v1/labels'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/labels/create-a-label/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_label
```javascript
app.endpoints.ShipEngine.labels.post(body)
```
---
* API URL: '/v1/labels/rates/:rateId'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/labels/create-from-rate/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_label_from_rate
```javascript
app.endpoints.ShipEngine.labels.rates(rateId, body)
```
---
* API URL: '/v1/labels/shipment/:shipmentId'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/labels/create-from-shipment/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_label_from_shipment
```javascript
app.endpoints.ShipEngine.labels.shipment.post(shipmentId, body)
```
---
* API URL: '/v1/labels/:label_id/return'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/shipping/returns/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_return_label
```javascript
app.endpoints.ShipEngine.labels.return.post(labelId, body)
```
---
* API URL: '/v1/manifests'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/create-manifest/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_manifest
```javascript
app.endpoints.ShipEngine.manifests.post(body)
```
---
* API URL: '/v1/packages'
* HTTP Method: 'POST'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/create_package_type
```javascript
app.endpoints.ShipEngine.packages.post(body)
```
---
* API URL: '/v1/rates'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/rates/,
  https://shipengine.github.io/shipengine-openapi/#operation/calculate_rates
```javascript
app.endpoints.ShipEngine.rates.post(body)
```
---
* API URL: '/v1/rates/bulk'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/rates/multiple-shipments/,
  https://shipengine.github.io/shipengine-openapi/#operation/compare_bulk_rates
```javascript
app.endpoints.ShipEngine.rates.bulk.post(body)
```
---
* API URL: '/v1/rates/estimate'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/rates/estimate/,
  https://shipengine.github.io/shipengine-openapi/#operation/estimate_rates
```javascript
app.endpoints.ShipEngine.rates.estimate(body)
```
---
* API URL: '/v1/shipments'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/shipping/create-a-shipment/,
  https://www.shipengine.com/docs/reference/create-shipments/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_shipments
```javascript
app.endpoints.ShipEngine.shipments.post(body)
```
---
* API URL: '/v1/shipments/:shipment_id/tags/:tag_name'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/tag-shipment/,
  https://shipengine.github.io/shipengine-openapi/#operation/tag_shipment
```javascript
app.endpoints.ShipEngine.shipments.tags.post(shipmentId, tagName, body)
```
---
* API URL: '/v1/tags/:tag_name'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/create-tag/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_tag
```javascript
app.endpoints.ShipEngine.tags.post(tagName, body)
```
---
* API URL: '/v1/tracking/start'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/start-tracking/,
  https://shipengine.github.io/shipengine-openapi/#operation/start_tracking
```javascript
app.endpoints.ShipEngine.tracking.start(body)
```
---
* API URL: '/v1/tracking/stop'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/stop-tracking/,
  https://shipengine.github.io/shipengine-openapi/#operation/stop_tracking
```javascript
app.endpoints.ShipEngine.tracking.stop(body)
```
---
* API URL: '/v1/warehouses'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/reference/create-warehouse/,
  https://shipengine.github.io/shipengine-openapi/#operation/create_warehouse
```javascript
app.endpoints.ShipEngine.warehouses.post(body)
```
---
* API URL: '/v1/environment/webhooks'
* HTTP Method: 'POST'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/create_webhook
```javascript
app.endpoints.ShipEngine.environment.webhooks.post(body)
```
---
* API URL: '/v1/pickups'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/shipping/pickups
```javascript
app.endpoints.ShipEngine.pickups.post(body)
```
---
* API URL: '/v-beta/ltl/connections/:carrier_code'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/connect-carrier/
```javascript
app.endpoints.ShipEngine.beta.ltl.connections.post(carrierCode, body)
```
---
* API URL: '/v-beta/ltl/spot-quotes/:carrier_id'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/spot-quote/
```javascript
app.endpoints.ShipEngine.beta.ltl.spotQuotes.post(carrierId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:carrier_id'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/pickups/
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.post(carrierId, body)
```
---
* API URL: '/v-beta/ltl/quotes/:quote_id/pickup'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/pickups-quote-id/
```javascript
app.endpoints.ShipEngine.beta.ltl.quotes.pickup.post(quoteId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:pickup_id/bill_of_lading'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/bol-pickup-id/
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.billOfLading.createFromPickup(pickupId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:quote_id/bill_of_lading'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/ltl/bol-quote-id/
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.billOfLading.createFromQuote(quoteId, body)
```
---
* API URL: '/v-beta/labels/sales_order/:sales_order_id'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/orders/create-a-label/
```javascript
app.endpoints.ShipEngine.beta.labels.salesOrder.post(salesOrderId, body)
```
---
* API URL: '/v-beta/tracking_page'
* HTTP Method: 'POST'
* More info: https://www.shipengine.com/docs/tracking/create-branded-tracking-page/
```javascript
app.endpoints.ShipEngine.beta.trackingPage.post(body)
```
---
* API URL: '/v1/batches'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-batches/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_batches
```javascript
app.endpoints.ShipEngine.batches.list()
```
---
* API URL: '/v1/batches/external_batch_id/:external_batch_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-batch-by-external-batch-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_batch_by_external_id
```javascript
app.endpoints.ShipEngine.batches.externalBatchId.get(externalBatchId)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-batch-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_batch_by_id
```javascript
app.endpoints.ShipEngine.batches.get(batchId)
```
---
* API URL: '/v1/batches/:batch_id/errors'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-batch-errors/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_batch_errors
```javascript
app.endpoints.ShipEngine.batches.errors.list(batchId)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id/settings'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/carriers/connect/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_carrier_settings
```javascript
app.endpoints.ShipEngine.connections.carriers.settings.get(carrierName, id)
```
---
* API URL: '/v1/carriers'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-carriers/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_carriers
```javascript
app.endpoints.ShipEngine.carriers.list()
```
---
* API URL: '/v1/carriers/:carrier_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-carrier-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_carrier_by_id
```javascript
app.endpoints.ShipEngine.carriers.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/options'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-carrier-options/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_carrier_options
```javascript
app.endpoints.ShipEngine.carriers.options.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/packages'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-carrier-packages/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_carrier_package_types
```javascript
app.endpoints.ShipEngine.carriers.packages.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/services'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-carrier-services/
```javascript
app.endpoints.ShipEngine.carriers.services.list(carrierId)
```
---
* API URL: '/v1/downloads/:dir/:subdir/:filename'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/download_file
```javascript
app.endpoints.ShipEngine.downloads.get(dir, subdir, filename)
```
---
* API URL: '/v1/insurance/shipsurance/balance'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/shipping/insurance/#check-your-insurance-balance,
  https://shipengine.github.io/shipengine-openapi/#operation/get_insurance_balance
```javascript
app.endpoints.ShipEngine.insurance.shipsurance.balance.get()
```
---
* API URL: '/v1/labels'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-labels/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_labels
```javascript
app.endpoints.ShipEngine.labels.list()
```
---
* API URL: '/v1/labels/external_shipment_id/:external_shipment_id'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/get_label_by_external_shipment_id
```javascript
app.endpoints.ShipEngine.labels.externalShipmentId.get(externalShipmentId)
```
---
* API URL: '/v1/labels/:label_id'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/get_label_by_id
```javascript
app.endpoints.ShipEngine.labels.get(labelId)
```
---
* API URL: '/v1/labels/:label_id/track'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/tracking/track-by-label-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_tracking_log_from_label
```javascript
app.endpoints.ShipEngine.labels.track(labelId)
```
---
* API URL: '/v1/manifests'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-manifests/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_manifests
```javascript
app.endpoints.ShipEngine.manifests.list()
```
---
* API URL: '/v1/manifests/:manifest_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-manifest-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_manifest_by_id
```javascript
app.endpoints.ShipEngine.manifests.get(manifestId)
```
---
* API URL: '/v1/packages'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/list_package_types
```javascript
app.endpoints.ShipEngine.packages.list()
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-package-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_package_type_by_id
```javascript
app.endpoints.ShipEngine.packages.get(packageId)
```
---
* API URL: '/v1/rates/:rate_id'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/get_rate_by_id
```javascript
app.endpoints.ShipEngine.rates.get(rateId)
```
---
* API URL: '/v1/shipments'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-shipments/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_shipments
```javascript
app.endpoints.ShipEngine.shipments.list()
```
---
* API URL: '/v1/shipments/external_shipment_id/:external_shipment_id'
* HTTP Method: 'GET'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/get_shipment_by_external_id
```javascript
app.endpoints.ShipEngine.shipments.externalShipmentId.get(externalShipmentId)
```
---
* API URL: '/v1/shipments/:shipmentId'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-shipment-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_shipment_by_id
```javascript
app.endpoints.ShipEngine.shipments.get(shipmentId)
```
---
* API URL: '/v1/shipments/:shipment_id/rates'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/rates/get-shipment-rates/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_shipment_rates
```javascript
app.endpoints.ShipEngine.shipments.rates.get(shipmentId)
```
---
* API URL: '/v1/tags'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-tags/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_tags
```javascript
app.endpoints.ShipEngine.tags.list()
```
---
* API URL: '/v1/tracking'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/tracking/,
  https://shipengine.github.io/shipengine-openapi/#tag/tracking
```javascript
app.endpoints.ShipEngine.tracking.get()
```
---
* API URL: '/v1/warehouses'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-warehouses/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_warehouses
```javascript
app.endpoints.ShipEngine.warehouses.list()
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/get-warehouse-by-id/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_warehouse_by_id
```javascript
app.endpoints.ShipEngine.warehouses.get(warehouseId)
```
---
* API URL: '/v1/environment/webhooks'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-webhooks/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_webhooks
```javascript
app.endpoints.ShipEngine.environment.webhooks.list()
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/reference/list-webhooks/,
  https://shipengine.github.io/shipengine-openapi/#operation/get_webhook_by_id
```javascript
app.endpoints.ShipEngine.environment.webhooks.get(webhookId)
```
---
* API URL: '/v1/pickups'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/shipping/pickups
```javascript
app.endpoints.ShipEngine.pickups.list()
```
---
* API URL: '/v1/pickups/:pickup_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/shipping/pickups
```javascript
app.endpoints.ShipEngine.pickups.get(pickupId)
```
---
* API URL: '/v-beta/ltl/carriers'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-carriers/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.list()
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_code/features'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-carrier-features/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.features.get(carrierCode)
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_id/documents/:pro_number'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-carrier-documents/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.documents.get(carrierId, proNumber)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/options'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-accessorial-services/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.options.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/packages'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-container-types/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.packages.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/services'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/list-service-levels/,
  https://shipengine.github.io/shipengine-openapi/#operation/list_carrier_services
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.services.get(carrierId)
```
---
* API URL: '/v-beta/ltl/quotes/:carrier_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/quote/
```javascript
app.endpoints.ShipEngine.beta.ltl.quotes.get(carrierId)
```
---
* API URL: '/v-beta/ltl/tracking'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/tracking/
```javascript
app.endpoints.ShipEngine.beta.ltl.tracking.get()
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_id'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/get-a-single-carrier/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_code/credential_requirements'
* HTTP Method: 'GET'
* More info: https://www.shipengine.com/docs/ltl/get-credential-requirements/
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.credentialRequirements.get(carrierCode)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/reference/archive-batch/,
  https://shipengine.github.io/shipengine-openapi/#operation/delete_batch
```javascript
app.endpoints.ShipEngine.batches.delete(batchId)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/reference/carriers/connect/,
  https://shipengine.github.io/shipengine-openapi/#operation/disconnect_carrier
```javascript
app.endpoints.ShipEngine.connections.carriers.delete(carrierName, id)
```
---
* API URL: '/v1/connections/insurance/shipsurance'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/shipping/insurance/#adding-insurance-funds,
  https://shipengine.github.io/shipengine-openapi/#operation/disconnect_insurer
```javascript
app.endpoints.ShipEngine.connections.insurance.shipsurance.disconnect()
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'DELETE'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/delete_package_type
```javascript
app.endpoints.ShipEngine.packages.delete(packageId)
```
---
* API URL: '/v1/shipments/:shipment_id/tags/:tag_name'
* HTTP Method: 'DELETE'
* More info: https://shipengine.github.io/shipengine-openapi/#operation/untag_shipment,
  https://www.shipengine.com/docs/reference/remove-tag-from-shipment/
```javascript
app.endpoints.ShipEngine.shipments.tags.delete(shipmentId, tagName)
```
---
* API URL: '/v1/tags/:tag_name'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/reference/delete-tag/,
  https://shipengine.github.io/shipengine-openapi/#operation/delete_tag
```javascript
app.endpoints.ShipEngine.tags.delete(tagName)
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/reference/delete-warehouse/,
  https://shipengine.github.io/shipengine-openapi/#operation/delete_warehouse
```javascript
app.endpoints.ShipEngine.warehouses.delete(warehouseId)
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/reference/delete-webhook/,
  https://shipengine.github.io/shipengine-openapi/#operation/delete_webhook
```javascript
app.endpoints.ShipEngine.environment.webhooks.delete(webhookId)
```
---
* API URL: '/v1/pickups/:pickup_id'
* HTTP Method: 'DELETE'
* More info: https://www.shipengine.com/docs/shipping/pickups
```javascript
app.endpoints.ShipEngine.pickups.cancel(pickupId)
```
---
* API URL: '/v1/insurance/shipsurance/add_funds'
* HTTP Method: 'PATCH'
* More info: https://www.shipengine.com/docs/shipping/insurance/#adding-insurance-funds
```javascript
app.endpoints.ShipEngine.insurance.shipsurance.addFunds(body)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

#Events

## Webhook

ShipEngine's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://www.shipengine.com/docs/tracking/webhooks/) for more information on how to configure them.

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
