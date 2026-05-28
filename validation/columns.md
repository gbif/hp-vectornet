---
layout: default
title: Columns 
---

## Introduction

The table below lists all possible data entry columns alphabetically. It details their purpose, valid formats, and indicates whether they are required for **Vector Data** and/or **SLR** data submissions.

| Column | Vector Data | SLR | Description |
|:---|:---|:---|:---|
| <a id="associatedtaxa"></a>*associatedTaxa* | 🔴 Required | ⚪ Optional | Provide host species scientific name (only for vector collected on hosts, otherwise leave blank). If the name is not recognised, contact the help desk to add new species names to the standard list. |
| <a id="bibliographiccitation"></a>*bibliographicCitation* | ⚪ Optional | 🔴 Required | A bibliographic reference for the resource. When available, use a DOI in the standard format. |
| <a id="collectioneffortenddate"></a>*CollectionEffortEndDate* | 🔴 Required | 🔴 Required | Date on which the event ended. This must be in a format recognised by Excel as a date (depends on software localisation) |
| <a id="collectioneffortstartdate"></a>*CollectionEffortStartDate* | 🔴 Required | 🔴 Required | Date on which the event started. This must be in a format recognised by Excel as a date (depends on software localisation) |
| <a id="coordinateprecision"></a>*coordinatePrecision* | 🔴 Required | ⚪ Optional | A decimal representation of the precision of the coordinates. This is simply the value '1' preceded by the same number of decimal places as your geographic coordinates. |
| <a id="country"></a>*country* | 🔴 Required | 🔴 Required | Country where the sampling took place. Use values from the standard list. |
| <a id="datasetname"></a>*datasetName* | ⚪ Optional | ⚪ Optional | Automatically generated dataset ID. This is used to track submission of the same dataset. Do not remove this column. If resubmitting a previous version (without the column), copy the data from the submitted version to avoid duplicate data submission. |
| <a id="decimallatitude"></a>*decimalLatitude* | 🔴 Required | 🔴 Required | The geographic latitude in decimal degrees of the geographic center of the sampling location. This is the "Y coordinate" or degrees North of the equator. This should be in a format recognised by Excel as a decimal number (depends on software localisation). |
| <a id="decimallongitude"></a>*decimalLongitude* | 🔴 Required | 🔴 Required | The geographic longitude in decimal degrees of the geographic center of the sampling location. This is the "X coordinate" or degrees east or west of the Grenwich meridian.This should be in a format recognised by Excel as a decimal number (depends on software localisation). |
| <a id="eventremarks"></a>*eventRemarks* | ⚪ Optional | ⚪ Optional | Remark about circumtances that could have influenced the collection. Free text. |
| <a id="fieldnumber"></a>*fieldNumber* | ⚪ Optional | ⚪ Optional | An identifier given to the event in the field. Often serves as a link between field notes and the event. Free text. |
| <a id="habitat"></a>*habitat* | ⚪ Optional | ⚪ Optional | A category or description of the habitat in which the event occurred. Free text. |
| <a id="highergeographyid"></a>*higherGeographyID* | 🔴 Required | 🔴 Required | NUTS3 code (or equivalent GAUL identifier) of the sampling event. Use only valid values from the standard list. In case of error, check the interactive map interface to identify the correct code. |
| <a id="identificationremarks"></a>*identificationRemarks* | ⚪ Optional | ⚪ Optional | Remark about the vector identification, i.e. the method used for vector identification. |
| <a id="identifiedbyid"></a>*identifiedByID* | ⚪ Optional | ⚪ Optional | A list (concatenated and separated) of the globally unique identifier for the person, people, groups, or organizations responsible for assigning the dwc:Taxon to the subject. |
| <a id="individualcount"></a>*individualCount* | 🔴 Required | ⚪ Optional | The number of individuals of the specific vector species caught during the specific sample event. |
| <a id="lifestage"></a>*lifeStage* | ⚪ Optional | ⚪ Optional | The life stage of the organism(s) at the time the occurrence was recorded. Select from the standard list. |
| <a id="locality"></a>*locality* | ⚪ Optional | ⚪ Optional | Description of the surveillance site where the sample event(s) took place. Free text. |
| <a id="locationaccordingto"></a>*locationAccordingTo* | ⚪ Optional | 🔴 Required | Provide the source of location information (GPS or centroid). |
| <a id="locationremarks"></a>*locationRemarks* | ⚪ Optional | ⚪ Optional | Indoor/outdoor collection of the vector species |
| <a id="occurrenceremarks"></a>*occurrenceRemarks* | ⚪ Optional | 🔴 Required | User-reported vector distribution status. For SLR, use values from the standard list |
| <a id="projectid"></a>*projectID* | 🔴 Required | ⚪ Optional | A unique identifier for the project from which a dataset is derived. This should include the standard EFSA-assigned project ID, but may also include country- or institution-specific identifiers, separated by \| |
| <a id="recordnumber"></a>*recordNumber* | ⚪ Optional | ⚪ Optional | Automatically generated record ID. Do not delete this column. |
| <a id="samplesizeunit"></a>*sampleSizeUnit* | 🔴 Required | ⚪ Optional | The unit in which the intensity of the vector collection effort is expressed. Select from the standard list. |
| <a id="samplesizevalue"></a>*sampleSizeValue* | 🔴 Required | ⚪ Optional | A numeric value to describe the size (time duration, length, area, or volume) of a sample taken during a sampling event, i.e. the number of units to measure the intesity of the samplingEffort. |
| <a id="samplingprotocol"></a>*samplingProtocol* | 🔴 Required | ⚪ Optional | Vector colletion method. Select from the standard list. |
| <a id="scientificname"></a>*scientificName* | 🔴 Required | 🔴 Required | Vector species using Darwin Core Taxon. When recording species complexes or 's.l.', use the genus (the most detailed taxonomic level available from the DWC that provides certain identification). |
| <a id="sex"></a>*sex* | ⚪ Optional | ⚪ Optional | The sex of the biological individual(s) represented in the occurrence. Select from the standard list. |
| <a id="verbatimelevation"></a>*verbatimElevation* | ⚪ Optional | ⚪ Optional | The original description of the elevation (altitude, usually above sea level) of the Location. |
| <a id="verbatimidentification"></a>*verbatimIdentification* | ⚪ Optional | 🔴 Required | The full taxonomic identification, including, if necessary, vector species complexes, variants, or sensu lato (s.l.). If identification matches exactly the available DWC scientificName, this can be left blank, or the same value can be entered. When sensu stricto or s.s. is used, this corresponds exactly to the DWC scientificName. |
| <a id="verbatimsitenames"></a>*verbatimSiteNames* | 🔴 Required | ⚪ Optional | Number of the vector collection device to differentiate different devices at the same site. This is limited to three digits. |
