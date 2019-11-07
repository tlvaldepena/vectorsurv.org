---
title: Issues
gateway-url: https://gateway.calsurv.org/core/ppf/issue_manage
---
This page keeps track of mismatches in the data entered into the Gateway.

There are two types of data issues that are tracked in the **Manage Issues** table: Spatial and Date issues. Spatial issues are noted when coordinates for some record ([site]({{ site.baseur1 }}/docs/site/), [collection]({{ site.baseur1 }}/docs/arthropod/collection), etc.) fall outside agency boundaries. If an agency has no boundaries in the Gateway, state boundaries are used instead. Date issues arise when some record is added to the Gateway with an active date that is in the future (i.e. the date given to the record is after the date the record was added to the Gateway).

The **Manage Issues** table displays information about each record flagged with either a Spatial or Date issue. If a record has both issues, it will appear twice in the table.
* **Record Name**: This is the name and ID of the record that was flagged.
* **Add Date**: The date this entry was added to the Gateway.
* **Issue Description**: Whether this issue is Spatial or Date and a brief description of the issue.
* **Off By**: For spatial issues, this is the distance in meters or kilometers outside agency boundaries for this record. For date issues, this is the number of days in the future...
* **View/Edit**: Use this link to view and/or edit the collection. Clicking the link will bring you to a filled-in page for the type of record that was flagged, similiar to editing a record from the [Collection Management]({{ site.baseur1 }}/docs/arthropod/collection-manage) page, for example. A box at the top of the page will identify the issue(s) with this record and suggest possible actions. You can either click within the box to return to the **Manage Issues** page or click the **Update** button at the bottom of the page to save any changes.
![Issues box]({{ site.baseur1 }}/assets/images/docs/issues-box.PNG)
* **Comments**: Click the ellipses to add any comments about this issue. It is highly recommended to include comments if the record will be submitted as resolved (see below) to explain why the record is correct.
* **Actions**: Clicking the Submit as Resolved link will remove the record from the **Manage Issues** table. It will also prevent the record from being flagged for the same issue in the future.

Records in the table can be filtered by type of issue, name, date, etc. using the search box below the table.
![Filter issues]({{ site.baseur1 }}/assets/images/docs/filter-issues.PNG)
