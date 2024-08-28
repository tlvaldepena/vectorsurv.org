---
title: Pool Infection Rate
gateway-url: https://gateway.vectorsurv.org/arthro/ppf/pool_infection_calc
youtube-url: https://youtu.be/sB2yJVVmzok
---

The pool infection rate calculator estimates the arbovirus infection rate based on testing pools of mosquitoes. This calculator is based on the [CDC/DVBID MLE/MIR Microsoft Excel add-in](https://www.cdc.gov/westnile/resourcepages/mosqSurvSoft.html).

## Fields

**Peer Agency**: In addition to calculations for your own agency (the default), this selection allows you to choose other agencies for which you wish to calculate an infection rate. Multiple agencies can be selected by using the _CTRL/CMD_, or _SHIFT_ keys while selecting values. This allows you to compare results for your agency to those of neighboring agencies. Note that calculations for other agencies are possible only for the the entire agency. If the _Treat each selected agency independently_ box is checked, the rates will be calculated separately for each agency (ignored if only one agency is selected). If left unchecked, the infection rate will be aggregated for all selected agencies. Your agency is always treated separately.

**Date Period**: Specify the time period for which you wish to calculate an infection rate. You can manually select a date range with the date format specified on your [Account Preferences]({{ site.baseur1 }}/docs/settings/account-preferences) page, or choose a specific week or month within a year. If calculating for a month, there is a box to specify whether to use half-months instead of full-months. If this box is checked, each month will be divided into two parts, days 1-15 and days 16 to the last day of the month (28, 29, 30, or 31).

![Date period field]({{ site.baseur1 }}/assets/images/docs/date-range-infection-rate.PNG)

**# of Date Periods**: Must be at least 1 to make a calculation. If this number is larger than 1, the infection rate is calculated for the selected date period and the same period immediately preceding. Ex: You are using a manual date range of 4 days. If the number of date periods is 2, the calculator will estimate the infection rate separately for the selected 4 days and for the 4-day period ending right before the start date of your range.

**Spatial Filter**: This feature allows you to filter results within the agency or agencies. You can draw a polygon on the map using the feature tab, or include a previously saved feature from the [Spatial Features]({{ site.baseurl }}/docs/tools/spatial-tools) page. ![Polygon example]({{ site.baseur1 }}/assets/images/docs/spatial-feature-tools.PNG) Alternatively, you can filter by [site group]({{ site.baseur1 }}/docs/site/site-group), region (determined when creating a [new site]({{ site.baseur1 }}/docs/site)), or specific site. For these filters, multiple values can be selected by using the _CTRL/CMD/SHIFT_ keys while selecting values. If the _Treat each selected filter independently_ box is checked, the infection rate will be stratified by spatial filter, otherwise the rate will be aggregated for the selection. If the "All Available..." option is selected or no feature polygon(s) is provided, any calculation(s) will not use spatial filters.

**Target/Virus**: The pathogen for which you wish to estimate the pool infection rate.

**Species**: Here you can choose whether to look at the infection rate for all species or selected species of interest. Multiple species can be selected by using the _CTRL/CMD/SHIFT_ keys while selecting values. If the _Treat each selected species independently_ box is checked, the infection rate will be stratified by species, otherwise the rate will be aggregated for all selected species.

**Sex/Condition**: Typically, females of various conditions are of interest when calculating the infection rate, but you could also examine males, unknown sex, eggs, larvae, and pupae. Multiple values can be selected by using the _CTRL/CMD/SHIFT_ keys while selecting values, and checking the _Treat each selected sex/condition individually_ box will stratify the infection rate by the selected values.

**Trap Type**: Filter the results by the trap type used for the collection. This is helpful to ensure that results are comparable over time and/or across agencies. Similar to **Sex/Condition**, multiple trap types can be selected by using the _CTRL/CMD/SHIFT_ keys while selecting values, and checking the _Treat each selected trap type individually_ box will stratify the infection rate by the selected traps.

**Point Estimate**: The infection rate estimation method. The bias-corrected MLE will be appropriate for most situations, but you can also choose to use the MLE or MIR methods.

  If arthropods were to be tested individually, the true infection rate could be calculated as

  $$ {\text{True IR}} = \frac{\text{Infected arthropods}}{\text{Total arthropods tested}} \times {\text{Scale}} $$

  However, in most cases, arthropods are not tested for pathogens individually, and the actual number of pathogen-positive arthropods in a positive pool is subject to some uncertainty. Fortunately, infection rates can be estimated using the following methods:

  - **MIR**: Testing arthropods in pools can yield only a single positive per pool, which does not allow for certainty about the number of infected individuals within the pool. Minimum Infection Rate makes the assumption that there is only one positive arthropod in a positive pool. MIR is not always a reliable estimate of the true infection rate, as it is possible for multiple positive arthropods to be present in a positive pool. This is particularly true when infection rates are high. MIR is calculated as
$$ {\text{MIR}} = \frac{\text{Number of Positive Pools}}{\text{Total Number of Arthropods Tested}}  \times {\text{Scale}} $$

  - **MLE**: Maximum Likelihood Estimate Infection Rate is estimated using a binomial model to approximate the infection rate based on the available data. The spread and center of the data is used to derive confidence intervals. Confidence intervals can be interpreted as the range of possible estimates for infection rate and a 95% confidence interval indicates you can be 95% confident that the true infection rate is within the given interval. The wider the confidence interval, the greater the uncertainty about the point estimate.

  - **Bias-Corrected MLE**: The standard MLE can have significant bias depending on the quantity and quality of available data. The bias-corrected MLE seeks to reduce this bias and is the recommended point estimate when sample size is small. The bias-corrected MLE will be appropriate for most situations.

  **Note:** The MLE and Bias-Corrected MLE calculations are not designed for situations where all tests are positive. If one of these methods is chosen and all pools for a given time period are positive, VectorSurv's calculator will not return an estimate for infection rate for that time period. We recommend using MIR to estimate the infection rate for such situations.

**Confidence Interval**: Select the confidence level for the estimate. This is generally left at 95%.

**Scale**: Choose your preferred scale for the infection rate estimate. The default value is 1,000, which gives infection rates on a per-1,000 basis. If instead, you want to calculate as percent (per 100), you may choose 100 for the scale. As an example, if you were to choose a scale of 1,000, and your calculation returns an estimate of 10.3, this corresponds to 10.3 infected arthropods per 1,000 tested. If you had instead chosen a scale of 100, the same calculation would return an infection rate estimate of 1.03, which corresponds to 1.03 infected arthropods per 100 tested (i.e., 1.03%).

## Results

The **# of Calculations** indicator shows how many calculations will be performed based on the stratifications (checkboxes) that have been selected. If none of the boxes were checked, the infection rate at the desired time interval will be aggregated to a single calculation. The resulting table is downloadable, and you also have the option to view a time series graph (one graph per stratification) comparing the infection rate over the date periods (if more than 1).

**Infection Rate PE**: Infection rate point estimate calculated from the selected method

**Upper** and **Lower**: The upper and lower bounds of the confidence interval

**Individuals**: The interval sum of arthropods present in all pools within that interval

**Positives**: The amount of positive pools used in the calculation

**Pools**: The total number of pools used in the calculation
