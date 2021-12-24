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
    "focusKey": "edd1862c-53fb-4fe8-806c-c62da4d15a55",
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "1ae639a4-76e8-42e2-ac9f-0dc83446a970",
        "parentKey": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "subKeys": [
          "79e51c15-351e-4531-a722-194fab9dfc8b",
          "8fb7e16a-9930-4f62-af35-2190251832a8"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Non Parametric Test"
          },
          {
            "type": "DESC",
            "data": "2 \\- Sample t\\-test are paramteric test. They will have to satisfy the Normality and the Variance\n assumptions, in order for the test to be performed.\n\n If the Normality or the Variance test fails we can use non\\-parametric alternatives to conduct the\n statistical test.\n\n There are two non\\-parametric alternative test for 2\\-Sample t\\-test:\n> MannWhitenyu test \\- The non\\-parametric alternative for Independent 2\\-Sample t\\-test\n> Wilcoxon test \\- The non\\-parametric alternative for dependent 2\\-Sample test\n"
          }
        ]
      },
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
            "data": "Since **2 Sample t\\-test** is a parametric test, it will have to satisfy the Normality and Variance assumptions in\n order to perform the test.\n\n## Normality Assumption:\n\n The normality assumption states that the numerical feature involved in the hypothesis is normally distributed.\n To test this assumption we can use the Shapiro test method from the scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.shapiro(group1_data)[1]\nif p > 0.05:\n    print(p, \"Data can be normally distributed\")\nelse:\n    print(p, \"Data is not normally distributed\")\n\n```\n\n## Variance Assumption:\n\n  The Variance assumption states that the varaince amoung the different groups involved in the \n  hypothesis is same.\n  To test this assumption we can use the Levene test method from the Scipy stats module.\n```python\nfrom scipy import stats\n\n# Here numerical data is a dataFrame of the numerical\n# feature involved in the hypothesis. Replace with \n# your own dataFrame\np_value = stats.levene(group1_data, group2_data, ..., groupN_data)[1]\nif p > 0.05:\n    print(p_value, \"Variance can be same\")\nelse:\n    print(p_value, \"Variance cannot be same\")\n\n```\n"
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
            "data": "Test of Proportions is used whenever there is a **categorical feature** and **no numerical feature** involved in\n the hypothesis creation \n\n The Test of Proportions is used when we want to verify if there exist a equal proportion or not \n within a categorical feature or based on a categorical feature\n\n There are 4 tests associated with Test of Proportions:\n1. One Sample proportion test\n1. Two Sample proportion test\n1. Chi\\-Square test\n1. Chi\\-Square Contigency test\n\n"
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
            "data": " 1 tail test"
          },
          {
            "type": "DESC",
            "data": "##  One Tail 1 \\- Sample t\\-test:\n\n The one tail t\\-test is used whenever the Alternative hypothesis value lies in either side\n of the tail and not on both the sides.\n\n> Example:\n> A drug manufactuering company claims that their drug on an average takes less than 12 minutes\n> to cure headache. Verify that the company's claim is valid\n> Ha:= Average time taken to cure is less than 12 minutes \\(< 12 minutes\\) \\-\\> Alternative hypotheis\n> H0:= Average time taken to cure is greater than or equal to 12 minutes \\(\\>= 12 minutes\\) \\- Null hypothesis\n Here we are checking if the average time taken is greater than 12 and we want to see if the value lies\n on the right had tail alone. \n\n## Python function to perform One tail 1 Sample t\\-test:\n\n Below is the code snippet used to perform One tail 1 Sample t\\-test for the above example. We will be using\n the **ttest\\_1samp **from Scipy stats package.\n```python\nfrom scipy.stats import ttest_1samp\n\np_value = ttest_1samp(a=sample_data, popmean=12, alternative='two-sided')[1]\n\nif (p_value/2) > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\n The ttest\\_1samp by default will give the p\\_value for the two\\-tail test. So when performing one tail t\\-test,\n we either have to divide the p\\_value by 2 before coming to a conclusion or in the latest python version\n we can specify 'greater' or 'less' in the alternative param. In that case we need not divide by 2."
          }
        ]
      },
      {
        "key": "b222b8f4-ecba-46fa-91fc-1223a04160fe",
        "parentKey": "5a04c9b0-6d2b-4c6b-830f-a4a370ea88b9",
        "subKeys": [
          "14213589-8fe9-4e25-b7ff-2305e9a93318",
          "1459bf1d-2a6e-44ff-a486-950f36a902fd"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Parametric Test"
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
        "key": "79e51c15-351e-4531-a722-194fab9dfc8b",
        "parentKey": "1ae639a4-76e8-42e2-ac9f-0dc83446a970",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "MannWhitenyu Test"
          },
          {
            "type": "DESC",
            "data": "When the Independent t\\-test fails to satisfy the assumption, we will use the MannWhitneyu test from\n the Scipy.stats package.\n\n## MannWhitneyu Test Assumptions:\n\n Before we can conduct a MannWhitneyu test, we need to make sure the \n following assumptions are satisfied:\n> \n>    1. Ordinal or Continuos Response Variable \\- The numerical feature involved in the hypothesis should \n>     be a Ordinal or Continuous variable. Eg: The time taken to deliver package in different region. \n>     Here the time taken is a continuous variable.\n> 2\\. Independence \\- The observations in each group need to be independent of each other.\n> 3\\. Distribution have similar shapes \\- The distibution in each group need to have the same shape\n>  Code snippet for MannWhitneyu test:\n\n##  MannWhitneyu Hypothesis:\n\n In most cases, a Mann\\-Whitney U test is performed as a two\\-sided test. \n The null and alternative hypotheses  are written as:\n H0:= The two populations are equal\n Ha:= The two populations are not equal\n\n> Example:\n> A professor teaches batch1 students using a specific method and collects the test scores of the batch.\n> Then he changes the teaching method for batch2 students and collects the test score of the new batch.\n> Now the professor wants to check if the new teaching method was effective.\n> Ha:= Test scores of batch2 is not equal to the test scores of batch1 \\-\\> Alternative hypothesis\n> H0:= Test scores of batch2 is equal to the test scores of batch1 \\-\\> Null hypothesis\n\n **Code snippet for the above example:**\n```python\nfrom scipy.stats import mannwhitneyu\n\np_value = mannwhitneyu(x=sample1data,y=sample2data,alternative=None)\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n"
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
          "b222b8f4-ecba-46fa-91fc-1223a04160fe",
          "1ae639a4-76e8-42e2-ac9f-0dc83446a970"
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
            "data": "## 2 Sample t\\-test\n\n  **2 Sample t\\-test** is performed when there is one numerical feature and one categorical feature is involved in the hypothesis provided the categorical feature has only two levels/groups.\n\n  2 Sample t\\-test is a parametric test and will have to satisfy the Normality and Variance assumptions.\n\n> Examples:\n> \n>    1. Verify that there is no discrimination in wages \\(numerical feature\\) provided by a company based on gender \\(categorical\\)\n>    1. Validate if the gender \\(categorical\\) has any effect in the weight \\(numerical\\) loss program\n\n  In the above examples, the categorical feature gender has only two levels namely Male and Female. \n  When we want to  see if there is a pattern in the numerical feature based on the categorical feature\n  we will use 2 Sample t\\-test\n\n> 2 Sample t\\-test, performs the hypothesis by checking if the numerical feature mean \n> of the two different levels are same or different.\n"
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
          },
          {
            "type": "DESC",
            "data": "##  2 Sample Proportion test:\n\n The 2 Sample Proportion test is used when we want to verify if the proportion of two groups is similar\n to the proportion made in the claim\n \n In the 2 Sample Proportion test there are two categorical feature involved and there are exactly two\n levels within each group.\n> Analysing the proportion of male and female voting for Joe Biden and Trump in the US presidential\n> election\\. Here the analysis is done on the gender and the election participants. Both are\n> categorical data and both have only two levels in both of them\n\n##  Python function to perform 2 Sample Proportion test\n\n Both 1 Sample Proportion test and 2 Sample Proportion test use the same python function with slight \n difference in the way we pass the params:\n> \n>    1. In 1 Sample Proportion test we pass a single integer value for the count and nobs param, where as in the \n>     2 Sample Proportion test we will pass a list for the count and nobs param\n> 2\\. In 1 Sample Proportion test we will pass the claim value for the value param, but in 2 Sample proportion\n>     we will not be passing the value param or we can pass the value as None.\n\n We will be using the **proportions\\_ztest** from the **statsmodels\\.stats.proportion** package\\.\n\n> Example:\n> The government officials want to check if the impact of covid equal between the Rural and Urban area\n> Below is the sample collected:\n>                \\|  Rural  \\|  Urban  \\|\n> Negative \\|   867    \\|    500   \\|\n> Positive   \\|   490    \\|    550   \\|\n> Total       \\|   1357  \\|    1050 \\|\n\n For the above example, below is the hypothesis statement\n> Ha:= covid spread in Rural area is not equal to the spread in Urban area\n> H0:= covid spread in Rural area is equal to the spread in Urban area\n \n Code snippet for performing the 2 Sample Proportion test\n```python\nfrom statsmodels.stats.proportion import proportions_ztest\n\n# count => a list including the count of Positive patients in Rural and Urban\n# nobs => a list including total count of people in Rural and Urban\np_value = proportions_ztest(count=[490, 550], nobs=[1357, 1050],alternative='two-sided')[1]\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\n Based on the claim statment made, the 2 Sample proportion test can be either One tailed or Two tailed test\n> \n>    * People affected by covid in Urban is greater than that of Rural \\-\\> 1 tail 2 Sample proportion test\n>    * Poeple affecteb by covid is equal in both Urban and Rural \\-\\> 2 tail 2 Sample proportion test\n\n We can tweak the alternative param in the proportion\\_ztest, to make it as a one tailed test. \n The alternative param can take either of the values 'two\\-sided', 'smaller', 'larger'\n By default the p\\_value given by the proportions\\_ztest is for two tailed test."
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
          },
          {
            "type": "DESC",
            "data": "##  1 Sample Proportion test:\n\n The 1 Sample Proportion test is used when we want to verify if the proportion of a group within a\n categorical feature is similar to the claim made.\n \n In the 1 Sample Proportion test only one categorical data is involved and there are exactly two\n groups within the group.\n> Gender is a categorical feature with only two levels Male or Female\n\n##  Python function to perform 1 Sample Proportion test\n\n We will be using the **proportions\\_ztest** from the **statsmodels\\.stats.proportion** package\\.\n> Example:\n> Health officials of India is expecting Covid\\-19 is affecting more men than women, they are expecting 65% of affected case \n> in India are Men. To verify this hypothesis, random samples \\(n=1500\\) across India were collected,the samples are as follows:\n> Men:900, Women:600\n\n For the above example, below is the hypothesis statement\n> We will be using 1 sample proportion test, as the hypothesis revolves around gender alone and gender has only two levels\n> Ha:= The proportion of Male affected by covid is not equal to 65%\n> H0:= The proportion of Male affected by covid is equal to 65% \n \n Code snippet for performing the 1 Sample Proportion test\n```python\nfrom statsmodels.stats.proportion import proportions_ztest\n\n# count => Total count of male in the given data set\n# nobs => Total count of the sample space\n# value => The claim percentage in decimal value\np_value = proportions_ztest(count=900, nobs=1500, value=0.65,alternative='two-sided')[1]\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\n Based on the claim statment made, the 1 Sample proportion test can be either One tailed or Two tailed test\n> \n>    * More than 65% of covid patients are male \\-\\> 1 tail 1 Sample proportion test\n>    * 65% of covid patients are male \\-\\> 2 tail 1 Sample proportion test\n\n We can tweak the alternative param in the proportion\\_ztest, to make it as a one tailed test. \n The alternative param can take either of the values 'two\\-sided', 'smaller', 'larger'\n By default the p\\_value given by the proportions\\_ztest is for two tailed test."
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
            "data": "## Non \\- Parametric Test for ANOVA:\n\n We cannot perform the ANOVA test, when the data does not satisfy the Normality and the Equal Variance   amoung the group test. In this case we will be going with a Non \\- Parametric test.\n\n A Kruskal\\-Wallis test is used to determine whether or not there is a statistically significant difference  between the medians of three or more independent groups. This test is the nonparametric equivalent \n of the one\\-way ANOVA and is typically used when the normality assumption is violated.\n\n The Kruskal\\-Wallis test does not assume normality in the data and is much less sensitive to outliers \n than the one\\-way ANOVA.\n\n The Kruskal test compares the Median value amoung the groups, instead of considering their\n mean value. \n> Hypothesis Statements:\n> H0:= The median value accross the different groups are same\n> Ha:= Atleast one of the median value is different from other groups\n\n## Kruskal \\- Wallis Test Assumptions:\n\n Before we can conduct a Kruskal \\- Wallis test, we need to make sure the \n following assumptions are met:\n> \n>    1. Ordinal or Continuos Response Variable \\- The numerical feature involved in the hypothesis should be a Ordinal or Continuous variable. Eg: The time taken to deliver package in different region. Here the timetaken is a continuous variable.\n> 2\\. Independence \\- The observations in each group need to be independent of each other.\n> 3\\. Distribution have similar shapes \\- The distibution in each group need to have the same shape\n\n## Kruskal \\- Wallis Test code:\n\n```python\nfrom scipy import stats\n\n# We will need to pass all the individual group dataframes\np_value = stats.kruskal(sample1, sample2,...,sampleN, nan_policy='propogate')[1]\nif p_value > 0.05\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\nWe will have to perform Post HOC analysis to figure out which groups differ from each other."
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
          },
          {
            "type": "DESC",
            "data": "##  Chi\\-Square test:\n\n In the Chi\\-Square test only one categorical feature is involved and there are more than 2 \n levels within the group.\n> A population when divided as children, young and middle age, senior citizen is an example\n> of a categorical feature with more than 2 levels\n\n##  Python function to perform Chi\\-Square test\n\n We will be using the **chisquare** from the **scipy\\.stats** package\\.\n> Example:\n> Health officials of India is expecting that Covid\\-19 are expecting 60% Senior Citizens, 30% Young & Middle aged and 10% Children in India. To verify this hypothesis, A random samples \\(n=2000\\) collected \n> across India and found to be Senior citizens:1100, Y&M:500, C:400\n  Here even though there is only on variable \\(age category\\) when there are more than 2 level in \n  the variable we use Chi\\-Square test\n For the above example, below is the hypothesis statement\n> We will be using chisquare test, as the hypothesis revolves around population alone and population\n> has are more than 2 levels\n> Ha:= The proportion of affected people is not equal to the claim made\n> H0:= The proportion of affected people is 60% Senior Citizens, 30% Young & Middle aged and 10% Children\n \n Code snippet for performing the 1 Sample Proportion test\n```python\nfrom statsmodels.stats.proportion import proportions_ztest\n\n# f_obs => The count for each age category from the sample space\n# f_exp => The expected count for each age category based on the claim %\n\nexp_senior, exp_y_m , exp_child = (0.6 * 2000), (0.3 * 2000), (0.1 * 2000)\npvalue = chisquare(f_obs=[1100, 500, 400],f_exp=[exp_senior,exp_y_m,exp_child],ddof=0, axis=0)[1]\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n"
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
          },
          {
            "type": "DESC",
            "data": "##  Two Tail 1 \\- Sample t\\-test:\n\n The two tail t\\-test is used whenever the Alternative hypothesis value can lie on either side of\n the tail and does not necessarily be concentrated only on one side\n\n> Example:\n> A soda company wants to analyse if their can filling machine fills the can with exactly 150ml of content and not more or less than it. \n> Ha:= Average content filled in the can is not equal to 150ml \\(\\!= 150 ml\\)\\-\\> Alternative hypotheis\n> H0:= Average content filled in the can is equal to 150ml \\(= 150 ml\\) \\-\\> Null hypothesis\n Here we are checking if the machine fills the can exactly with 150 ml of content. There is a possibility\n that the machine can fill the can with more than 150ml content or less than 150ml of content.\n Here the alternative hypothesis range lies on both the tails and we will have to use\n Two tail 1\\-Sample t\\-test\n\n##  Python function to perform two tail 1 Sample t\\-test:\n\n Below is the code snippet used to perform two sample 1 Sample t\\-test for the above example. \n We will be using the **ttest\\_1samp **from Scipy stats package.\n```python\nfrom scipy.stats import ttest_1samp\n\np_value = ttest_1samp(a=sample_data, popmean=12, alternative='two-sided')[1]\n\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n \n Since by default the ttest\\_1samp gives the p\\_value for two\\-sided, we can directly infer the hypothesis\n based on the p\\_value."
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
        "key": "8fb7e16a-9930-4f62-af35-2190251832a8",
        "parentKey": "1ae639a4-76e8-42e2-ac9f-0dc83446a970",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Wilcoxon Test"
          },
          {
            "type": "DESC",
            "data": "When the dependent t\\-test fails to satisfy the assumption, we will use the Wilcoxon test from\n the Scipy.stats package.\n\n## Wilcoxon Test Assumptions:\n\n Before we can conduct a Wilcoxon test, we need to make sure the \n following assumptions are satisfied:\n> \n>    1. Ordinal or Continuos Response Variable \\- The numerical feature involved in the hypothesis should \n>     be a Ordinal or Continuous variable. Eg: The time taken to deliver package in different region. \n>     Here the time taken is a continuous variable.\n> 2\\. Independence \\- The test assumes independence, meaning that the paired observations are randomly and independently drawn.\n> 3\\. Distribution have similar shapes \\- The distibution in each group need to have the same shape\n>  Code snippet for MannWhitneyu test:\n\n##  Wilcoxon Hypothesis:\n\n In most cases, a Wilcoxon test is performed as a two\\-sided test. \n The null and alternative hypotheses  are written as:\n H0:= The median difference between the two groups are symmetric around 0\n Ha:= The median difference between the two groups are not symmetric around 0\n\n> Example:\n> A professor teaches batch1 students using a specific method and collects the test scores of the batch.\n> Then he changes the teaching method for batch2 students and collects the test score of the new batch.\n> Now the professor wants to check if the new teaching method was effective.\n> Ha:= The median test score difference between the two groups is not equal to 0 \\-\\> Alternative hypothesis\n> H0:= The median test score difference between the two groups is 0 \\-\\> Null hypothesis\n\n **Code snippet for the above example:**\n```python\nfrom scipy.stats import wilcoxon\n\np_value = wilcoxon(x=sample1data,y=sample2data,alternative=\"two-sided\")\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n"
          }
        ]
      },
      {
        "key": "14213589-8fe9-4e25-b7ff-2305e9a93318",
        "parentKey": "b222b8f4-ecba-46fa-91fc-1223a04160fe",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Dependent t-test"
          },
          {
            "type": "DESC",
            "data": "##  Dependent 2 \\- Sample t\\-test:\n\n Dependent 2 \\- Sample t\\-test is used when we want to analyse the relationship between two groups\n based on a numerical feature and the sample space in the two groups are dependent of each\n other or belong to the same sample space.\n\n> Example:\n> A professor teaches of students batch using a specific method and collects the test scores of the batch.\n> Then he uses a different teaching method for the same batch of students  and collects the test score of the batch again.\n> Now the professor wants to check if the new teaching method was effective.\n> Ha:= Average test scores is not equal between the two teaching methods \\-\\> Alternative hypothesis\n> H0:= Average test scores is equal between the two teaching methods \\-\\> Null hypothesis\n \n Here we will be using the Dependent 2 sample t\\-test, as there is only change in the teaching method\n but the observation includes the same set of students , and there are only two groups involved in the hypothesis.\n\n##  Python function to perform Independent 2\\- Sample t\\-test:\n\n We will be using the **ttest\\_ind **from the Scipy.Stats package Below is the code snippet \n for the above example question\n```python\nfrom scipy.stats import ttest_rel\n\np_value = ttest_rel(a=oldMethodScore,b=newMethodScore,\n           alternative='two-sided')[1]\n\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n"
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
            "data": "# Type of Hypothesis:\n\n\n## Alternative Hypothesis:\n\n An alternative hypothesis usually refers to the claim made by the organization. \n The analysts generally creates their null hypothesis based on the alternative hypothesis and try to see if the   claim is true or false.\n\n Alternative Hypothesis is also referred to as the effect statement. \n In a one tail scenario, the Alternative Hypothesis will mostly take the statement of the claim made.\n In a two tail scenario, the Alternative Hypothesis will take the not equal to condition.\n\n## Null Hypothesis:\n\n A null hypothesis is a statement formulated by the analysts in order to verify if there exists a relationship between the variables in the given data.\n\n The null hypothesis statement is usually the opposite of the **Alternative hypothesis. **The main purpose of  the research is to either reject or accept \\(fail to reject\\) the Null hypothesis.\n \n Null Hypothesis is also referred to as the effect statement. \n In a one tail scenario, the Null Hypothesis will mostly take the statement opposite of the claim made.\n In a two tail scenario, the Null Hypothesis will take the equal to condition.\n\n```none\n- Reject the Null hypothesis: This refers to the scenario where we \nwill accept the Alternative hypothesis ie, there exist a \nrelationship between the variables in the data or the claim made \nis true\n\n- Fail to reject the Null hypothesis: This refers to the scenario \nwhere we state that there does not exist a relationship between \nthe variables in the data or the claim made is false\n\n```\n\n> Example:\n> \n> Ha:= Drinking tea or coffee before classes increases student's performances\n> H0:= There is no significant difference in student's performances if they drink tea of coffee before classes\n"
          }
        ]
      },
      {
        "key": "1459bf1d-2a6e-44ff-a486-950f36a902fd",
        "parentKey": "b222b8f4-ecba-46fa-91fc-1223a04160fe",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Independent t-test"
          },
          {
            "type": "DESC",
            "data": "##  Independent 2 \\- Sample t\\-test:\n\n Independent 2 \\- Sample t\\-test is used when we want to analyse the relationship between two groups\n based on a numerical feature and the sample space in the two groups are independent of each\n other\\.\n> Example:\n> A professor teaches batch1 students using a specific method and collects the test scores of the batch.\n> Then he changes the teaching method for batch2 students and collects the test score of the new batch.\n> Now the professor wants to check if the new teaching method was effective.\n> Ha:= Average test scores of batch2 is not equal to the average test scores of batch1 \\-\\> Alternative hypothesis\n> H0:= Average test scores of batch2 is equal to the average test scores of batch1 \\-\\> Null hypothesis\n \n Here we will be using the Independent 2 sample t\\-test, as the batch1 students are independent\n from the batch2 students, and there are only two groups involved in the hypothesis.\n\n##  Python function to perform Independent 2\\- Sample t\\-test:\n\n We will be using the **ttest\\_ind **from the Scipy.Stats package Below is the code snippet for the above\n example question\n```python\nfrom scipy.stats import ttest_ind\n\np_value = ttest_ind(a=batch2Score,b=batch1Score,alternative='two-sided')[1]\n\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n"
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
            "data": "There are two possible ways in which we can perform the ANOVA testing.\n\n## Statistical Approach:\n\n We can use the f\\_oneway function from the Scipy stats module to perform the ANOVA testing.\n\n The one\\-way ANOVA tests the null hypothesis that two or more groups have\n the same population mean.  The test is applied to samples from two or \n more groups, possibly with differing sizes.\n\n The ideal scenario to use the f\\_oneway is when we have only a single categorical feature\n used in the Hypothesis\n```python\nfrom scipy import stats\n\np_value = stats.f_oneway(sample1, sample2, ... ,sampleN, axis = 0)\nif p_value > 0.05:\n    print(p_value, \"We fail to reject the Null Hypothesis\")\nelse:\n    print(p_value, \"We will reject the Null Hypothesis\")\n\n```\n\n## Regression model Approach:\n\n The second way is that we can use the \"ols\" and \"anova\\_lm\" models for ANOVA testing.\n This approach can be used when there are more number of groups to be compared or\n when we want to compare the mean accross two categorical features.\n```python\nfrom statsmodels.formula.api import ols\nfrom statsmodels.stats.anova import anova_lm\n\n# Here Minutes is the numerical feature and \n# Region is the categorical feature\nan = ols('Minutes~Region', data=df).fit()\nanova_lm(an)\n\n```\n The anova\\_lm will give a table output with the F \\- Statistics and P\\_value for the data. Based on the\n P\\_value we can decide either we can reject the null hypothesis or we fail to reject the null hypothesis"
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
