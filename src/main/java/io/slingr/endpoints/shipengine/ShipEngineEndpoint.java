package io.slingr.endpoints.shipengine;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>ShipEngine endpoint
 * <p>
 * <p>Created by dgaviola on 10/16/19.
 * <p>Modified by nmarquez on 02/18/22
 */
@SlingrEndpoint(name = "shipengine", functionPrefix = "_")
public class ShipEngineEndpoint extends HttpEndpoint {

    @ApplicationLogger
    private AppLogs appLogger;

    private final String API_URL = "https://api.shipengine.com";

    private static final Logger logger = LoggerFactory.getLogger(ShipEngineEndpoint.class);

    @EndpointProperty
    private String apiKey;

    @EndpointProperty
    private String webhooksToken;

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        httpService().setupDefaultHeader("API-Key",this.apiKey);
        httpService().setupDefaultHeader("Content-Type", "application/json");
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            return defaultGetRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction (name = "_put")
    public Json put(FunctionRequest request) {
        try {
            return defaultPutRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            return defaultPostRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        Json webhookQueryParams = request.getParameters();
        String webhookToken = webhookQueryParams.contains("token") ? webhookQueryParams.string("token") : "";

        Json webhookBody = request.getJsonBody();
        if (!webhookToken.isEmpty() && webhookToken.equals(this.webhooksToken)){
            events().send(HttpService.WEBHOOK_EVENT, webhookBody);
        } else {
            logger.info("Webhook discarded because token was not valid",webhookBody);
            appLogger.warn("[shipengine] Webhook discarded because token was not valid",webhookBody);
        }

        return HttpService.defaultWebhookResponse();
    }

}
