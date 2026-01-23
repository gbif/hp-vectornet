---
layout: default
title: Guide for reference entomologists
---

# Guide for Reference Entomologists

## Overview of Your Role

Your role is the final expert validation step before data is submitted to GBIF. Because the file you receive has already passed automated technical checks and been confirmed by the data provider, it will contain zero data Errors. Your primary responsibility is to evaluate the **scientific validity** of the data. You must examine system-flagged warnings—such as new species records, geographic outliers, or unusual species–protocol combinations—and apply expert judgment to approve or reject records.

---

## Workflow Summary

* **Automated Validation**: The submitter completes technical validation using the online tool.
* **Submission**: The submitter sends the data to you for review via the online tool.
* **Expert Check**: You review relevant warnings and alerts.
    * **Outcome - Problems Detected**: You explain the issues to the submitter, delete the GBIF submission page, and return the file for correction.
    * **Outcome - No Problems**: You confirm validation by adding your ORCID and a ‘1’ for approved rows, then return the file to the submitter for GBIF publication.

---

## Receiving and Reviewing Submissions

You will receive an email from the system only after a provider has successfully validated their data and clicked the "Submit to Review" link.

### What the Submission Email Contains

* **Excel Workbook**: The validated file with highlighted warnings and annotations.
* **Warning List**: A summary in the email body of the automated system detections to focus your review.
* **Validation Map**: A map may be included to help identify spatial errors or unusual findings.

### Reviewing Specific Highlights

* **Errors**: You should never receive a submission containing red highlights (Errors); these must be corrected by the provider prior to reaching you.
* **Warnings (Yellow)**: These indicate unusual findings, often related to NUTS units. If they appear correct based on the submitter's judgment, you can generally ignore them, though highlights remain for your follow-up if needed.
* **Species Name Warnings**: You should check and resolve warnings related to unusual species names.
* **Alerts (Blue)**: These specifically indicate that a species is not recognized as endemic in the reported area. Check these carefully for species movement, identification errors, or database inaccuracies.

---

## The Manual Validation Process

If the data is scientifically sound, follow these steps to finalize the workbook:

1.  **Open the GBIF Worksheet**: Locate the new worksheet added by the system (e.g., **5.Data Output – GBIF**).
2.  **Approve Records**:
    * **identificationVerificationStatus**: Enter your **ORCID ID** in this column for every row.
    * **dynamicProperties**: Enter **1** to approve a row or **0** to reject it.
3.  **Return the File**: Email the manually validated workbook back to the **original data provider**. They are responsible for the final upload to the GBIF repository.

### Handling Rejections

If you find errors requiring correction:

* Email the provider with the subject line: **Errors requiring correction**.
* Provide feedback via email text or manual highlights/comments in the **1.DATA INPUT** sheet.
* Ask them to send their corrected data to the validation tool, and then submit for manual validation once it passes all checks. 
* **Important**: Do not add your ORCID and **delete the GBIF submission page** (5.Data Output – GBIF) before returning the file to prevent accidental submission of invalid data.

---

## Adding New Species to the Reference List

If you confirm a species is scientifically valid but it is missing from the system's database, you can add it permanently to prevent future warnings.

1.  **Access the Form**: Click "Update Species Reference List" in the footer of any system notification email.
2.  **Fill Out the Form**:
    * **Species Name**: Type the full scientific name (e.g., *Aedes koreicus*).
    * **Species Group**: Select 'vectors' or 'hosts'.
    * **GBIF Taxonomic Key (Optional but recommended)**: Find the number at the end of the URL on the official [GBIF species search page](https://www.gbif.org/species/search) to ensure an exact match.
3.  **Submit**: The system will query the GBIF database, retrieve the official taxonomic record, and update the central reference files.

---
