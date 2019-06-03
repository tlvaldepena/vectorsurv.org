---
title: Pool Infection Rate Calculator
gateway-url: https://gateway.calsurv.org/arthro/ppf/pool_infection_calc
---
The pool infection rate calculator estimates the arbovirus infection rate based on testing pools of mosquitoes. This calculator is based on the [CDC/DVBID MLE/MIR Microsoft Excel add-in](<https://www.cdc.gov/westnile/resourcepages/mosqSurvSoft.html>).

## Fields
* **Agency**: Choose the agency or agencies for which you wish to calculate an infection rate. Multiple agencies can be selected by using the *CTRL/CMD/SHIFT* keys while selecting values. This could be your own agency to compare the current year to past years, or more than one agency to compare to neighboring districts. If the Treat each selected agency independently box is checked, the abundance anomaly will be stratified by agency (ignored if only one agency is selected). If left unchecked, the infection rate will be aggregated for all selected agencies.
* **Date Period**: Specify the time period you wish to calculate an infection rate for. You can manually select a date range with the date format specified on the [Account Preferences]({{ site.baseur1 }}/docs/settings/account-preferences) or choose a specific week or month in a year. If calculating for a month, there is a box to specify whether to use half-months instead of full-months. If this box is checked, each month will be divided into two parts, days 1-15 and days 16 to the last day of the month (28, 29, 30, or 31), and *only* the second half of the month will be calculated.
![Date period field]({{ site.baseur1 }}/assets/images/docs/date-range-infection-rate.PNG)
* **# of Date Periods**: Must be at least 1 to make a calculation. If this number is larger than 1, the infection rate is calculated for the selected date period and the same period immediately preceding. Ex: You are using a manual date range of 4 days. If the number of date periods is 2, the calculator will estimate the infection rate separately for the selected 4 days and for the 4-day period ending right before your the start date of your range.
* **Spatial Filter**: This feature allows you to filter results within the agency or agencies. You can draw a polygon on the map using the feature tab, or include a previously saved feature from the [Spatial Features]({{ site.baseurl }}/docs/tools/spatial-tools) page. ![Polygon example]({{ site.baseur1 }}/assets/images/docs/spatial-feature-tools.PNG) Alternatively, you can filter by [site group]({{ site.baseur1 }}/docs/site/site-group), region (determined when creating a [new site]({{ site.baseur1 }}/docs/site)), or specific site. For these filters, multiple values can be selected by using the *CTRL/CMD/SHIFT* keys while selecting values. If the *Treat each selected filter independently* box is checked, the infection rate will be stratified by spatial filter, otherwise the rate will be aggregated for the selection.
* **Target/Virus**: The pathogen for which you wish to estimate the pool infection rate.
* **Species**:
* **Sex/Condition**:
* **Trap Type**:
* **Point Estimate**:
* **Confidence Interval**:
* **Scale**:

## Results
