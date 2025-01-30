---
layout: home
title: |
  <div><span class="custom-orange">Vector</span><span class="custom-green">Net</span></div>
  <div>Data portal</div>
description: Sharing validated data on vector occurrences in Europe, to improve preparedness for vector-borne diseases
background:  "/assets/images/placeholders/image.png"
imageLicense: Unknown but should be written here
height: 90vh
cta:
  - text: Occurrences
    href: /occurrence/search
    isPrimary: true
  - text: About
    href: /about
  - text: Contribute
    href: /contribute
  - text: Related
    href: /related
composition:
  - type: heroImage # the block type
  - type: features
    data: examples.couldBeAnyName
  - type: split
    data: examples.herbariumImageExample
  - type: dashboard
    inlineData:
      klass: exampleDashboard
      title: "Metrics"
      description: |
        Title and description is optional. On this dashboard we show metrics for the filter `gadmGid: TZA.12.7_1` (Serengeti in GADM)
      config:
        predicate:
          type: equals
          key: gadmGid
          value: "TZA.12.7_1"
        charts:
          [
            occurrenceSummary,
            dataQuality,
            occurrenceIssue,
            iucnCounts,
            iucn,
            year,
            datasetKey,
            taxa,
          ]
        # currently available types as of march 2024: [iucn, license, basisOfRecord, year, synonyms, iucnCounts, country, continent, dwcaExtension, eventId, gadmGid, mediaType, networkKey, publisherKey, publishingCountryCode, protocol, sampleSizeUnit, samplingProtocol, typeStatus, waterBody, collectionCode, institutionCode, stateProvince, identifiedBy, recordedBy, establishmentMeans, month, preparations, datasetKey, taxa, occurrenceIssue, dataQuality, occurrenceSummary, collectionKey, institutionKey, catalogNumber]
  - type: pageMarkdown
  - type: stats
    data: examples.stats
permalink: /
---

Edit `/home.md` to change the text.

Lorem markdownum spatium limes indefessus neque *at* orat aestuat, quicquam ne
flavusque omnibus, virginis socerque sparsos vidimus eundem. Sustinet **ramo
pontum ut** avus quamquam de trabes vestemque cruorem tremor.

Viscera mercibus isdem hebetarat undas! Iubet ora ire unum telis adicit, si
Telephus *valent*, instructo refers. Ille **est resque**, sic ruris erit ante
profana detegeret. Et cogor tractus arboribus prensurum praesens memorantur
neque inplet iussus temeraria merui **fas ecce** aethera dixit fieretque [plura
tollebat altius](http://virgineusque.net/est.html).
