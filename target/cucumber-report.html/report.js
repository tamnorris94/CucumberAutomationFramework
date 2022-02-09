$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculate.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "As a user\r\nI want to use google to evaluate mathematical expressions\r\nSo that I don\u0027t need to use a calculator or do them in my head",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Start browser session",
  "description": "",
  "id": "calculator;start-browser-session",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@StartBrowser"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I initialize driver",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "open browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.initializeDriver()"
});
formatter.result({
  "duration": 3998954600,
  "status": "passed"
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.openBrowser()"
});
formatter.result({
  "duration": 2378766900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression \u003cexpression\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of \u003cexpectedResult\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "calculator;enter-a-maths-expression;",
  "rows": [
    {
      "cells": [
        "expression",
        "expectedResult"
      ],
      "line": 17,
      "id": "calculator;enter-a-maths-expression;;1"
    },
    {
      "cells": [
        "4+4",
        "8"
      ],
      "line": 18,
      "id": "calculator;enter-a-maths-expression;;2"
    },
    {
      "cells": [
        "5/0",
        "undefined"
      ],
      "line": 19,
      "id": "calculator;enter-a-maths-expression;;3"
    },
    {
      "cells": [
        "5^3",
        "129"
      ],
      "line": 20,
      "id": "calculator;enter-a-maths-expression;;4"
    },
    {
      "cells": [
        "4!",
        "24"
      ],
      "line": 21,
      "id": "calculator;enter-a-maths-expression;;5"
    },
    {
      "cells": [
        "sqrt(-9)",
        "3 i"
      ],
      "line": 22,
      "id": "calculator;enter-a-maths-expression;;6"
    },
    {
      "cells": [
        "ln e",
        "1"
      ],
      "line": 23,
      "id": "calculator;enter-a-maths-expression;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression 4+4",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of 8 is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4+4",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2207376900,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 10670872200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 3126179200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression 5/0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of undefined is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5/0",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2235534500,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 4768861200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "undefined",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 3104148000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression 5^3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of 129 is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5^3",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2229594000,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2993045200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 278011200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c12[9]\u003e but was:\u003c12[5]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cucumberAutomationFramework.stepDefs.CalculateFeature.result_is_returned(CalculateFeature.java:61)\r\n\tat ✽.Then The result of 129 is returned(Calculate.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression 4!",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of 24 is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4!",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2194006300,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3034018900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 3244333000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression sqrt(-9)",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of 3 i is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sqrt(-9)",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2224092300,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3751271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 i",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 3085398800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter a maths expression",
  "description": "",
  "id": "calculator;enter-a-maths-expression;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MyTest1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters the maths expression ln e",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The result of 1 is returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ln e",
      "offset": 33
    }
  ],
  "location": "CalculateFeature.user_enters_the_maths_expression(String)"
});
formatter.result({
  "duration": 2201060100,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2871026100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 3326392000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Close the browser",
  "description": "",
  "id": "calculator;close-the-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@CloseBrowser"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.closeBrowser()"
});
formatter.result({
  "duration": 1612148800,
  "status": "passed"
});
});