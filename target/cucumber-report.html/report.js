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
  "duration": 3615507500,
  "status": "passed"
});
formatter.match({
  "location": "BrowserInitTearDownStepDefinitions.openBrowser()"
});
formatter.result({
  "duration": 1653015300,
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
        "9"
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
  "name": "The result of 9 is returned",
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
  "duration": 2253366200,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 4248122400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 14
    }
  ],
  "location": "CalculateFeature.result_is_returned(String)"
});
formatter.result({
  "duration": 128241400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[9]\u003e but was:\u003c[8]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cucumberAutomationFramework.stepDefs.CalculateFeature.result_is_returned(CalculateFeature.java:61)\r\n\tat ✽.Then The result of 9 is returned(Calculate.feature:15)\r\n",
  "status": "failed"
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
  "duration": 2189982600,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 4095993400,
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
  "duration": 3105588600,
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
  "duration": 2271772800,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3518876800,
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
  "duration": 91595000,
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
  "duration": 2265443900,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 3250414000,
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
  "duration": 3129023600,
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
  "duration": 2258617100,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2930617000,
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
  "duration": 3251226100,
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
  "duration": 2283686800,
  "status": "passed"
});
formatter.match({
  "location": "CalculateFeature.the_user_clicks_the_Search_button()"
});
formatter.result({
  "duration": 2979001900,
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
  "duration": 3283055300,
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
  "duration": 1542367000,
  "status": "passed"
});
});