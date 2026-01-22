---
layout: default
title: Frequently Asked Questions
---

# Frequently Asked Questions

## Data Providers (Entomologists)

### How do I get a template with only the columns and countries I need?

* Click the **"Request a Customised Spreadsheet Template"** link in the footer of any email from the system.
* This opens a form where you can select specific countries, vector groups, and optional columns.
* If you don’t already have an email from the system, send an email with a blank spreadsheet attached to **vector.validation@efsa.epimundi.com**.

### How do I submit my data for validation?

* Complete your data entry in the **1.DATA INPUT-Ticks** (or relevant vector group) worksheet of the Excel template and email the file to **vector.validation@efsa.epimundi.com**.

### What should I do if my submission fails validation?

* You will receive a **"Validation Failed"** email with an annotated spreadsheet.
* Open this file and use the **red highlights** (critical errors) and **yellow highlights** (warnings) to correct your data, then resubmit the updated file to the same email address.

### What is the difference between an error and a warning?

* **Errors** are invalid data, such as text in a numeric field or an end date prior to the start date. These block data submission and must be fixed in order to request validation by the vector entomologist.
* **Warnings** are unusual data that could nevertheless be correct. They should be checked (and corrected if they are mistakes).
* If they are correct, you are able to submit your data to the reference entomologists with warnings.

### What is the "Validation Map" for?

* It visually plots your coordinates to help you identify spatial errors, such as points falling outside the specified country.
* It is only provided if the system detects spatial errors or warnings.

### Can I report a species that is not in the dropdown list?

* Yes. You can manually enter the name in a non-controlled cell and paste it into the data sheet, or insert it into the **3.Vector species** or **4.Host species** reference worksheets.
* Note that these will trigger a system **Warning**, which is normal.

### Why am I getting this error: 

> “A numerical sequence of more than 5 elements was identified. Please confirm that this is not an input error due to value dragging.”

* In Excel, when using the ‘drag’ feature to copy cells between rows, the system will often increment values ending in a digit.
* The Data Validation Tool detects series of sequentially increasing values (dates, numbers and even strings ending in a digit) and flags them as warnings.
* Please check to make sure that the values are correct and not the result of this Excel feature.

### What should I do after correcting issues identified by the reference entomologist? 

The validation tool tracks interactions and keeps a copy of validated data.
* ✅ **DO** resend your data to the validation tool to do a final check for errors, and, if it passes, resubmit your data to the reference entomologist
* ❌ **DON’T** send your data via email directly to the reference entomologist. 

---

## VectorNet Reference Entomologists

### What does expert validation entail?

* Expert validation is the final quality-assurance step prior to GBIF submission.
* A reference expert reviews data that have already passed all automated technical checks and provider confirmation.
* They evaluate scientific validity by examining system-flagged warnings (such as new species records, geographic distribution outliers, or unusual species–protocol combinations) and apply expert judgment to approve or reject records.

### Does data still need to be submitted for expert validation when no errors or warnings are present?

* **Yes**, if providers wish their data to be included in the VectorNet data portal or incorporated directly into the VectorNet database (which is published on GBIF and updated regularly).

### What should I do with Warnings?

* If a submitted spreadsheet has warnings, these represent unusual data that the submitter judges to be correct.
* You should check these carefully, but you can still approve a spreadsheet containing warnings.

### How do I approve or reject specific records?

* In the new GBIF-formatted worksheet added to the workbook, you must fill in two columns for every row:
    * Enter **1** to approve or **0** to reject in the validation column.
    * Provide your **ORCID ID** in the identifier column.

### Where do I send the file once I have finished my review?

* Email the manually validated workbook back to the **original data provider**.
* They are responsible for the final upload to the GBIF repository.

### How do I add a new species to the system's permanent reference list?

* Click the **"Update Species Reference List"** link in any notification email footer.
* Fill out the web form with the species name, group, and (optionally) its GBIF taxonomic key.
* The system will then automatically retrieve official records from the GBIF database.

### What should I do if I find errors that need correction?

* Contact the submitter and explain the problem.
* Request that they correct the data, re-validate, and submit again via the validation system.

### What does the blue highlight on species names mean?

* The blue highlight represents a special type of warning (an **‘alert’**), intended specifically for reference entomologists to check.
* It indicates that the system could not confirm that the species was normally found in the specified location.
* This could be because the species has not been previously recorded as endemic in that region or the species name is at a higher level (i.e. genus) than the data in the distribution database. In this case, the warning can be ignored.
