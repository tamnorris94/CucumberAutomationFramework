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
  "duration": 3564405800,
  "status": "passed"
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.openBrowser()"
});
formatter.result({
  "duration": 1733041400,
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
        "128"
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
  "duration": 2284977100,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 4179307100,
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
  "duration": 3137996600,
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
  "duration": 2277673200,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3977905700,
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
  "duration": 3115490100,
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
  "name": "The result of 128 is returned",
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
  "duration": 2268506000,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2906389000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 311979200,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat cucumberAutomationFramework.stepDefs.CalculateFeature.result_is_returned(CalculateFeature.java:73)\r\n\tat ✽.Then The result of 128 is returned(Calculate.feature:15)\r\n",
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
  "duration": 2249372100,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3010702300,
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
  "duration": 3288650300,
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
  "duration": 2286790700,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2870695100,
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
  "duration": 3313745100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Close the browser",
  "description": "",
  "id": "calculator;close-the-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@CloseBrowser"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.closeBrowser()"
});
formatter.result({
  "duration": 1464233900,
  "status": "passed"
});
});