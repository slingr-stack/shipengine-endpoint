 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


function parse(str) {
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

endpoint.addresses = {};

endpoint.addresses.recognize = function(httpOptions) {
	var url = parse('/v1/addresses/recognize');
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.addresses.validate = function(httpOptions) {
	var url = parse('/v1/addresses/validate');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.batches = {};

endpoint.batches.list = function(httpOptions) {
	var url = parse('/v1/batches');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.batches.post = function(httpOptions) {
	var url = parse('/v1/batches');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.batches.externalBatchId = {};

endpoint.batches.externalBatchId.get = function(externalBatchId, httpOptions) {
	if (!externalBatchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [externalBatchId].');
		return;
	}
	var url = parse('/v1/batches/external_batch_id/:external_batch_id', [externalBatchId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.batches.delete = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id', [batchId]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.batches.get = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id', [batchId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.batches.put = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id', [batchId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.batches.add = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id/add', [batchId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.batches.errors = {};

endpoint.batches.errors.list = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id/errors', [batchId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.batches.process = {};

endpoint.batches.process.labels = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id/process/labels', [batchId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.batches.remove = function(batchId, httpOptions) {
	if (!batchId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
		return;
	}
	var url = parse('/v1/batches/:batch_id/remove', [batchId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connections = {};

endpoint.connections.carriers = {};

endpoint.connections.carriers.post = function(carrierName, httpOptions) {
	if (!carrierName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierName].');
		return;
	}
	var url = parse('/v1/connections/carriers/:carrier_name', [carrierName]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connections.carriers.delete = function(carrierName, id, httpOptions) {
	if (!carrierName || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierName,id].');
		return;
	}
	var url = parse('/v1/connections/carriers/:carrier_name/:id', [carrierName, id]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connections.carriers.settings = {};

endpoint.connections.carriers.settings.get = function(carrierName, id, httpOptions) {
	if (!carrierName || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierName,id].');
		return;
	}
	var url = parse('/v1/connections/carriers/:carrier_name/:id/settings', [carrierName, id]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connections.carriers.settings.put = function(carrierName, id, httpOptions) {
	if (!carrierName || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierName,id].');
		return;
	}
	var url = parse('/v1/connections/carriers/:carrier_name/:id/settings', [carrierName, id]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.connections.carriers.put = function(carrierName, carrierId, httpOptions) {
	if (!carrierName || !carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierName,carrierId].');
		return;
	}
	var url = parse('/v1/connections/carriers/:carrier_name/:carrier_id', [carrierName, carrierId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.carriers = {};

endpoint.carriers.list = function(httpOptions) {
	var url = parse('/v1/carriers');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.carriers.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v1/carriers/:carrier_id', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.carriers.addFunds = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v1/carriers/:carrier_id/add_funds', [carrierId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.carriers.options = {};

endpoint.carriers.options.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v1/carriers/:carrier_id/options', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.carriers.packages = {};

endpoint.carriers.packages.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v1/carriers/:carrier_id/packages', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.carriers.services = {};

endpoint.carriers.services.list = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v1/carriers/:carrier_id/services', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.downloads = {};

endpoint.downloads.get = function(dir, subdir, filename, httpOptions) {
	if (!dir || !subdir || !filename) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [dir,subdir,filename].');
		return;
	}
	var url = parse('/v1/downloads/:dir/:subdir/:filename', [dir, subdir, filename]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connections.insurance = {};

endpoint.connections.insurance.shipsurance = {};

endpoint.connections.insurance.shipsurance.disconnect = function(httpOptions) {
	var url = parse('/v1/connections/insurance/shipsurance');
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connections.insurance.shipsurance.connect = function(httpOptions) {
	var url = parse('/v1/connections/insurance/shipsurance');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.insurance = {};

endpoint.insurance.shipsurance = {};

endpoint.insurance.shipsurance.addFunds = function(httpOptions) {
	var url = parse('/v1/insurance/shipsurance/add_funds');
	sys.logs.debug('[ShipEngine] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.insurance.shipsurance.balance = {};

endpoint.insurance.shipsurance.balance.get = function(httpOptions) {
	var url = parse('/v1/insurance/shipsurance/balance');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.labels = {};

endpoint.labels.list = function(httpOptions) {
	var url = parse('/v1/labels');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.labels.post = function(httpOptions) {
	var url = parse('/v1/labels');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.labels.externalShipmentId = {};

endpoint.labels.externalShipmentId.get = function(externalShipmentId, httpOptions) {
	if (!externalShipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [externalShipmentId].');
		return;
	}
	var url = parse('/v1/labels/external_shipment_id/:external_shipment_id', [externalShipmentId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.labels.rates = function(rateId, httpOptions) {
	if (!rateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [rateId].');
		return;
	}
	var url = parse('/v1/labels/rates/:rateId', [rateId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.labels.shipment = {};

endpoint.labels.shipment.post = function(shipmentId, httpOptions) {
	if (!shipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
		return;
	}
	var url = parse('/v1/labels/shipment/:shipmentId', [shipmentId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.labels.get = function(labelId, httpOptions) {
	if (!labelId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
		return;
	}
	var url = parse('/v1/labels/:label_id', [labelId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.labels.return = {};

endpoint.labels.return.post = function(labelId, httpOptions) {
	if (!labelId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
		return;
	}
	var url = parse('/v1/labels/:label_id/return', [labelId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.labels.track = function(labelId, httpOptions) {
	if (!labelId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
		return;
	}
	var url = parse('/v1/labels/:label_id/track', [labelId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.labels.void = function(labelId, httpOptions) {
	if (!labelId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [labelId].');
		return;
	}
	var url = parse('/v1/labels/:label_id/void', [labelId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.manifests = {};

endpoint.manifests.list = function(httpOptions) {
	var url = parse('/v1/manifests');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.manifests.post = function(httpOptions) {
	var url = parse('/v1/manifests');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.manifests.get = function(manifestId, httpOptions) {
	if (!manifestId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [manifestId].');
		return;
	}
	var url = parse('/v1/manifests/:manifest_id', [manifestId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.packages = {};

endpoint.packages.list = function(httpOptions) {
	var url = parse('/v1/packages');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.packages.post = function(httpOptions) {
	var url = parse('/v1/packages');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.packages.get = function(packageId, httpOptions) {
	if (!packageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [packageId].');
		return;
	}
	var url = parse('/v1/packages/:packageId', [packageId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.packages.put = function(packageId, httpOptions) {
	if (!packageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [packageId].');
		return;
	}
	var url = parse('/v1/packages/:packageId', [packageId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.packages.delete = function(packageId, httpOptions) {
	if (!packageId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [packageId].');
		return;
	}
	var url = parse('/v1/packages/:packageId', [packageId]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.rates = {};

endpoint.rates.post = function(httpOptions) {
	var url = parse('/v1/rates');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.rates.bulk = {};

endpoint.rates.bulk.post = function(httpOptions) {
	var url = parse('/v1/rates/bulk');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.rates.estimate = function(httpOptions) {
	var url = parse('/v1/rates/estimate');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.rates.get = function(rateId, httpOptions) {
	if (!rateId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [rateId].');
		return;
	}
	var url = parse('/v1/rates/:rate_id', [rateId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.shipments = {};

endpoint.shipments.list = function(httpOptions) {
	var url = parse('/v1/shipments');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.shipments.post = function(httpOptions) {
	var url = parse('/v1/shipments');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.shipments.externalShipmentId = {};

endpoint.shipments.externalShipmentId.get = function(externalShipmentId, httpOptions) {
	if (!externalShipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [externalShipmentId].');
		return;
	}
	var url = parse('/v1/shipments/external_shipment_id/:external_shipment_id', [externalShipmentId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.shipments.recognize = {};

endpoint.shipments.recognize.put = function(httpOptions) {
	var url = parse('/v1/shipments/recognize');
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.shipments.get = function(shipmentId, httpOptions) {
	if (!shipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
		return;
	}
	var url = parse('/v1/shipments/:shipmentId', [shipmentId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.shipments.put = function(shipmentId, httpOptions) {
	if (!shipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
		return;
	}
	var url = parse('/v1/shipments/:shipment_id', [shipmentId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.shipments.cancel = {};

endpoint.shipments.cancel.put = function(shipmentId, httpOptions) {
	if (!shipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
		return;
	}
	var url = parse('/v1/shipments/:shipment_id/cancel', [shipmentId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.shipments.rates = {};

endpoint.shipments.rates.get = function(shipmentId, httpOptions) {
	if (!shipmentId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId].');
		return;
	}
	var url = parse('/v1/shipments/:shipment_id/rates', [shipmentId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.shipments.tags = {};

endpoint.shipments.tags.post = function(shipmentId, tagName, httpOptions) {
	if (!shipmentId || !tagName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId,tagName].');
		return;
	}
	var url = parse('/v1/shipments/:shipment_id/tags/:tag_name', [shipmentId, tagName]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.shipments.tags.delete = function(shipmentId, tagName, httpOptions) {
	if (!shipmentId || !tagName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [shipmentId,tagName].');
		return;
	}
	var url = parse('/v1/shipments/:shipment_id/tags/:tag_name', [shipmentId, tagName]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.tags = {};

endpoint.tags.list = function(httpOptions) {
	var url = parse('/v1/tags');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.tags.post = function(tagName, httpOptions) {
	if (!tagName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName].');
		return;
	}
	var url = parse('/v1/tags/:tag_name', [tagName]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.tags.put = function(tagName, newTagName, httpOptions) {
	if (!tagName || !newTagName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName,newTagName].');
		return;
	}
	var url = parse('/v1/tags/:tag_name/:new_tag_name', [tagName, newTagName]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.tags.delete = function(tagName, httpOptions) {
	if (!tagName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [tagName].');
		return;
	}
	var url = parse('/v1/tags/:tag_name', [tagName]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.tracking = {};

endpoint.tracking.get = function(httpOptions) {
	var url = parse('/v1/tracking');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.tracking.start = function(httpOptions) {
	var url = parse('/v1/tracking/start');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.tracking.stop = function(httpOptions) {
	var url = parse('/v1/tracking/stop');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.warehouses = {};

endpoint.warehouses.list = function(httpOptions) {
	var url = parse('/v1/warehouses');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.warehouses.post = function(httpOptions) {
	var url = parse('/v1/warehouses');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.warehouses.get = function(warehouseId, httpOptions) {
	if (!warehouseId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [warehouseId].');
		return;
	}
	var url = parse('/v1/warehouses/:warehouseId', [warehouseId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.warehouses.put = function(warehouseId, httpOptions) {
	if (!warehouseId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [warehouseId].');
		return;
	}
	var url = parse('/v1/warehouses/:warehouseId', [warehouseId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.warehouses.delete = function(warehouseId, httpOptions) {
	if (!warehouseId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [warehouseId].');
		return;
	}
	var url = parse('/v1/warehouses/:warehouseId', [warehouseId]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.environment = {};

endpoint.environment.webhooks = {};

endpoint.environment.webhooks.list = function(httpOptions) {
	var url = parse('/v1/environment/webhooks');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.environment.webhooks.post = function(httpOptions) {
	var url = parse('/v1/environment/webhooks');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.environment.webhooks.get = function(webhookId, httpOptions) {
	if (!webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [webhookId].');
		return;
	}
	var url = parse('/v1/environment/webhooks/:webhook_id', [webhookId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.environment.webhooks.put = function(webhookId, httpOptions) {
	if (!webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [webhookId].');
		return;
	}
	var url = parse('/v1/environment/webhooks/:webhook_id', [webhookId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.environment.webhooks.delete = function(webhookId, httpOptions) {
	if (!webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [webhookId].');
		return;
	}
	var url = parse('/v1/environment/webhooks/:webhook_id', [webhookId]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.pickups = {};

endpoint.pickups.post = function(httpOptions) {
	var url = parse('/v1/pickups');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.pickups.cancel = function(pickupId, httpOptions) {
	if (!pickupId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pickupId].');
		return;
	}
	var url = parse('/v1/pickups/:pickup_id', [pickupId]);
	sys.logs.debug('[ShipEngine] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.pickups.list = function(httpOptions) {
	var url = parse('/v1/pickups');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.pickups.get = function(pickupId, httpOptions) {
	if (!pickupId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pickupId].');
		return;
	}
	var url = parse('/v1/pickups/:pickup_id', [pickupId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta = {};

endpoint.beta.ltl = {};

endpoint.beta.ltl.connections = {};

endpoint.beta.ltl.connections.post = function(carrierCode, httpOptions) {
	if (!carrierCode) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierCode].');
		return;
	}
	var url = parse('/v-beta/ltl/connections/:carrier_code', [carrierCode]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.connections.put = function(carrierCode, carrierId, httpOptions) {
	if (!carrierCode || !carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierCode,carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/connections/:carrier_code/:carrier_id', [carrierCode, carrierId]);
	sys.logs.debug('[ShipEngine] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.beta.ltl.carriers = {};

endpoint.beta.ltl.carriers.list = function(httpOptions) {
	var url = parse('/v-beta/ltl/carriers');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.features = {};

endpoint.beta.ltl.carriers.features.get = function(carrierCode, httpOptions) {
	if (!carrierCode) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierCode].');
		return;
	}
	var url = parse('/v-beta/ltl/carriers/:carrier_code/features', [carrierCode]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.documents = {};

endpoint.beta.ltl.carriers.documents.get = function(carrierId, proNumber, httpOptions) {
	if (!carrierId || !proNumber) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId,proNumber].');
		return;
	}
	var url = parse('/v-beta/ltl/carriers/:carrier_id/documents/:pro_number', [carrierId, proNumber]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.options = {};

endpoint.beta.ltl.carriers.options.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/v1/carriers/:carrier_id/options', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.packages = {};

endpoint.beta.ltl.carriers.packages.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/v1/carriers/:carrier_id/packages', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.services = {};

endpoint.beta.ltl.carriers.services.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/v1/carriers/:carrier_id/services', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.quotes = {};

endpoint.beta.ltl.quotes.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/quotes/:carrier_id', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.spotQuotes = {};

endpoint.beta.ltl.spotQuotes.post = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/spot-quotes/:carrier_id', [carrierId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.pickups = {};

endpoint.beta.ltl.pickups.post = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/pickups/:carrier_id', [carrierId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.quotes.pickup = {};

endpoint.beta.ltl.quotes.pickup.post = function(quoteId, httpOptions) {
	if (!quoteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [quoteId].');
		return;
	}
	var url = parse('/v-beta/ltl/quotes/:quote_id/pickup', [quoteId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.pickups.billOfLading = {};

endpoint.beta.ltl.pickups.billOfLading.createFromPickup = function(pickupId, httpOptions) {
	if (!pickupId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pickupId].');
		return;
	}
	var url = parse('/v-beta/ltl/pickups/:pickup_id/bill_of_lading', [pickupId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.pickups.billOfLading.createFromQuote = function(quoteId, httpOptions) {
	if (!quoteId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [quoteId].');
		return;
	}
	var url = parse('/v-beta/ltl/pickups/:quote_id/bill_of_lading', [quoteId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.tracking = {};

endpoint.beta.ltl.tracking.get = function(httpOptions) {
	var url = parse('/v-beta/ltl/tracking');
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.ltl.carriers.get = function(carrierId, httpOptions) {
	if (!carrierId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierId].');
		return;
	}
	var url = parse('/v-beta/ltl/carriers/:carrier_id', [carrierId]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.beta.labels = {};

endpoint.beta.labels.salesOrder = {};

endpoint.beta.labels.salesOrder.post = function(salesOrderId, httpOptions) {
	if (!salesOrderId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [salesOrderId].');
		return;
	}
	var url = parse('/v-beta/labels/sales_order/:sales_order_id', [salesOrderId]);
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.trackingPage = {};

endpoint.beta.trackingPage.post = function(httpOptions) {
	var url = parse('/v-beta/tracking_page');
	sys.logs.debug('[ShipEngine] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.beta.ltl.carriers.credentialRequirements = {};

endpoint.beta.ltl.carriers.credentialRequirements.get = function(carrierCode, httpOptions) {
	if (!carrierCode) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [carrierCode].');
		return;
	}
	var url = parse('/v-beta/ltl/v1/carriers/:carrier_code/credential_requirements', [carrierCode]);
	sys.logs.debug('[ShipEngine] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

