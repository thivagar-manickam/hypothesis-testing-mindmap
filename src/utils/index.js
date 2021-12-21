import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  return Model.create({
    "rootTopicKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
    "editorRootTopicKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
    "focusKey": "ea454125-0bd9-48f2-8cb7-663f71d23280",
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "parentKey": null,
        "subKeys": [
          "b7f00b7f-ee66-4b84-80f3-9f181d251fae"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Python"
          }
        ]
      },
      {
        "key": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "0b62f75a-faac-4a9d-89d5-ed32144afee5",
          "1c216a10-7c3d-44d7-ac8e-ed08629a4ef2"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Data types"
          }
        ]
      },
      {
        "key": "0b62f75a-faac-4a9d-89d5-ed32144afee5",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Text"
          },
          {
            "type": "DESC",
            "data": "Text data type refers to the string representation of data. \n\n A string can be defined using either the **' ' or \" \". **\n\n```python\nname = \"Thivagar\"\n\nname = 'Thivagar'\n\n```\n"
          }
        ]
      },
      {
        "key": "1c216a10-7c3d-44d7-ac8e-ed08629a4ef2",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [
          "6b5d993d-c379-4545-bb0c-fc481e757928",
          "48882375-5cce-4d7e-aa54-1a437a4f5724",
          "ea454125-0bd9-48f2-8cb7-663f71d23280"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Number"
          }
        ]
      },
      {
        "key": "6b5d993d-c379-4545-bb0c-fc481e757928",
        "parentKey": "1c216a10-7c3d-44d7-ac8e-ed08629a4ef2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "integer"
          }
        ]
      },
      {
        "key": "48882375-5cce-4d7e-aa54-1a437a4f5724",
        "parentKey": "1c216a10-7c3d-44d7-ac8e-ed08629a4ef2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "float"
          }
        ]
      },
      {
        "key": "ea454125-0bd9-48f2-8cb7-663f71d23280",
        "parentKey": "1c216a10-7c3d-44d7-ac8e-ed08629a4ef2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "complex"
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
          "lineHeight": "1.5",
          "fontSize": "16px"
        },
        "linkStyle": {
          "lineRadius": 5,
          "lineType": "curve",
          "lineWidth": "3px"
        },
        "rootTopic": {
          "contentStyle": {
            "fontSize": "36px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        },
        "primaryTopic": {
          "contentStyle": {
            "fontSize": "24px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        },
        "normalTopic": {
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        }
      }
    },
    "formatVersion": "0.0"
  });
}
