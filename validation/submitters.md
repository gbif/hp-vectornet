---
layout: default
title: Guide for data submitters
---

# Guide for Data Submitters

### Overview of Your Role

Your role in this process is to:

* **Enter** your surveillance data into the standard Excel template.
* **Submit** the template to the validation system by email.
* **Correct** any errors identified by the system and resubmit.
* **Approve** the validated data (with zero errors) for final submission to a Reference Entomologist.

This validation loop (Submit -> Correct -> Resubmit) can be repeated as many times as necessary.

### Understanding the Excel Template

The Excel workbook is your primary tool for data entry and contains built-in features to help you enter data correctly.

**Worksheets**:

* **0. Instruction**: Read this sheet first for important help and instructions.
* **1.DATA INPUT-Ticks**: This (or a similar sheet for your vector group) is the **only** sheet you need to edit with your data.
* **2.NUTS3, 3.Vector species, 4.Host species**: These are customised reference lists used by the template. Do not edit them unless you are adding a new species.
* **Codes**: This worksheet is hidden to avoid changes.

**Built-in Help**:

* **Header Information**: In the data input sheet, hover your mouse over any column header (in row 1) to see a pop-up note explaining the expected data.
* **Dropdown Lists**: Many cells have built-in dropdown lists to ensure you use standardised terminology. Please select a value from this list where available.

**Warning**: Be careful when pasting data from other sources. Pasting a value **into** a cell will overwrite and break the built-in dropdown lists and validation rules for that cell. The data will still be validated when submitted, but the spreadsheet will no longer warn you of invalid data before submission.

**Adding New Species to the Lists**:

If you are reporting a host or vector species that is not in the dropdown list, you can:

1. Overwrite the built-in validation by writing the name in a non-controlled cell, then copying and pasting.
2. Alternatively, add it to the local reference list by going to the **3.Vector species** or **4.Host species** worksheet, inserting a new row **in the middle** of the existing list, and typing the new species name.
3. Note that when the validation server checks this new species, it will be flagged as a **Warning** (not an Error), which is normal.

### How to Submit for Validation

1. Complete all your data entry in the **1.DATA INPUT-Ticks** worksheet.
2. Save the Excel file.
3. Create a new email and attach the saved file.
4. Send the email to the system's validation address: **vector.validation@efsa.epimundi.com**.

### Interpreting the Validation Response (Errors Found)

If the system finds any blocking errors, it will send a "Validation Failed" email with a summary and two key files:

* **The Annotated Spreadsheet (.xlsx)**: A copy of your spreadsheet with automated feedback.
    * **Errors (Red Highlight)**: Critical issues that **must be fixed**.
    * **Warnings (Yellow Highlight)**: Potential issues you **should check**.
    * **Cell Comments**: Hover your mouse over any highlighted cell to read the specific explanation for the error/warning.
* **The Validation Map (.png)**: A map that visually plots your record coordinates. Maps are only provided when there are spatial errors or warnings.

#### Understanding the New IDs

The annotated spreadsheet includes two new columns:

* **datasetName**: A unique ID for that specific submission attempt to track versions.
* **recordNumber**: A unique ID for each row, which is also plotted on the Validation Map for easy reference.

### Correcting and Resubmitting

1. Open the annotated spreadsheet.
2. Use red highlights and comments to fix all **Errors**.
3. Review all **Warnings**; if verified as correct, you may leave them. You do not need to remove highlight colors or notes.
4. Save the corrected file.
5. Send the new version back to the same validation email address.

### The "Success" Email: Approving for Final Submission

Once you submit a file with **zero Errors**, you will receive a "Validation Successful" email. This email provides:

1. A summary of remaining **Warnings** for final review.
2. A unique, secure **"Submit to Review" link**.

When confident the data is correct, click this link to forward the validated spreadsheet to the Reference Entomologist for manual review.

### Receiving Expert Validation for the Final File

The **Reference Entomologist** will **manually review** the validated spreadsheet and provide feedback.
1. Once you correct the issues identified by the Reference Entomologist, **resend the data to the validation tool** (vector.validation@efsa.epimundi.com) to do a final check for errors.
2. If the validation is successful, **resubmit your data** to the **Reference Entomologist** for the final approval.

### Submitting to GBIF

Once your dataset has received final expert validation, publish the dataset on **GBIF**.

