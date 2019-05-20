---
title: Collection
---
# Gateway URL: (https://gateway.calsurv.org/arthro/ppf/collection)[https://gateway.calsurv.org/arthro/ppf/collection)

Collections are the record of mosquito population data through the placement of traps.  

## Fields
* **Trap Type**: The type of trap placed in the field.  The list of traps in the dropdown can be adjusted through the (trap type configuration page)[https://gateway.calsurv.org/arthro/ppf/trap_type]
* **Lure Type**: The types of lure(s) used with the trap if any.  Multiple values can be selected by using *CTRL/CMD/SHIFT* keys while selecting values.  *Unspecified* and *None* can only be selected individually.
* **Collection Date**: The date the trap was picked up.  If a trap was left for multiple nights, enter the last day the trap was in the field.  Date format is based on the settings under (Account Preferences)[https://gateway.calsurv.org/core/ppf/preference].  A date needs to be selected before a trapping site can be selected.
* **# of Traps**: Number of unique traps in operation at one site.
* **# of Nights/Trap**: The number of nights a trap was in the field.  If a trap was placed and collected in the same day, enter 0.  If a trap was placed and collected the next day, enter 1.
* **Trap(s) at Site**: The (site)[{{ site.baseurl }}/docs/site/] where a trap was placed.  Start typing in any part of the site code or name and the dropdown will filter the sites to that text.  Once a site is selected, the trap can be adjusted up to 400m away indicated by the circle. ![Collection Site Map](/assets/images/collection_site_radius.png)
