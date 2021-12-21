import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  return Model.create({
    "rootTopicKey": "a607e564-8513-4581-80a5-11153d20cd9b",
    "editorRootTopicKey": "a607e564-8513-4581-80a5-11153d20cd9b",
    "focusKey": "064b8bea-d69a-4785-998b-1a390e3ba873",
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "c8b409a4-cbf5-4671-96f8-eb4fc3f773d9",
        "parentKey": "81626f6c-5f13-4d7b-8077-cda871732628",
        "subKeys": [
          "515374f3-363a-460f-b981-5d21a419b20a",
          "f19652fe-f68f-4284-bf47-d675e7fa8777"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "1 - Sample t-test"
          }
        ]
      },
      {
        "key": "064b8bea-d69a-4785-998b-1a390e3ba873",
        "parentKey": "a607e564-8513-4581-80a5-11153d20cd9b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "4 Steps of Hypothesis Testing "
          },
          {
            "type": "DESC",
            "data": "# 4 Steps of Hypothesis Testing:\n\n All hypotheses are tested using a four \\- step process : \n1. The first step is to define both the hypotheses so that only one hypotheses can be right\n1. The next step is to formulate an analysis plan, which outlines how the data will be evaluated\n1. The third step is to carry out the plan and physically analyze the sample data\n1. The fourth and final step is to analyze the results and either reject the null hypothesis, or state that the null hypothesis is plausible, given the data\n\n"
          }
        ]
      },
      {
        "key": "bc7cf847-d335-49bd-9c86-9b16a148ddb4",
        "parentKey": "a3a6d196-3f5f-4753-8585-3d4045f36ff7",
        "subKeys": [
          "0d803305-a283-47bf-8528-3b8bd13fa210",
          "edd1862c-53fb-4fe8-806c-c62da4d15a55",
          "bad7d35b-b741-482d-9597-16032dabcbcd",
          "50f23764-5ff5-445e-b448-11f8277696c7"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Test of Proportions"
          }
        ]
      },
      {
        "key": "515374f3-363a-460f-b981-5d21a419b20a",
        "parentKey": "c8b409a4-cbf5-4671-96f8-eb4fc3f773d9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "1 tail test"
          }
        ]
      },
      {
        "key": "eb2cbc73-61df-498d-b5a0-fc22981eafa7",
        "parentKey": "a607e564-8513-4581-80a5-11153d20cd9b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Definition"
          },
          {
            "type": "DESC",
            "data": "## Definition:\n\n**Hypothesis testing** is an act in statistics whereby an analyst tests an assumption regarding a population parameter. The methodology employed by the analyst depends on the nature of the data used and the reason for the analysis.\n\nHypothesis testing is used to assess the plausibility of a hypothesis by using sample data. Such data may come from a larger population, or from a data\\-generating process. The word \"population\" will be used for both of these cases in the following descriptions."
          }
        ]
      },
      {
        "key": "50f23764-5ff5-445e-b448-11f8277696c7",
        "parentKey": "bc7cf847-d335-49bd-9c86-9b16a148ddb4",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Chi-Square Contigency"
          }
        ]
      },
      {
        "key": "a3a6d196-3f5f-4753-8585-3d4045f36ff7",
        "parentKey": "a607e564-8513-4581-80a5-11153d20cd9b",
        "subKeys": [
          "81626f6c-5f13-4d7b-8077-cda871732628",
          "bc7cf847-d335-49bd-9c86-9b16a148ddb4"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Testing types"
          }
        ]
      },
      {
        "key": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "parentKey": "81626f6c-5f13-4d7b-8077-cda871732628",
        "subKeys": [
          "1459bf1d-2a6e-44ff-a486-950f36a902fd",
          "14213589-8fe9-4e25-b7ff-2305e9a93318"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "2 - Sample t-test"
          }
        ]
      },
      {
        "key": "edd1862c-53fb-4fe8-806c-c62da4d15a55",
        "parentKey": "bc7cf847-d335-49bd-9c86-9b16a148ddb4",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "2 Sample Proportion test"
          }
        ]
      },
      {
        "key": "0d803305-a283-47bf-8528-3b8bd13fa210",
        "parentKey": "bc7cf847-d335-49bd-9c86-9b16a148ddb4",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "1 Sample Proportion test"
          }
        ]
      },
      {
        "key": "bad7d35b-b741-482d-9597-16032dabcbcd",
        "parentKey": "bc7cf847-d335-49bd-9c86-9b16a148ddb4",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Chi-Square test"
          }
        ]
      },
      {
        "key": "f19652fe-f68f-4284-bf47-d675e7fa8777",
        "parentKey": "c8b409a4-cbf5-4671-96f8-eb4fc3f773d9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "2 tail test"
          }
        ]
      },
      {
        "key": "a607e564-8513-4581-80a5-11153d20cd9b",
        "parentKey": null,
        "subKeys": [
          "a3a6d196-3f5f-4753-8585-3d4045f36ff7",
          "eb2cbc73-61df-498d-b5a0-fc22981eafa7",
          "333a9d61-c218-471d-8e88-250ea77c9982",
          "064b8bea-d69a-4785-998b-1a390e3ba873"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Hypothesis Testing"
          }
        ]
      },
      {
        "key": "61d82248-611b-4f06-824c-6589d605dd9e",
        "parentKey": "81626f6c-5f13-4d7b-8077-cda871732628",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Analysis of Variance (ANOVA)"
          }
        ]
      },
      {
        "key": "81626f6c-5f13-4d7b-8077-cda871732628",
        "parentKey": "a3a6d196-3f5f-4753-8585-3d4045f36ff7",
        "subKeys": [
          "c8b409a4-cbf5-4671-96f8-eb4fc3f773d9",
          "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
          "61d82248-611b-4f06-824c-6589d605dd9e"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Test of Mean"
          }
        ]
      },
      {
        "key": "14213589-8fe9-4e25-b7ff-2305e9a93318",
        "parentKey": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Dependent t-test"
          }
        ]
      },
      {
        "key": "333a9d61-c218-471d-8e88-250ea77c9982",
        "parentKey": "a607e564-8513-4581-80a5-11153d20cd9b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Type of Hypothesis"
          },
          {
            "type": "DESC",
            "data": "# Type of Hypothesis:\n\n\n## Alternative Hypothesis:\n\n An alternative hypothesis usually refers to the claim made by the organization. \n The analysts generally creates their null hypothesis based on the alternative hypothesis and try to see if the   claim is true or false.\n\n## Null Hypothesis:\n\n A null hypothesis is a statement formulated by the analysts in order to verify if there exists a relationship between the variables in the given data.\n\n The null hypothesis statement is usually the opposite of the **Alternative hypothesis. **The main purpose of  the research is to either reject or accept \\(fail to reject\\) the Null hypothesis.\n\n```none\n- Reject the Null hypothesis: This refers to the scenario where we \nwill accept the Alternative hypothesis ie, there exist a \nrelationship between the variables in the data or the claim made \nis true\n\n- Fail to reject the Null hypothesis: This refers to the scenario \nwhere we state that there does not exist a relationship between \nthe variables in the data or the claim made is false\n\n```\n\n> Example:\n> \n> Ha:= Drinking tea or coffee before classes increases student's performances\n> H0:= There is no significant difference in student's performances if they drink tea of coffee before classes\n"
          }
        ]
      },
      {
        "key": "1459bf1d-2a6e-44ff-a486-950f36a902fd",
        "parentKey": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Independent t-test"
          }
        ]
      }
    ],
    "config": {
      "readOnly": false,
      "allowUndo": true,
      "layoutDir": 2,
      "theme": {
        "name": "default",
        "randomColor": true,
        "background": "rgb(57,60,65)",
        "highlightColor": "#50C9CE",
        "marginH": 60,
        "marginV": 20,
        "contentStyle": {
          "lineHeight": "1.5"
        },
        "linkStyle": {
          "lineRadius": 5,
          "lineType": "curve",
          "lineWidth": "3px"
        },
        "rootTopic": {
          "contentStyle": {
            "fontSize": "34px",
            "borderRadius": "35px",
            "padding": "16px 18px 16px 18px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px",
            "lineColor": "rgb(113, 203, 45)"
          }
        },
        "primaryTopic": {
          "contentStyle": {
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderRadius": "20px",
            "fontSize": "17px",
            "padding": "10px 15px 10px 15px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px",
            "lineColor": "rgb(113, 203, 45)"
          }
        },
        "normalTopic": {
          "contentStyle": {
            "border": "1px solid #e8eaec",
            "borderRadius": "20px",
            "fontSize": "17px",
            "padding": "4px 10px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px",
            "lineColor": "white"
          }
        }
      }
    },
    "formatVersion": "0.0"
  });
}
