step.stopTrackingShipEngine = function (inputs) {

	var inputsLogic = {
		params:{
			carrier_code:inputs.carrierCode || "",
			tracking_number:inputs.trackingNumber || ""
		} || []
	};

	var options = {
		path: "/tracking/stop",
		params: inputsLogic.params,
	}

	return endpoint._post(options);
}