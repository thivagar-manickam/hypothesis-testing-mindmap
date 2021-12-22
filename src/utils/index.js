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
    "focusKey": "7a595fd7-0c49-45a0-b631-165395cdf614",
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "3ca143d4-b91e-4d61-9ebb-6cf0f967bf6f",
        "parentKey": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Assumptions"
          },
          {
            "type": "DESC",
            "data": "Since **2 Sample t\\-test** is a parametric test, it will have to satisfy the Normality and Variance assumptions in\n order to perform the test.\n\n##  Normality Assumption:\n\n The normality assumption states that the numerical feature involved in the hypothesis is normally distributed.\n To test this assumption we can use the Shapiro test method from the scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.shapiro(group1_data)[1]\nif p > 0.05:\n    print(p, \"Data can be normally distributed\")\nelse:\n    print(p, \"Data is not normally distributed\")\n\n```\n\n##  Variance Assumption:\n\n  The Variance assumption states that the varaince amoung the different groups involved in the \n  hypothesis is same.\n  To test this assumption we can use the Levene test method from the Scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.levene(group1_data, group2_data, ..., groupN_data)[1]\nif p > 0.05:\n    print(p_value, \"Variance can be same\")\nelse:\n    print(p_value, \"Variance cannot be same\")\n\n```\n"
          }
        ]
      },
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
          },
          {
            "type": "DESC",
            "data": "##  1 Sample t\\-test:\n\n The 1 Sample t\\-test is perfomed when we want to verify any claim made by the company / organisations.\n  \n Whenever only a single numerical feature is involved in the hypothesis we will go with 1 Sample t\\-test.\n\n```none\nExample:\n\n1. A company claims that their medicine cures headached is less than 12 minutes.\n2. A food delivery company claims that all their delivery is done withing 30 minutes\n   of ordering\n3. A battery manufacturer company claims that the average life time for their \n   batteries are 40 hours.\n\n```\n\n In all the above cases we will be using the **1 Sample t\\-test to statistically validated** if the claims made by the\n company / organisations is valid or not"
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
          },
          {
            "type": "DESC",
            "data": "Test of Proportions is used whenever there is a **categorical feature** and **no numerical feature** involved in\n the hypothesis creation \n\n The Test of Proportions is used when we want to verify if the mean of the groups in a feature is same or different\n\n There are 4 tests associated with Test of Proportions:\n1. One Sample proportion test\n1. Two Sample proportion test\n1. Chi\\-Square test\n1. Chi\\-Square Contigency test\n\n"
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
        "key": "9ba129e7-4aa1-4cdc-9471-4bd331d94b84",
        "parentKey": "61d82248-611b-4f06-824c-6589d605dd9e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Assumptions"
          },
          {
            "type": "DESC",
            "data": "Since ANOVA is a parametric test, it will have to satisfy the Normality and Variance assumptions in\n order to perform the test.\n\n##  Normality Assumption:\n\n The normality assumption states that the numerical feature involved in the hypothesis is normally distributed.\n To test this assumption we can use the Shapiro test method from the scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.shapiro(numerical_data)[1]\nif p > 0.05:\n    print(p, \"Data can be normally distributed\")\nelse:\n    print(p, \"Data is not normally distributed\")\n\n```\n\n##  Variance Assumption:\n\n  The Variance assumption states that the varaince amoung the different groups involved in the \n  hypothesis is same.\n  To test this assumption we can use the Levene test method from the Scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.levene(group1_data, group2_data, ..., groupN_data)[1]\nif p > 0.05:\n    print(p_value, \"Variance can be same\")\nelse:\n    print(p_value, \"Variance cannot be same\")\n\n```\n"
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
        "key": "7a595fd7-0c49-45a0-b631-165395cdf614",
        "parentKey": "0c3353c8-4e57-4425-968f-5a5b78c847fe",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Post HOC Analysis"
          },
          {
            "type": "DESC",
            "data": "The ANOVA test function, will let us know if there is a difference in the mean between the groups,\n but will not say which groups differ from each other.\n In order to know which are the groups that differ from others we will have to perform the\n Post HOC analysis on the data to know about it.\n\n##  Post HOC Analysis for ANOVA:\n\n  We can use the MultiComparison function from the Statsmodels.stats module to perform the Post HOC\n Analysis\n The MulitComparison function takes two main params:\n data = we will have to pass the numerical feature ndarray used in the hypothesis\n group = we will have to pass the categorical feature ndarray used in the hypothesis\n\n```python\nfrom statsmodels.stats.multicomp import MultiComparison\n\nmc = MultiComparison(data=num_feature, groups=cat_feature, group_order=None)\n\nprint(mc.tukeyhsd(0.05))\n\n```\n Tukey's range test to compares means of all pairs of groups and list out the groups which are\n different from each other.\n tukeyhsd function will return a TukeyHSDResults instance which includes meandiff, p\\-adj, lower,\n upper and reject columns.\n\n True in the reject column mean that we can reject the null hypothesis, which in turn refers to \n that there is a difference in the mean value between the two groups.\n \n False is the reject column mean that we fail to reject the null hypothesis and the two groups tend\n to have the same mean value"
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
          "3ca143d4-b91e-4d61-9ebb-6cf0f967bf6f",
          "1459bf1d-2a6e-44ff-a486-950f36a902fd",
          "14213589-8fe9-4e25-b7ff-2305e9a93318"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "2 - Sample t-test"
          },
          {
            "type": "DESC",
            "data": "## 2 Sample t\\-test\n\n  **2 Sample t\\-test** is performed when there is one numerical feature and one categorical feature is involved in the hypothesis provided the categorical feature has only two levels/groups.\n\n  2 Sample t\\-test is a parametric test and will have to satisfy the Normality and Variance assumptions.\n\n> Examples:\n> \n> \n>    1. Verify that there is no discrimination in wages \\(numerical feature\\) provided by a company based on gender \\(categorical\\)\n>    1. Validate if the gender \\(categorical\\) has any effect in the weight \\(numerical\\) loss program\n\n  In the above examples, the categorical feature gender has only two levels namely Male and Female. \n  When we want to  see if there is a pattern in the numerical feature based on the categorical feature\n  we will use 2 Sample t\\-test\n\n> 2 Sample t\\-test, performs the hypothesis by checking if the numerical feature mean \n> of the two different levels are same or different.\n"
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
        "key": "dbf17b96-10b9-4254-9641-2a186646c719",
        "parentKey": "61d82248-611b-4f06-824c-6589d605dd9e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Non Parametric Test"
          },
          {
            "type": "DESC",
            "data": "## Non \\- Parametric Test for ANOVA:\n\n We cannot perform the ANOVA test, when the data does not satisfy the Normality and the Equal Variance amoung the \n group test. In this case we will be going with a Non \\- Parametric test.\n \n A Kruskal\\-Wallis test is used to determine whether or not there is a statistically significant difference between \n the medians of three or more independent groups. This test is the nonparametric equivalent of the one\\-way ANOVA \n and is typically used when the normality assumption is violated.\n\nThe Kruskal\\-Wallis test does not assume normality in the data and is much less sensitive to outliers than the one\\-way ANOVA.\n** **\n** **The Kruskal test compares the Median value amoung the groups, instead of considering their\n mean value. \n> Hypothesis Statements:\n> H0:= The median value accross the different groups are same\n> Ha:= Atleast one of the median value is different from other groups\n\n## Kruskal \\- Wallis Test Assumptions:\n\n Before we can conduct a Kruskal \\- Wallis test, we need to make sure the \n following assumptions are met:\n> \n>    1. Ordinal or Continuos Response Variable \\- The numerical feature involved in the hypothesis should \n>     be a Ordinal or Continuous variable. Eg: The time taken to deliver package in different region. Here the time\n>     taken is a continuous variable.\n> 2\\. Independence \\- The observations in each group need to be independent of each other.\n> 3\\. Distribution have similar shapes \\- The distibution in each group need to have the same shape\n\n## Kruskal \\- Wallis Test code:\n\n```python\nfrom scipy import stats\n\n# We will need to pass all the individual group dataframes\np_value = stats.kruskal(sample1, sample2,...,sampleN, nan_policy='propogate')[1]\nif p_value > 0.05\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\nWe will have to perform Post HOC analysis to figure out which groups differ from each other."
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
        "subKeys": [
          "9ba129e7-4aa1-4cdc-9471-4bd331d94b84",
          "0c3353c8-4e57-4425-968f-5a5b78c847fe",
          "dbf17b96-10b9-4254-9641-2a186646c719"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Analysis of Variance (ANOVA)"
          },
          {
            "type": "DESC",
            "data": "##  Analysis of Variance \\(ANOVA\\):\n\n ANOVA statistical test is performed when there is one numerical feature and one categorical feature\n involved in the hypothesis, where there are more than 2 levels in the categorical variable.\n\n Similar to 2 Sample t\\-test, ANOVA is also a parametric test and will have to satisfy the\n Normality and Variance assumptions as well.\n ANOVA statistical test is performed to test if the mean accross all the levels are same or not.\n\n> Example:\n> \n>    1. Verify if the the time take\\(numerical\\) to deliver the package accross different region is same, where the regions are\n>     A, B, C \\(categorical\\)\n\n\n###  ANOVA Hypothesis statments:\n\n Below is the Alternative and Null hypothesis for the above example:\n> Ha:= The time taken to deliver the package across all the three regions are not same\n> H0:= The time taken to deliver the package across all the three regions are same\n"
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
          },
          {
            "type": "DESC",
            "data": "Test of Means methods are used whenever a numerical category is involved to make the null hypothesis.\n\n The methods available in the Test of Means performs the testing based on 2 scenarios:\n1. We want to see if the single feature numerical mean differs from the population mean\n1. We want to see if the mean value of two or more groups in a feature are same or different\n\n\n There are 3 methods associated with Test of Means:\n1. One sample t\\-test\n1. Two sample t\\-test\n1. Analysis of Variance \\(ANOVA\\)\n\n"
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
      },
      {
        "key": "0c3353c8-4e57-4425-968f-5a5b78c847fe",
        "parentKey": "61d82248-611b-4f06-824c-6589d605dd9e",
        "subKeys": [
          "7a595fd7-0c49-45a0-b631-165395cdf614"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "ANOVA Testing methods"
          },
          {
            "type": "DESC",
            "data": "There are two possible ways in which we can perform the ANOVA testing.\n\n## Statistical Approach:\n\n We can use the f\\_oneway function from the Scipy stats module to perform the ANOVA testing.\n\n The one\\-way ANOVA tests the null hypothesis that two or more groups have\n the same population mean.  The test is applied to samples from two or \n more groups, possibly with differing sizes.\n\n The ideal scenario to use the f\\_oneway is when we have only a single categorical feature\n used in the Hypothesis\n```python\nfrom scipy import stats\n\np_value = stats.f_oneway(sample1, sample2, ... ,sampleN, axis = 0)\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\n## Regression model Approach:\n\n The second way is that we can use the \"ols\" and \"anova\\_lm\" models for ANOVA testing.\n This approach can be used when there are more number of groups to be compared or\n when we want to compare the mean accross two categorical features.\n```python\nfrom statsmodels.formula.api import ols\nfrom statsmodels.stats.anova import anova_lm\n\n# Here Minutes is the\nan = ols('Minutes~Region', data=df).fit()\nanova_lm(an)\n\n```\n The anova\\_lm will give a table output with the F \\- Statistics and P\\_value for the data. Based on the\n P\\_value we can decide either we can reject the null hypothesis or we fail to reject the null hypothesis"
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
