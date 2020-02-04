//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is generated with shipengine/gen/gen-shipengine-helpers.js//
//                                                                      //
//            Mon Jan 06 2020 17:22:47 GMT-0300 (-03)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"addresses.recognize.put": {
		"0": "addresses/recognize"
	},
	"addresses.validate.post": {
		"0": "addresses/validate"
	},
	"shipments.post": {
		"0": "shipments/"
	},
	"shipments.put": {
		"1": "shipments/:shipmentId"
	},
	"shipments.get": {
		"0": "shipments/",
		"1": "shipments/:shipmentId"
	},
	"packages.put": {
		"1": "packages/:packageId"
	},
	"packages.get": {
		"1": "packages/:packageId"
	},
	"manifests.get": {
		"0": "manifests/",
		"1": "manifests/:manifestId"
	},
	"shipments.tags.post": {
		"2": "shipments/:shipmentId/tags/:tagName"
	},
	"tags.post": {
		"1": "tags/:tagName"
	},
	"tags.put": {
		"2": "tags/:tagName/:newTagName"
	},
	"tags.get": {
		"0": "tags/"
	},
	"shipments.tags.delete": {
		"2": "shipments/:shipmentId/tags/:tagName"
	},
	"tags.delete": {
		"1": "tags/:tagName"
	},
	"warehouses.post": {
		"0": "warehouses/"
	},
	"warehouses.put": {
		"1": "warehouses/:warehouseId"
	},
	"warehouses.get": {
		"0": "warehouses/",
		"1": "warehouses/:warehouseId"
	},
	"warehouses.delete": {
		"1": "warehouses/:warehouseId"
	},
	"labels.get": {
		"0": "labels/"
	},
	"labels.post": {
		"0": "labels/"
	},
	"labels.rates.post": {
		"1": "labels/rates/:rateId"
	},
	"labels.shipment.post": {
		"1": "labels/shipment/:shipmentId"
	},
	"labels.void.put": {
		"1": "labels/:labelId/void"
	},
	"tracking.start.post": {
		"0": "tracking/start"
	},
	"tracking.stop.post": {
		"0": "tracking/stop"
	},
	"batches.post": {
		"0": "batches/"
	},
	"batches.get": {
		"0": "batches/",
		"1": "batches/:batchId"
	},
	"batches.externalBatchId.get": {
		"1": "batches/external_batch_id/:externalBatchId"
	},
	"batches.add.post": {
		"1": "batches/:batchId/add"
	},
	"batches.remove.post": {
		"1": "batches/:batchId/remove"
	},
	"batches.process.labels.post": {
		"1": "batches/:batchId/process/labels"
	},
	"batches.errors.get": {
		"1": "batches/:batchId/errors"
	},
	"batches.delete": {
		"1": "batches/:batchId"
	},
	"rates.post": {
		"0": "rates/"
	},
	"rates.estimate.post": {
		"0": "rates/estimate"
	},
	"rates.bulk.post": {
		"0": "rates/bulk"
	},
	"shipments.rates.get": {
		"1": "shipments/:shipmentId/rates"
	},
	"connections.carriers.fedex.post": {
		"0": "connections/carriers/fedex"
	},
	"connections.carriers.fedex.settings.put": {
		"1": "connections/carriers/fedex/:fedexId/settings"
	},
	"connections.carriers.fedex.settings.get": {
		"1": "connections/carriers/fedex/:fedexId/settings"
	},
	"connections.carriers.fedex.delete": {
		"1": "connections/carriers/fedex/:fedexId"
	},
	"connections.carriers.ups.post": {
		"0": "connections/carriers/ups"
	},
	"connections.carriers.ups.settings.put": {
		"1": "connections/carriers/ups/:upsId/settings"
	},
	"connections.carriers.ups.settings.get": {
		"1": "connections/carriers/ups/:upsId/settings"
	},
	"connections.carriers.ups.delete": {
		"1": "connections/carriers/ups/:upsId"
	},
	"connections.carriers.stampsCom.post": {
		"0": "connections/carriers/stamps_com"
	},
	"connections.carriers.stampsCom.delete": {
		"1": "connections/carriers/stamps_com/:stampsId"
	},
	"connections.carriers.endicia.post": {
		"0": "connections/carriers/endicia"
	},
	"connections.carriers.endicia.delete": {
		"1": "connections/carriers/endicia/:endiciaId"
	},
	"carriers.get": {
		"0": "carriers/",
		"1": "carriers/:carrierId"
	},
	"carriers.services.get": {
		"1": "carriers/:carrierId/services"
	},
	"carriers.options.get": {
		"1": "carriers/:carrierId/options"
	},
	"carriers.packages.get": {
		"1": "carriers/:carrierId/packages"
	}
};

var analyzeParams = function (args) {
    var paramsSize = 0;
    var params = [];
    var argumentsObj = null;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            paramsSize++;
            params.push(args[i]);
        } else {
            argumentsObj = args[i];
        }

    }
    return {
        paramsSize: paramsSize,
        argumentsObj: argumentsObj,
        params: params
    };
};

var getUrl = function (url, params, args, argsToPath) {

    if (!url) {
        return null;
    }

    if (params.length > 0) {
        var i = 0;
        url = url.replace(/:(\w+)/g, function () {
            return params[i++];
        });
    }

    if (args && argsToPath) {
        var tmp = Object.keys(args).map(function (k) {
            return encodeURIComponent(k) + '=' + args[k];
        }).join('&');

        if (url.split("\?").length > 1) {
            url += '&' + tmp;
        } else {
            url += '?' + tmp;
        }
    }

    return url;
};

