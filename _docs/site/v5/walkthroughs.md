---
title: Walkthroughs
v5: true
gateway-url: https://gateway.vectorsurv.org/v5/site/site
---

Creating and editing site revisions can be complicated. Below are some
walkthroughs of common tasks.

- [Create a new site](#new-site)
- [Create a new site with a specific date interval](#new-site-interval)
- [Edit an existing site's optional values](#edit-optional)
- [Edit an existing site's date values](#edit-date)
- [Edit an existing site's coordinates](#edit-coordinates)
- [Create a new site revision](#new-revision)
- [Edit the date boundary between two date-adjacent sites](#edit-date-boundary)
- [Consolidate two date-adjacent site revisions](#consolidate-revisions)

---

<div id="new-site"></div>

### **Create a new site**

**Scenario**: You are creating a new site in the VectorSurv system for your agency to use with the following characteristics...

- The **site code** is **unique** (i.e., it has never been used by your agency).
- The site location is **currently** being used to trap specimens.
- You want to be able to add **historical** records (e.g., pools and collections) utilizing this site at **any point in time**.

**Steps:**

1. Navigate to the "Create New Site" page (e.g. https://gateway.vectorsurv.org/v5/site/site).
2. Leave the "Active Date" and "Deactive Date" fields blank.
3. Enter a "Site Code" that is unique to your agency throughout history. _Note: The code could be used by another agency (e.g., both agency #1 and agency #2 could have a site with code 1000001)._
4. Specify the site location by entering the Latitude and Longitude, by entering the address in the map's geocoder field, or by clicking the location on the map.
5. Add values for optional fields (e.g., Site Name, Address, Surroundings, Comments) if desired.
6. Click the "Save Site" button.

<div id="new-site-interval"></div>

**Results**: The site has been created and can be referenced when generating various records throughout the VectorSurv system. You can see a list of existing sites for your agency on the "Manage Sites" page.

---

### **Create a new site with a specific date interval**

**Scenario**: You want to create a new site in the VectorSurv system for your agency to use with historical collection and/or pool records. You want the site to have the following characteristics...

- You want to record the date the site was decommissioned. The site location is **NOT** currently being used to trap specimens and your agency doesn't plan to use this location in the future.
- You want to record the date when the site location was first used to collect specimens.
- The **site code** is **unique** in this interval (i.e., the code was not used by your agency at any other location during the desired time period).

**Steps:**

1. Navigate to the "Create New Site" page (e.g. https://gateway.vectorsurv.org/v5/site/site).
2. Enter the appropriate values in the "Active Date" and "Deactive Date" fields.
3. Add a "Site Code" that is unique to your agency during this interval.
4. Fill in the other required fields (i.e., Latitude and Longitude).
5. Add values for optional fields (e.g., Site Name, Address, Surroundings, Comments) if desired.
6. Click the "Save Site" button.

<div id="edit-optional"></div>

**Results**: The site has been created and can be referenced when generating various records with collection dates that fall within the time interval between the site's Active and Deactive dates. You can see a list of existing sites, and their relevant dates, on the "Manage Sites" page.

---

### **Edit an existing site's optional values**

**Scenario**: Your agency has a site record in our system, and you wish to update the value of some optional fields (e.g., Address or Comments).

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the desired site in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form.
3. Edit the values for optional fields as desired.
4. Click the "Update Site" button.

<div id="edit-date"></div>

**Results**: The site values will be updated. The newly edited values will apply throughout the site's history.

---

### **Edit an existing site's date values**

**Scenario**: Your agency has a site record in our system, and you wish to change the "Active Date" and/or "Deactive Date" value(s).

> ⚠️ **Note:** For validation reasons, editing both date fields requires two separate submissions. Once a date value has been edited, the other date field will be disabled until the form is submitted.

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the desired site in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form.
3. In the "Date Range" section, edit your first desired date value (e.g., "Active Date").
4. Click the "Update" button in line with the edited field.
5. After a successful submission the date has been edited. If you wish to edit the other date field, you may do so now.

<div id="edit-coordinates"></div>

**Results**: The site date value(s) will be updated. Records can be associated with the new date range. _Note: If the new site revision dates overlap with other existing revisions you will see a warning message._

---

### **Edit an existing site's coordinates**

**Scenario**: The coordinates for one of your agency's sites were entered incorrectly. You want to edit the coordinates and have the new location apply to all associated records throughout the site revision's history.

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the desired site in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form.
3. Edit the location by specifying the latitude and longitude or by selecting the location on the map.
4. Click the "Update Site" button.

<div id="new-revision"></div>

**Results**: The site's coordinates will be updated. The site's "buffer zone" will also be updated. All associated records will have their locations changed to the new site coordinates. (**Note**: This **includes** any records that may have been "offset" during their creation).

---

### **Create a new site revision**

**Scenario**: Your agency will no longer be using a particular location as a trap site. You want to reuse that site code and have it associated with another location for all future collection dates.

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the site you wish to deactivate in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form.
3. Edit the "Deactive Date" field value as needed.
4. Click the "Update" button in line with the "Deactivate Date" field. After a successful update the site is no longer active after the deactive date.
5. Scroll down to the bottom of the page and expand the "Revisions" card if necessary.
6. Click the "Create New Revision" button.
7. You should now be viewing the "Create New Site Revision" form.
8. Enter the appropriate values in the "Active Date" and "Deactive Date" fields. Leave the "Deactive Date" field blank if the site is currently active. This date range cannot overlap any existing site revisions for this site code.
9. The "Site Code" field will have the appropriate value already filled in.
10. Fill in the other required fields (i.e., Latitude, and Longitude).
11. Add values for optional fields (e.g., Site Name, Address, Surroundings, Comments) if desired.
12. Click the "Save Site" button.

<div id="edit-date-boundary"></div>

**Results**: A new site revision for this site code has been created. You can associate records whose collection dates fall within this revision's active/deactive date range.

---

### **Edit the date boundary between two date-adjacent sites**

**Scenario**: Two site revisions have been created for your agency with the same site code. The "Active Date" of the more recent site is incorrect and needs to be edited. The resulting edit will cause this revision's date range to overlap the previous site revision's date range. **This is intentional**. You want the later revision to appropriate some of the time interval currently associated with the earlier revision.

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the site you wish to edit in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form.
3. The "Revision Timeline" located towards the bottom of the page shows a visualization of existing site revisions. The highlighted blue bar represents the site revision currently being edited.
4. In the "Date Range" section just above the Revisions card, edit the "Active Date" as needed.
5. Click the "Update" button in line with the "Active Date" field.
6. At this point you will see a warning about the pending update. If this change will cause any records to be associated with a new site revision the warning message will include that information.
7. Click the "Continue" button.
8. You should now see a success message and the Revision timeline chart should reflect the new date intervals for both site revisions.

<div id="consolidate-revisions"></div>

**Results**: The date range values of both site revisions have been updated. Any associated records that were located in the "overlap" date period will now be linked to the later site revision.

---

### **Consolidate two date-adjacent sites**

**Scenario**: Your agency mistakenly created two site revisions for a given date period. You want all records associated with the previous/earlier site revision to be associated with the later site revision and you want the previous site revision deleted.

> ⚠️ **Note:** This operation is not possible if the previous/unwanted revision has an open ended active or deactive date. It would be necessary to edit any blank date fields before consolidating and deleting that site revision.

**Steps:**

1. Navigate to the "Manage Sites" page (e.g. https://gateway.vectorsurv.org/v5/site/manage).
2. Find the site revision you wish to keep in the site table and click on the "Edit" button (i.e., The Pencil icon). This will bring you to the "Edit Site" form for that site revision.
3. Scroll to the Revisions card located near the bottom of the page and expand it if necessary. Then, if necessary, expand the Revision Timeline Chart located inside the Revisions card.
4. A horizontal bar representing the later site revision you wish to keep should be highlighted in blue in the Revision Timeline Chart. Just below it should be a bar representing the previous revision you wish to delete and replace.
5. To the left of the previous revision you should see a "Consolidate" button with an arrow pointing upwards. Hovering over this will display an informational tooltip that reads "Consolidate Revision: move any associated records from this revision to the currently viewed revision, then delete this revision."
6. Click the "Consolidate" button.
7. You should see a warning message that reads "Are you sure you want to consolidate the currently viewed site revision with the previous?".
8. Click the "Ok" button.
9. You should see a success message and the Site Timeline chart should show the currently viewed revision expanding across the entire date interval. The timeline bar representing the previous site revision should now be gone.

**Results**: After a successful update, there is a single site revision covering the entire time interval, all associated records have been associated with that revision, and the unwanted site revision is deleted. If needed, the existing site revision's date fields can now be edited to cover a wider range of time.
