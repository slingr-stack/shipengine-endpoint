# Javascript API

The Javascript API of the ShipEngine endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `PUT`,`POST`,`GET`,`DELETE`,`PATCH` requests to the [ShipEngine API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.ShipEngine.put('/v1/packages/:packageId', body)
var response = app.endpoints.ShipEngine.post('/v1/environment/webhooks', body)
var response = app.endpoints.ShipEngine.get('/v-beta/ltl/v1/carriers/:carrier_code/credential_requirements')
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
```javascript
app.endpoints.ShipEngine.addresses.recognize(body)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.batches.put(batchId, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id/settings'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.connections.carriers.settings.put(carrierName, id, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:carrier_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.connections.carriers.put(carrierName, carrierId, body)
```
---
* API URL: '/v1/carriers/:carrier_id/add_funds'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.carriers.addFunds(carrierId, body)
```
---
* API URL: '/v1/labels/:label_id/void'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.labels.void(labelId, body)
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.packages.put(packageId, body)
```
---
* API URL: '/v1/shipments/recognize'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.shipments.recognize.put(body)
```
---
* API URL: '/v1/shipments/:shipment_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.shipments.put(shipmentId, body)
```
---
* API URL: '/v1/shipments/:shipment_id/cancel'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.shipments.cancel.put(shipmentId, body)
```
---
* API URL: '/v1/tags/:tag_name/:new_tag_name'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.tags.put(tagName, newTagName, body)
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.warehouses.put(warehouseId, body)
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.environment.webhooks.put(webhookId, body)
```
---
* API URL: '/v-beta/ltl/connections/:carrier_code/:carrier_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.beta.ltl.connections.put(carrierCode, carrierId, body)
```
---
* API URL: '/v1/addresses/validate'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.addresses.validate(body)
```
---
* API URL: '/v1/batches'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.post(body)
```
---
* API URL: '/v1/batches/:batch_id/add'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.add(batchId, body)
```
---
* API URL: '/v1/batches/:batch_id/process/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.process.labels(batchId, body)
```
---
* API URL: '/v1/batches/:batch_id/remove'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.remove(batchId, body)
```
---
* API URL: '/v1/connections/carriers/:carrier_name'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.carriers.post(carrierName, body)
```
---
* API URL: '/v1/connections/insurance/shipsurance'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.insurance.shipsurance.connect(body)
```
---
* API URL: '/v1/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.post(body)
```
---
* API URL: '/v1/labels/rates/:rateId'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.rates(rateId, body)
```
---
* API URL: '/v1/labels/shipment/:shipmentId'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.shipment.post(shipmentId, body)
```
---
* API URL: '/v1/labels/:label_id/return'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.return.post(labelId, body)
```
---
* API URL: '/v1/manifests'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.manifests.post(body)
```
---
* API URL: '/v1/packages'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.packages.post(body)
```
---
* API URL: '/v1/rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.post(body)
```
---
* API URL: '/v1/rates/bulk'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.bulk.post(body)
```
---
* API URL: '/v1/rates/estimate'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.estimate(body)
```
---
* API URL: '/v1/shipments'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.shipments.post(body)
```
---
* API URL: '/v1/shipments/:shipment_id/tags/:tag_name'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.shipments.tags.post(shipmentId, tagName, body)
```
---
* API URL: '/v1/tags/:tag_name'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tags.post(tagName, body)
```
---
* API URL: '/v1/tracking/start'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tracking.start(body)
```
---
* API URL: '/v1/tracking/stop'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tracking.stop(body)
```
---
* API URL: '/v1/warehouses'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.warehouses.post(body)
```
---
* API URL: '/v1/environment/webhooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.environment.webhooks.post(body)
```
---
* API URL: '/v1/pickups'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.pickups.post(body)
```
---
* API URL: '/v-beta/ltl/connections/:carrier_code'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.connections.post(carrierCode, body)
```
---
* API URL: '/v-beta/ltl/spot-quotes/:carrier_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.spotQuotes.post(carrierId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:carrier_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.post(carrierId, body)
```
---
* API URL: '/v-beta/ltl/quotes/:quote_id/pickup'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.quotes.pickup.post(quoteId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:pickup_id/bill_of_lading'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.billOfLading.createFromPickup(pickupId, body)
```
---
* API URL: '/v-beta/ltl/pickups/:quote_id/bill_of_lading'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.ltl.pickups.billOfLading.createFromQuote(quoteId, body)
```
---
* API URL: '/v-beta/labels/sales_order/:sales_order_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.labels.salesOrder.post(salesOrderId, body)
```
---
* API URL: '/v-beta/tracking_page'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.beta.trackingPage.post(body)
```
---
* API URL: '/v1/batches'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.list()
```
---
* API URL: '/v1/batches/external_batch_id/:external_batch_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.externalBatchId.get(externalBatchId)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.get(batchId)
```
---
* API URL: '/v1/batches/:batch_id/errors'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.errors.list(batchId)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id/settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.connections.carriers.settings.get(carrierName, id)
```
---
* API URL: '/v1/carriers'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.list()
```
---
* API URL: '/v1/carriers/:carrier_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/options'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.options.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/packages'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.packages.get(carrierId)
```
---
* API URL: '/v1/carriers/:carrier_id/services'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.services.list(carrierId)
```
---
* API URL: '/v1/downloads/:dir/:subdir/:filename'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.downloads.get(dir, subdir, filename)
```
---
* API URL: '/v1/insurance/shipsurance/balance'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.insurance.shipsurance.balance.get()
```
---
* API URL: '/v1/labels'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.labels.list()
```
---
* API URL: '/v1/labels/external_shipment_id/:external_shipment_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.labels.externalShipmentId.get(externalShipmentId)
```
---
* API URL: '/v1/labels/:label_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.labels.get(labelId)
```
---
* API URL: '/v1/labels/:label_id/track'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.labels.track(labelId)
```
---
* API URL: '/v1/manifests'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.manifests.list()
```
---
* API URL: '/v1/manifests/:manifest_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.manifests.get(manifestId)
```
---
* API URL: '/v1/packages'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.packages.list()
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.packages.get(packageId)
```
---
* API URL: '/v1/rates/:rate_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.rates.get(rateId)
```
---
* API URL: '/v1/shipments'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.list()
```
---
* API URL: '/v1/shipments/external_shipment_id/:external_shipment_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.externalShipmentId.get(externalShipmentId)
```
---
* API URL: '/v1/shipments/:shipmentId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.get(shipmentId)
```
---
* API URL: '/v1/shipments/:shipment_id/rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.rates.get(shipmentId)
```
---
* API URL: '/v1/tags'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.tags.list()
```
---
* API URL: '/v1/tracking'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.tracking.get()
```
---
* API URL: '/v1/warehouses'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.warehouses.list()
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.warehouses.get(warehouseId)
```
---
* API URL: '/v1/environment/webhooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.environment.webhooks.list()
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.environment.webhooks.get(webhookId)
```
---
* API URL: '/v1/pickups'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.pickups.list()
```
---
* API URL: '/v1/pickups/:pickup_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.pickups.get(pickupId)
```
---
* API URL: '/v-beta/ltl/carriers'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.list()
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_code/features'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.features.get(carrierCode)
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_id/documents/:pro_number'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.documents.get(carrierId, proNumber)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/options'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.options.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/packages'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.packages.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_id/services'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.services.get(carrierId)
```
---
* API URL: '/v-beta/ltl/quotes/:carrier_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.quotes.get(carrierId)
```
---
* API URL: '/v-beta/ltl/tracking'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.tracking.get()
```
---
* API URL: '/v-beta/ltl/carriers/:carrier_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.get(carrierId)
```
---
* API URL: '/v-beta/ltl/v1/carriers/:carrier_code/credential_requirements'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.beta.ltl.carriers.credentialRequirements.get(carrierCode)
```
---
* API URL: '/v1/batches/:batch_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.batches.delete(batchId)
```
---
* API URL: '/v1/connections/carriers/:carrier_name/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.delete(carrierName, id)
```
---
* API URL: '/v1/connections/insurance/shipsurance'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.insurance.shipsurance.disconnect()
```
---
* API URL: '/v1/packages/:packageId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.packages.delete(packageId)
```
---
* API URL: '/v1/shipments/:shipment_id/tags/:tag_name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.shipments.tags.delete(shipmentId, tagName)
```
---
* API URL: '/v1/tags/:tag_name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.tags.delete(tagName)
```
---
* API URL: '/v1/warehouses/:warehouseId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.warehouses.delete(warehouseId)
```
---
* API URL: '/v1/environment/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.environment.webhooks.delete(webhookId)
```
---
* API URL: '/v1/pickups/:pickup_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.pickups.cancel(pickupId)
```
---
* API URL: '/v1/insurance/shipsurance/add_funds'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.ShipEngine.insurance.shipsurance.addFunds(body)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*