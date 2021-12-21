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
    "focusKey": null,
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "a607e564-8513-4581-80a5-11153d20cd9b",
        "parentKey": null,
        "subKeys": [
          "a3a6d196-3f5f-4753-8585-3d4045f36ff7"
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
        "key": "a3a6d196-3f5f-4753-8585-3d4045f36ff7",
        "parentKey": "a607e564-8513-4581-80a5-11153d20cd9b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Types"
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
    "formatVersion": null
  });
}