* Guidance on this process is available at [https://www.gbif.org/publishing-data](https://www.gbif.org/publishing-data).
* If you need further support, you can contact [helpdesk@gbif.org](helpdesk@gbif.org).

### Pulling the Dataset into the VectorNet Data portal 

After publication of the dataset on GBIF, please send an email to **biohaw@efsa.europa.eu** to ensure that your dataset can be pulled into the VectorNet Data Portal on GBIF. 

The **"Subject"** should read *“VectorNet validated dataset to be pulled on GBIF VectorNet Data Portal”* and the URL link to your published GBIF dataset should be pasted into the body of the email:
<pre>
Subject:       VectorNet validated dataset to be pulled on GBIF VectorNet Data Portal 
   
Body:          URL link to your published GBIF dataset
</pre>
### How to Get a Customised Template

To simplify data entry, you can generate a custom template for specific countries or columns:

1. Click the **"Request a Customised Spreadsheet Template"** link in the footer of any email from the system.
2. Complete the secure web form by selecting countries, the vector group, and optional columns.
3. Click **"Submit"**.
4. The system will email you a new template with pre-filtered reference lists.
5. If working with multiple vector groups, download a separate customized spreadsheet for each group.

---

## Appendix: Validation Issues

### Validation Errors (Critical)

These issues must be fixed before the system will issue a "Validation Successful" email.

| Field Tested | Category | Description of Check |
| :--- | :--- | :--- |
| 1.DATA INPUT | structure | Missing required variables/columns |
| projectID | missing | Missing required value: provide a unique project identifier |
| country | missing | Missing required value: select from provided list |
| higherGeographyID | missing | Missing required value: select a NUTS 3 code from the list |
| decimalLatitude | missing | Missing required value: provide latitude in specified format |
| decimalLongitude | missing | Missing required value: provide longitude in specified format |
| coordinatePrecision | missing | Missing required value: select precision level from dropdown |
| CollectionEffortStart/EndDate | missing | Missing required value: provide collection dates |
| samplingProtocol | missing | Missing required value: select from dropdown list |
| sampleSizeUnit | missing | Missing required value: select category from dropdown |
| sampleSizeValue | missing | Missing required value: provide a numeric value |
| scientificName | missing | Missing required value: select vector species from dropdown |
| decimalLatitude/Longitude | datatype | Invalid data type: expected numeric value |
| coordinatePrecision | datatype | Invalid data type: expected numeric value |
| sampleSizeValue | datatype | Invalid data type: expected numeric value |
| individualCount | datatype | Invalid data type: expected integer (no decimals) |
| CollectionEffortStart/EndDate | datatype | Invalid data type: expected date in yyyy-mm-dd format |
| identifiedByID | datatype | Invalid format: must start with "https://orcid.org" |
| bibliographicCitation | datatype | Invalid format: must start with "https://doi.org/" |
| country | list | Invalid value: use only dropdown options |
| higherGeographyID | list | Invalid value: use only proposed values |
| CollectionEffortStart/EndDate | consistency | Invalid: date is in the future or before 1920 |
| CollectionEffortStartDate | consistency | Invalid: 'CollectionEffortEndDate' must be after 'StartDate' |
| scientificName | consistency | Vector species not in GBIF/VectorNet vocabulary |
| associatedTaxa | consistency | Host species not in GBIF vocabulary |
| country | consistency | Coordinates are not in the specified country |
| sex/lifeStage/occurrenceRemarks| list | Invalid value: use only proposed dropdown values |
| associatedTaxa | consistency | Host provided for non-tick vector without bait protocol |
| associatedTaxa | missing | Missing value: host required for this sampling protocol |

### Validation Warnings (Check Required)

These flag unusual data but do not block submission.

| Field Tested | Category | Description of Check |
| :--- | :--- | :--- |
| verbatimSiteNames | datatype | Invalid: text should not be longer than three characters |
| decimalLatitude/Longitude | consistency | Numerical sequence (>5 elements) detected; confirm not a drag error |
| sampleSizeValue/individualCount| consistency | Numerical sequence (>5 elements) detected; confirm not a drag error |
| CollectionEffortStart/EndDate | consistency | Numerical sequence (>5 elements) detected; confirm not a drag error |
| scientificName | list | Vector is not a usual species identified in the VectorNet Area |
| associatedTaxa | list | Host is not a usual species identified in the VectorNet Area |
| higherGeographyID | consistency | Coordinates are not in the specified NUTS region |
| 1.DATA INPUT | columns | Extra columns detected; these will be ignored unless requested |

