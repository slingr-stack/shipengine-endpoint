////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.addresses = {};

endpoint.addresses.validate = {};

endpoint.shipments = {};

endpoint.shipments.tags = {};

endpoint.tags = {};

endpoint.warehouses = {};

endpoint.labels = {};

endpoint.labels.rates = {};

endpoint.labels.shipment = {};

endpoint.labels.return = {};

endpoint.tracking = {};

endpoint.tracking.start = {};

endpoint.tracking.stop = {};

endpoint.batches = {};

endpoint.batches.add = {};

endpoint.batches.remove = {};

endpoint.batches.process = {};

endpoint.batches.process.labels = {};

endpoint.rates = {};

endpoint.rates.estimate = {};

endpoint.rates.bulk = {};

endpoint.connections = {};

endpoint.connections.carriers = {};

endpoint.connections.carriers.fedex = {};

endpoint.connections.carriers.ups = {};

endpoint.connections.carriers.stampsCom = {};

endpoint.connections.carriers.endicia = {};

endpoint.packages = {};

endpoint.manifests = {};

endpoint.batches.externalBatchId = {};

endpoint.batches.errors = {};

endpoint.shipments.rates = {};

endpoint.connections.carriers.fedex.settings = {};

endpoint.connections.carriers.ups.settings = {};

endpoint.carriers = {};

endpoint.carriers.services = {};

endpoint.carriers.options = {};

endpoint.carriers.packages = {};

endpoint.addresses.recognize = {};

endpoint.labels.void = {};

