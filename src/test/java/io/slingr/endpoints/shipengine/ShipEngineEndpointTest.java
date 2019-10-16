package io.slingr.endpoints.shipengine;

import io.slingr.endpoints.shipengine.ShipEngineEndpoint;
import io.slingr.endpoints.utils.tests.EndpointTests;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

@Ignore("For dev purposes only")
public class ShipEngineEndpointTest {

    private static EndpointTests test;
    private static ShipEngineEndpoint endpoint;

    @BeforeClass
    public static void init() throws Exception {
        test = EndpointTests.start(new io.slingr.endpoints.shipengine.Runner(), "test.properties");
        endpoint = (ShipEngineEndpoint) test.getEndpoint();
    }


    @Test
    public void testRequest() {

    }

}
