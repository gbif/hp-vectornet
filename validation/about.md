---
layout: default
title: About the Vector Data Validation Tool
---

# Vector Data Validation Tool

## Introduction

The Vector Data Validation Tool is an email-based tool which aims to simplify the process of submitting and verifying vector data to GBIF. 

## Purpose of the System

The VectorNet Data Validation System is designed to ensure that all vector surveillance data (ticks, mosquitoes, midges, and sandflies) is accurate, consistent, and complete before submission to the VectorNet GBIF repository. The system helps data providers identify common errors automatically and provides a streamlined workflow for expert scientific review.

---

## The Process Flow

The following workflow outlines the journey of surveillance data from initial entry to final publication on GBIF.

### 1. Data Entry and Technical Validation

* **Data Entry**: Providers enter surveillance data into a standard Excel template, which includes built-in dropdown lists and header instructions to assist with accuracy.
* **Email Submission**: The completed template is emailed to `vector.validation@efsa.epimundi.com`.
* **Automated Feedback**: The system automatically checks the file for **Errors** (blocking issues) and **Warnings** (unusual data).
* **Correction Loop**: If errors are found, the provider receives an annotated spreadsheet and a validation map to fix the issues and resubmit.

### 2. Expert Scientific Review

* **Submission for Review**: Once a file has zero errors, the provider uses a unique "Submit to Review" link to forward the data to a Reference Entomologist.
* **Scientific Evaluation**: The Reference Entomologist reviews the scientific validity of the data, focusing on system-flagged warnings and "alerts" regarding species distribution.
* **Manual Approval**: If approved, the expert adds their **ORCID ID** and an approval code (1) to each row in a final GBIF-formatted worksheet.

### 3. Final Publication

* **File Return**: The Reference Entomologist emails the fully validated workbook back to the original data provider.
* **GBIF Submission**: The data provider performs the final step by submitting the validated file directly to the GBIF repository.

---

## Key Roles

| Role | Primary Responsibility |
| --- | --- |
| **Data Provider** | Enters data, fixes technical errors, and performs final GBIF upload. |
| **Reference Entomologist** | Performs scientific quality assurance and validates species identification. |
| **EFSA Manager** | Manages system access (authorized users) and monitors overall activity. |

## More information

* [Guide for data submitters](/validation/submitters/)
* [Guide for reference entomologists](/validation/ref_entos/)
* [Frequently asked questions](/validation/faq/)

[Download User Documentation]({{ '/assets/pdf/user_documentation.pdf' | relative_url }}){: .button .is-primary}

[Download FAQ]({{ '/assets/pdf/FAQ.pdf' | relative_url }}){: .button .is-primary}
