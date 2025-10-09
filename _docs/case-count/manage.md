---
title: Manage Records
v5: true
gateway-url: https://gateway.vectorsurv.org/v5/case-count/manage
---

View saved aggregated human case / dead end host surveillance data records.

## Table

![](/assets/images/docs/case-count-manage-table.png)

**Filter By:**

- **Recent** Show the most recent 5, 10, 25, or 100 records.
- **Fields** Query for records that match a range of disease years and/or reporting group. You must click the refresh button for the table to apply your selected filters.

![Filter By Fields](/assets/images/docs/case-count-manage-filter-by-fields.png)

**Action buttons**:

![Download button](/assets/images/docs/action-button-dowload.png)
This will download a .csv spreadsheet populated with the table data. Be sure to click the blue refresh button after selecting any filters to apply those filters to the table data.

![Pencil icon](/assets/images/docs/action-button-edit.png): Edit a record.
The pencil icon at the right of each row will take you to a form that will let you edit that record.

![Trashbin icon](/assets/images/docs/action-button-delete.png): Delete a record.
The red trashbin icon at the right of each row will delete the record from the database.

![Save button](/assets/images/docs/action-button-save-changes.png)
You can also update the case count numbers in the table itself without having to click through and edit each record individually. Just make the changes to the table, and then click the button at the bottom of the page.

**Quick Edit**
The case count number fields can be edited directly through the table. Changing the other fields' values would potentially invalidate the uniqueness constraint that exists on the combination of reporting group, disease year, aggregation time frame, disease aggregation time frame, pathogen, disease host, date type, and classification, and so to change those values you must use the form view (available by clicking the edit button).