endpoint.addresses = {};
endpoint.addresses.recognize = {};
endpoint.addresses.recognize.put = function() {
	var obj = urlsData['addresses.recognize.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.addresses.validate = {};
endpoint.addresses.validate.post = function() {
	var obj = urlsData['addresses.validate.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.shipments = {};
endpoint.shipments.post = function() {
	var obj = urlsData['shipments.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.shipments.put = function() {
	var obj = urlsData['shipments.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.shipments.get = function() {
	var obj = urlsData['shipments.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.packages = {};
endpoint.packages.put = function() {
	var obj = urlsData['packages.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.packages.get = function() {
	var obj = urlsData['packages.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.manifests = {};
endpoint.manifests.get = function() {
	var obj = urlsData['manifests.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.shipments.tags = {};
endpoint.shipments.tags.post = function() {
	var obj = urlsData['shipments.tags.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.tags = {};
endpoint.tags.post = function() {
	var obj = urlsData['tags.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.tags.put = function() {
	var obj = urlsData['tags.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.tags.get = function() {
	var obj = urlsData['tags.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.shipments.tags.delete = function() {
	var obj = urlsData['shipments.tags.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.tags.delete = function() {
	var obj = urlsData['tags.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.warehouses = {};
endpoint.warehouses.post = function() {
	var obj = urlsData['warehouses.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.warehouses.put = function() {
	var obj = urlsData['warehouses.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.warehouses.get = function() {
	var obj = urlsData['warehouses.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.warehouses.delete = function() {
	var obj = urlsData['warehouses.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.labels = {};
endpoint.labels.get = function() {
	var obj = urlsData['labels.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.labels.post = function() {
	var obj = urlsData['labels.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.labels.rates = {};
endpoint.labels.rates.post = function() {
	var obj = urlsData['labels.rates.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.labels.shipment = {};
endpoint.labels.shipment.post = function() {
	var obj = urlsData['labels.shipment.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.labels.void = {};
endpoint.labels.void.put = function() {
	var obj = urlsData['labels.void.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.tracking = {};
endpoint.tracking.start = {};
endpoint.tracking.start.post = function() {
	var obj = urlsData['tracking.start.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.post(url);
};

endpoint.tracking.stop = {};
endpoint.tracking.stop.post = function() {
	var obj = urlsData['tracking.stop.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.post(url);
};

endpoint.batches = {};
endpoint.batches.post = function() {
	var obj = urlsData['batches.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.get = function() {
	var obj = urlsData['batches.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.batches.externalBatchId = {};
endpoint.batches.externalBatchId.get = function() {
	var obj = urlsData['batches.externalBatchId.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.batches.add = {};
endpoint.batches.add.post = function() {
	var obj = urlsData['batches.add.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.remove = {};
endpoint.batches.remove.post = function() {
	var obj = urlsData['batches.remove.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.process = {};
endpoint.batches.process.labels = {};
endpoint.batches.process.labels.post = function() {
	var obj = urlsData['batches.process.labels.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.errors = {};
endpoint.batches.errors.get = function() {
	var obj = urlsData['batches.errors.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.batches.delete = function() {
	var obj = urlsData['batches.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.rates = {};
endpoint.rates.post = function() {
	var obj = urlsData['rates.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.rates.estimate = {};
endpoint.rates.estimate.post = function() {
	var obj = urlsData['rates.estimate.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.rates.bulk = {};
endpoint.rates.bulk.post = function() {
	var obj = urlsData['rates.bulk.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.shipments.rates = {};
endpoint.shipments.rates.get = function() {
	var obj = urlsData['shipments.rates.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.connections = {};
endpoint.connections.carriers = {};
endpoint.connections.carriers.fedex = {};
endpoint.connections.carriers.fedex.post = function() {
	var obj = urlsData['connections.carriers.fedex.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connections.carriers.fedex.settings = {};
endpoint.connections.carriers.fedex.settings.put = function() {
	var obj = urlsData['connections.carriers.fedex.settings.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.connections.carriers.fedex.settings.get = function() {
	var obj = urlsData['connections.carriers.fedex.settings.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.connections.carriers.fedex.delete = function() {
	var obj = urlsData['connections.carriers.fedex.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.connections.carriers.ups = {};
endpoint.connections.carriers.ups.post = function() {
	var obj = urlsData['connections.carriers.ups.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connections.carriers.ups.settings = {};
endpoint.connections.carriers.ups.settings.put = function() {
	var obj = urlsData['connections.carriers.ups.settings.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.connections.carriers.ups.settings.get = function() {
	var obj = urlsData['connections.carriers.ups.settings.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.connections.carriers.ups.delete = function() {
	var obj = urlsData['connections.carriers.ups.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.connections.carriers.stampsCom = {};
endpoint.connections.carriers.stampsCom.post = function() {
	var obj = urlsData['connections.carriers.stampsCom.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connections.carriers.stampsCom.delete = function() {
	var obj = urlsData['connections.carriers.stampsCom.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.connections.carriers.endicia = {};
endpoint.connections.carriers.endicia.post = function() {
	var obj = urlsData['connections.carriers.endicia.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connections.carriers.endicia.delete = function() {
	var obj = urlsData['connections.carriers.endicia.delete'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.delete(url);
};

endpoint.carriers = {};
endpoint.carriers.get = function() {
	var obj = urlsData['carriers.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.carriers.services = {};
endpoint.carriers.services.get = function() {
	var obj = urlsData['carriers.services.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.carriers.options = {};
endpoint.carriers.options.get = function() {
	var obj = urlsData['carriers.options.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.carriers.packages = {};
endpoint.carriers.packages.get = function() {
	var obj = urlsData['carriers.packages.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

