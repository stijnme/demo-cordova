/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["net/expertum/democordova/demoCordova/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
