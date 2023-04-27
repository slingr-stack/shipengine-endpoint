step = {};
step.trackingShipEngine = function (inputs) {
	var inputsLogic = {
		params:{
			carrier_code:inputs.carrierCode || "",
			tracking_number:inputs.trackingNumber || ""
		} || []
	};

	var options = {
		path: "/tracking",
		params: inputsLogic.params,
	}

	return JSON.stringify(options);

	// return endpoint._get(options);
}