endpoint.addresses.validate.post = function(httpOptions) {
    var url = parse('/addresses/validate');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.shipments.post = function(httpOptions) {
    var url = parse('/shipments');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.shipments.tags.post = function(shipmentId, tagName, httpOptions) {
    if (!shipmentId || !tagName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId,tagName].');
        return;
    }
    var url = parse('/shipments/:shipmentId/tags/:tagName', [shipmentId, tagName]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.tags.post = function(tagName, httpOptions) {
    if (!tagName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName].');
        return;
    }
    var url = parse('/tags/:tagName', [tagName]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.warehouses.post = function(httpOptions) {
    var url = parse('/warehouses');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.labels.post = function(httpOptions) {
    var url = parse('/labels');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.labels.rates.post = function(rateId, httpOptions) {
    if (!rateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [rateId].');
        return;
    }
    var url = parse('/labels/rates/:rateId', [rateId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.labels.shipment.post = function(shipmentId, httpOptions) {
    if (!shipmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
        return;
    }
    var url = parse('/labels/shipment/:shipmentId', [shipmentId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.labels.return.post = function(labelId, httpOptions) {
    if (!labelId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
        return;
    }
    var url = parse('/labels/:label_id/return', [labelId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.tracking.start.post = function(httpOptions) {
    var url = parse('/tracking/start');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.tracking.stop.post = function(httpOptions) {
    var url = parse('/tracking/stop');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batches.post = function(httpOptions) {
    var url = parse('/batches');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batches.add.post = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batchId/add', [batchId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batches.remove.post = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batchId/remove', [batchId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.batches.process.labels.post = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batchId/process/labels', [batchId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.rates.post = function(httpOptions) {
    var url = parse('/rates');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.rates.estimate.post = function(httpOptions) {
    var url = parse('/rates/estimate');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.rates.bulk.post = function(httpOptions) {
    var url = parse('/rates/bulk');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.connections.carriers.fedex.post = function(httpOptions) {
    var url = parse('/connections/carriers/fedex');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.connections.carriers.ups.post = function(httpOptions) {
    var url = parse('/connections/carriers/ups');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.connections.carriers.stampsCom.post = function(httpOptions) {
    var url = parse('/connections/carriers/stamps_com');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.connections.carriers.endicia.post = function(httpOptions) {
    var url = parse('/connections/carriers/endicia');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.shipments.get = function(shipmentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/shipments');
			break;
		case 1:
			url = parse('/shipments/:shipmentId', [shipmentId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.packages.get = function(packageId, httpOptions) {
    if (!packageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [packageId].');
        return;
    }
    var url = parse('/packages/:packageId', [packageId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.manifests.get = function(manifestId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/manifests/:manifestId', [manifestId]);
			break;
		case 0:
			url = parse('/manifests');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.tags.get = function(httpOptions) {
    var url = parse('/tags');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.warehouses.get = function(warehouseId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/warehouses/:warehouseId', [warehouseId]);
			break;
		case 0:
			url = parse('/warehouses');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.labels.get = function(httpOptions) {
    var url = parse('/labels');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batches.get = function(batchId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/batches/:batchId', [batchId]);
			break;
		case 0:
			url = parse('/batches');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.batches.externalBatchId.get = function(externalBatchId, httpOptions) {
    if (!externalBatchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [externalBatchId].');
        return;
    }
    var url = parse('/batches/external_batch_id/:externalBatchId', [externalBatchId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.batches.errors.get = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batchId/errors', [batchId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.shipments.rates.get = function(shipmentId, httpOptions) {
    if (!shipmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
        return;
    }
    var url = parse('/shipments/:shipmentId/rates', [shipmentId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.connections.carriers.fedex.settings.get = function(fedexId, httpOptions) {
    if (!fedexId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fedexId].');
        return;
    }
    var url = parse('/connections/carriers/fedex/:fedexId/settings', [fedexId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.connections.carriers.ups.settings.get = function(upsId, httpOptions) {
    if (!upsId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [upsId].');
        return;
    }
    var url = parse('/connections/carriers/ups/:upsId/settings', [upsId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.carriers.get = function(carrierId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/carriers');
			break;
		case 1:
			url = parse('/carriers/:carrierId', [carrierId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.carriers.services.get = function(carrierId, httpOptions) {
    if (!carrierId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
        return;
    }
    var url = parse('/carriers/:carrierId/services', [carrierId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.carriers.options.get = function(carrierId, httpOptions) {
    if (!carrierId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
        return;
    }
    var url = parse('/carriers/:carrierId/options', [carrierId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.carriers.packages.get = function(carrierId, httpOptions) {
    if (!carrierId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
        return;
    }
    var url = parse('/carriers/:carrierId/packages', [carrierId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.shipments.tags.delete = function(shipmentId, tagName, httpOptions) {
    if (!shipmentId || !tagName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId,tagName].');
        return;
    }
    var url = parse('/shipments/:shipmentId/tags/:tagName', [shipmentId, tagName]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.tags.delete = function(tagName, httpOptions) {
    if (!tagName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName].');
        return;
    }
    var url = parse('/tags/:tagName', [tagName]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.warehouses.delete = function(warehouseId, httpOptions) {
    if (!warehouseId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [warehouseId].');
        return;
    }
    var url = parse('/warehouses/:warehouseId', [warehouseId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.batches.delete = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batchId', [batchId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.connections.carriers.fedex.delete = function(fedexId, httpOptions) {
    if (!fedexId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fedexId].');
        return;
    }
    var url = parse('/connections/carriers/fedex/:fedexId', [fedexId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.connections.carriers.ups.delete = function(upsId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/connections/carriers/ups/:upsId', [upsId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._delete(options);
};

endpoint.connections.carriers.stampsCom.delete = function(stampsId, httpOptions) {
    if (!stampsId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [stampsId].');
        return;
    }
    var url = parse('/connections/carriers/stamps_com/:stampsId', [stampsId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.connections.carriers.endicia.delete = function(endiciaId, httpOptions) {
    if (!endiciaId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [endiciaId].');
        return;
    }
    var url = parse('/connections/carriers/endicia/:endiciaId', [endiciaId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.addresses.recognize.put = function(httpOptions) {
    var url = parse('/addresses/recognize');
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.shipments.put = function(shipmentId, httpOptions) {
    if (!shipmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
        return;
    }
    var url = parse('/shipments/:shipmentId', [shipmentId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.packages.put = function(packageId, httpOptions) {
    if (!packageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [packageId].');
        return;
    }
    var url = parse('/packages/:packageId', [packageId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.tags.put = function(tagName, newTagName, httpOptions) {
    if (!tagName || !newTagName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName,newTagName].');
        return;
    }
    var url = parse('/tags/:tagName/:newTagName', [tagName, newTagName]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.warehouses.put = function(warehouseId, httpOptions) {
    if (!warehouseId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [warehouseId].');
        return;
    }
    var url = parse('/warehouses/:warehouseId', [warehouseId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.labels.void.put = function(labelId, httpOptions) {
    if (!labelId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
        return;
    }
    var url = parse('/labels/:labelId/void', [labelId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.connections.carriers.fedex.settings.put = function(fedexId, httpOptions) {
    if (!fedexId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fedexId].');
        return;
    }
    var url = parse('/connections/carriers/fedex/:fedexId/settings', [fedexId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.connections.carriers.ups.settings.put = function(upsId, httpOptions) {
    if (!upsId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [upsId].');
        return;
    }
    var url = parse('/connections/carriers/ups/:upsId/settings', [upsId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}