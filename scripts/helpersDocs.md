# Javascript API

The Javascript API of the ShipEngine endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET`,`DELETE`,`PUT` requests to the [ShipEngine API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.ShipEngine.post('/connections/carriers/ups', body)
var response = app.endpoints.ShipEngine.post('/connections/carriers/ups')
var response = app.endpoints.ShipEngine.get('/carriers/:carrierId/services')
var response = app.endpoints.ShipEngine.delete('/shipments/:shipmentId/tags/:tagName')
var response = app.endpoints.ShipEngine.put('/packages/:packageId', body)
var response = app.endpoints.ShipEngine.put('/packages/:packageId')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/addresses/validate'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.addresses.validate.post(body)
```
---
* API URL: '/shipments'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.shipments.post(body)
```
---
* API URL: '/shipments/:shipmentId/tags/:tagName'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.shipments.tags.post(shipmentId, tagName, body)
```
---
* API URL: '/tags/:tagName'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tags.post(tagName, body)
```
---
* API URL: '/warehouses'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.warehouses.post(body)
```
---
* API URL: '/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.post(body)
```
---
* API URL: '/labels/rates/:rateId'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.rates.post(rateId, body)
```
---
* API URL: '/labels/shipment/:shipmentId'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.shipment.post(shipmentId, body)
```
---
* API URL: '/labels/:label_id/return'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.labels.return.post(labelId, body)
```
---
* API URL: '/tracking/start'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tracking.start.post(body)
```
---
* API URL: '/tracking/stop'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.tracking.stop.post(body)
```
---
* API URL: '/batches'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.post(body)
```
---
* API URL: '/batches/:batchId/add'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.add.post(batchId, body)
```
---
* API URL: '/batches/:batchId/remove'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.remove.post(batchId, body)
```
---
* API URL: '/batches/:batchId/process/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.batches.process.labels.post(batchId, body)
```
---
* API URL: '/rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.post(body)
```
---
* API URL: '/rates/estimate'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.estimate.post(body)
```
---
* API URL: '/rates/bulk'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.rates.bulk.post(body)
```
---
* API URL: '/connections/carriers/fedex'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.carriers.fedex.post(body)
```
---
* API URL: '/connections/carriers/ups'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.post(body)
```
---
* API URL: '/connections/carriers/stamps_com'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.carriers.stampsCom.post(body)
```
---
* API URL: '/connections/carriers/endicia'
* HTTP Method: 'POST'
```javascript
app.endpoints.ShipEngine.connections.carriers.endicia.post(body)
```
---
* API URL: '/shipments'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.get()
```
---
* API URL: '/shipments/:shipmentId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.get()
```
---
* API URL: '/packages/:packageId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.packages.get(packageId)
```
---
* API URL: '/manifests/:manifestId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.manifests.get()
```
---
* API URL: '/manifests'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.manifests.get()
```
---
* API URL: '/tags'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.tags.get()
```
---
* API URL: '/warehouses/:warehouseId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.warehouses.get()
```
---
* API URL: '/warehouses'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.warehouses.get()
```
---
* API URL: '/labels'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.labels.get()
```
---
* API URL: '/batches/:batchId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.get()
```
---
* API URL: '/batches'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.get()
```
---
* API URL: '/batches/external_batch_id/:externalBatchId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.externalBatchId.get(externalBatchId)
```
---
* API URL: '/batches/:batchId/errors'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.batches.errors.get(batchId)
```
---
* API URL: '/shipments/:shipmentId/rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.shipments.rates.get(shipmentId)
```
---
* API URL: '/connections/carriers/fedex/:fedexId/settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.connections.carriers.fedex.settings.get(fedexId)
```
---
* API URL: '/connections/carriers/ups/:upsId/settings'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.settings.get(upsId)
```
---
* API URL: '/carriers'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.get()
```
---
* API URL: '/carriers/:carrierId'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.get()
```
---
* API URL: '/carriers/:carrierId/services'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.services.get(carrierId)
```
---
* API URL: '/carriers/:carrierId/options'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.options.get(carrierId)
```
---
* API URL: '/carriers/:carrierId/packages'
* HTTP Method: 'GET'
```javascript
app.endpoints.ShipEngine.carriers.packages.get(carrierId)
```
---
* API URL: '/shipments/:shipmentId/tags/:tagName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.shipments.tags.delete(shipmentId, tagName)
```
---
* API URL: '/tags/:tagName'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.tags.delete(tagName)
```
---
* API URL: '/warehouses/:warehouseId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.warehouses.delete(warehouseId)
```
---
* API URL: '/batches/:batchId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.batches.delete(batchId)
```
---
* API URL: '/connections/carriers/fedex/:fedexId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.fedex.delete(fedexId)
```
---
* API URL: '/connections/carriers/ups/:upsId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.delete()
```
---
* API URL: '/connections/carriers/ups/:upsId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.delete()
```
---
* API URL: '/connections/carriers/ups/:upsId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.delete()
```
---
* API URL: '/connections/carriers/stamps_com/:stampsId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.stampsCom.delete(stampsId)
```
---
* API URL: '/connections/carriers/endicia/:endiciaId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.ShipEngine.connections.carriers.endicia.delete(endiciaId)
```
---
* API URL: '/addresses/recognize'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.addresses.recognize.put(body)
```
---
* API URL: '/shipments/:shipmentId'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.shipments.put(shipmentId, body)
```
---
* API URL: '/packages/:packageId'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.packages.put(packageId, body)
```
---
* API URL: '/tags/:tagName/:newTagName'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.tags.put(tagName, newTagName, body)
```
---
* API URL: '/warehouses/:warehouseId'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.warehouses.put(warehouseId, body)
```
---
* API URL: '/labels/:labelId/void'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.labels.void.put(labelId, body)
```
---
* API URL: '/connections/carriers/fedex/:fedexId/settings'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.connections.carriers.fedex.settings.put(fedexId, body)
```
---
* API URL: '/connections/carriers/ups/:upsId/settings'
* HTTP Method: 'PUT'
```javascript
app.endpoints.ShipEngine.connections.carriers.ups.settings.put(upsId, body)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,GET,DELETE,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/addresses/validate<br>/shipments<br>/shipments/{shipmentId}/tags/{tagName}<br>/tags/{tagName}<br>/warehouses<br>/labels<br>/labels/rates/{rateId}<br>/labels/shipment/{shipmentId}<br>/labels/{label_id}/return<br>/tracking/start<br>/tracking/stop<br>/batches<br>/batches/{batchId}/add<br>/batches/{batchId}/remove<br>/batches/{batchId}/process/labels<br>/rates<br>/rates/estimate<br>/rates/bulk<br>/connections/carriers/fedex<br>/connections/carriers/ups<br>/connections/carriers/stamps_com<br>/connections/carriers/endicia<br>/shipments<br>/shipments/{shipmentId}<br>/packages/{packageId}<br>/manifests/{manifestId}<br>/manifests<br>/tags<br>/warehouses/{warehouseId}<br>/warehouses<br>/labels<br>/batches/{batchId}<br>/batches<br>/batches/external_batch_id/{externalBatchId}<br>/batches/{batchId}/errors<br>/shipments/{shipmentId}/rates<br>/connections/carriers/fedex/{fedexId}/settings<br>/connections/carriers/ups/{upsId}/settings<br>/carriers<br>/carriers/{carrierId}<br>/carriers/{carrierId}/services<br>/carriers/{carrierId}/options<br>/carriers/{carrierId}/packages<br>/shipments/{shipmentId}/tags/{tagName}<br>/tags/{tagName}<br>/warehouses/{warehouseId}<br>/batches/{batchId}<br>/connections/carriers/fedex/{fedexId}<br>/connections/carriers/ups/{upsId}<br>/connections/carriers/ups/{upsId}<br>/connections/carriers/ups/{upsId}<br>/connections/carriers/stamps_com/{stampsId}<br>/connections/carriers/endicia/{endiciaId}<br>/addresses/recognize<br>/shipments/{shipmentId}<br>/packages/{packageId}<br>/tags/{tagName}/{newTagName}<br>/warehouses/{warehouseId}<br>/labels/{labelId}/void<br>/connections/carriers/fedex/{fedexId}/settings<br>/connections/carriers/ups/{upsId}/settings<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*