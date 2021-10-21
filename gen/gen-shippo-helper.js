var fs = require('fs');

var FILE_NAME = "shipengine-helpers.js";
var CODE = '';
var NAMESPACE = "endpoint.";

var urlsData = {};

var API_DESCRIPTOR = [
    {method: 'PUT', URL: 'addresses/recognize'},
    {method: 'POST', URL: 'addresses/validate'},
    {method: 'POST', URL: 'shipments/'},
    {method: 'PUT', URL: 'shipments/:shipmentId'},
    {method: 'GET', URL: 'shipments/'},
    {method: 'GET', URL: 'shipments/:shipmentId'},
    {method: 'PUT', URL: 'packages/:packageId'},
    {method: 'GET', URL: 'packages/:packageId'},
    {method: 'GET', URL: 'manifests/:manifestId'},
    {method: 'GET', URL: 'manifests/'},
    {method: 'POST', URL: 'shipments/:shipmentId/tags/:tagName'},
    {method: 'POST', URL: 'tags/:tagName'},
    {method: 'PUT', URL: 'tags/:tagName/:newTagName'},
    {method: 'GET', URL: 'tags/'},
    {method: 'DELETE', URL: 'shipments/:shipmentId/tags/:tagName'},
    {method: 'DELETE', URL: 'tags/:tagName'},
    {method: 'POST', URL: 'warehouses/'},
    {method: 'PUT', URL: 'warehouses/:warehouseId'},
    {method: 'GET', URL: 'warehouses/:warehouseId'},
    {method: 'GET', URL: 'warehouses/'},
    {method: 'DELETE', URL: 'warehouses/:warehouseId'},
    {method: 'GET', URL: 'labels/'},
    {method: 'POST', URL: 'labels/'},
    {method: 'POST', URL: 'labels/rates/:rateId'},
    {method: 'POST', URL: 'labels/shipment/:shipmentId'},
    {method: 'POST', URL: 'labels/:label_id/return'},
    {method: 'PUT', URL: 'labels/:labelId/void'},
    {method: 'POST', URL: 'tracking/start', argsToPath: true},
    {method: 'POST', URL: 'tracking/stop', argsToPath: true},
    {method: 'POST', URL: 'batches/'},
    {method: 'GET', URL: 'batches/:batchId'},
    {method: 'GET', URL: 'batches/external_batch_id/:externalBatchId'},
    {method: 'POST', URL: 'batches/:batchId/add'},
    {method: 'POST', URL: 'batches/:batchId/remove'},
    {method: 'POST', URL: 'batches/:batchId/process/labels'},
    {method: 'GET', URL: 'batches/:batchId/errors'},
    {method: 'GET', URL: 'batches/'},
    {method: 'DELETE', URL: 'batches/:batchId'},
    {method: 'POST', URL: 'rates/'},
    {method: 'POST', URL: 'rates/estimate'},
    {method: 'POST', URL: 'rates/bulk'},
    {method: 'GET', URL: 'shipments/:shipmentId/rates'},
    {method: 'POST', URL: 'connections/carriers/fedex'},
    {method: 'PUT', URL: 'connections/carriers/fedex/:fedexId/settings'},
    {method: 'GET', URL: 'connections/carriers/fedex/:fedexId/settings'},
    {method: 'DELETE', URL: 'connections/carriers/fedex/:fedexId'},
    {method: 'POST', URL: 'connections/carriers/ups'},
    {method: 'PUT', URL: 'connections/carriers/ups/:upsId/settings'},
    {method: 'GET', URL: 'connections/carriers/ups/:upsId/settings'},
    {method: 'DELETE', URL: 'connections/carriers/ups/:upsId'},
    {method: 'POST', URL: 'connections/carriers/stamps_com'},
    {method: 'DELETE', URL: 'connections/carriers/stamps_com/:stampsId'},
    {method: 'POST', URL: 'connections/carriers/endicia'},
    {method: 'DELETE', URL: 'connections/carriers/endicia/:endiciaId'},
    {method: 'GET', URL: 'carriers/'},
    {method: 'GET', URL: 'carriers/:carrierId/services'},
    {method: 'GET', URL: 'carriers/:carrierId/options'},
    {method: 'GET', URL: 'carriers/:carrierId/packages'},
    {method: 'GET', URL: 'carriers/:carrierId'},
    {method: 'DELETE', URL: 'connections/carriers/ups/:upsId'},
    {method: 'DELETE', URL: 'connections/carriers/ups/:upsId'}
];

var convertUrls = function (url) {

    var convertedUrl = url;

    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');

    return convertedUrl;
};

var camelCase = function (input) {
    return input.toLowerCase().replace(/_(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
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

var makeEndpointsHelpers = function () {
    var argsToPathUrls = [];

        for (var i in API_DESCRIPTOR) {

            var objDes = API_DESCRIPTOR[i];

            var numVars = 0;
            var fnNames = [];
            var newPath = '';
            var url = convertUrls(objDes.URL);

            var tmpUrl = url.split("\?")[0];
            var urlParts = tmpUrl.split('/');
            for (var p in urlParts) {
                if (urlParts[p] != "" && urlParts[p] != "v1") {
                    if (urlParts[p].substr(0, 1) == ':') {
                        numVars++;
                        newPath += '/%s'
                    } else {
                        fnNames.push(urlParts[p]);
                        newPath += '/' + urlParts[p];
                    }
                }
            }

            var functionName = camelCase(fnNames.join('.'));
            functionName += "." + objDes.method.toLowerCase();
            if (!urlsData[functionName]) {
                urlsData[functionName] = {};
            }

            urlsData[functionName][numVars] = url;
            if (objDes.argsToPath) {
                argsToPathUrls.push(functionName);
            }
        }

    var tmpObj = {};
    var tmpCode = '';
    var path = '';

    for (var i in urlsData) {

        path = '';
        var urlPart = i.split("\.");

        for (var j = 0; j < urlPart.length; j++) {

            path += (j == 0) ? urlPart[0] : '.' + urlPart[j];

            if (!tmpObj[path]) {
                tmpObj[path] = {};
                if (j < urlPart.length - 1) {
                    tmpCode += NAMESPACE + path + ' = {};\n';
                } else {

                    var method = urlPart[j];
                    var caller = method;
                    var transfromArguments = 'true';
                    if (method === 'get' || method === 'delete' || argsToPathUrls.indexOf(i) != -1) {
                        caller += '(url)';
                        transfromArguments = 'true';
                    } else {
                        caller += '(url, params.argumentsObj)'
                        transfromArguments = 'false';
                    }

                    var fn = `function() {
\tvar obj = urlsData['${i}'];
\tvar params = analyzeParams(arguments);
\tvar url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, ${transfromArguments});
\treturn endpoint.${caller};
};`;

                    tmpCode += NAMESPACE + path + ' = ' + fn + '\n\n';
                }
            }
        }
    }

    CODE += tmpCode;

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//    This file is generated with shipengine/gen/gen-shipengine-helpers.js//\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    var HELPERS = 'var analyzeParams = ' + analyzeParams.toString() + ';\n\n';
    HELPERS += 'var getUrl = ' + getUrl.toString() + ';\n\n';
    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\n' + HELPERS + '' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
