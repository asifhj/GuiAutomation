//document.evaluate("/html/body/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).click()

var result = document.evaluate("/html/body/button",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);

var element = result.singleNodeValue;
element.dispatchEvent(evt);