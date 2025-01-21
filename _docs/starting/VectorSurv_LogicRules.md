---
title: "VectorSurv Validation Logic Rules"
permalink: /logicRules/
---

VectorSurv utilizes count validators in instances where pools of vectors are created from vector collection records, such as when a pool of *Culex pipiens* is created from a gravid trap collection. These count validators utilize the sex, lifestage, and species count data entered for the collection records and compares them against any associated pool record data to ensure that logical combinations exists. If the validator rules are broken, the data will not be savable within the VectorSurv database.

To assist VectorSurv agency understand these validation rules, this document provides 9 validation rule examples that demonstrate when and why a collection record and pool record combination may not meet the validator requirements.

***

**Rule:** Pools of lower order taxonomy (ie species and sub-species) counts must be represented specifically in the collection.

- A Pool of *Culex pipiens* cannot be created unless there are enough *Culex pipiens* on the collection. 

**Example:** The collection abundance = 50 *Culex pipiens*.

- Two pools of 25 *Culex pipiens* would be valid.

- Two pools of 35 *Culex pipiens* would NOT be valid.

***

**Rule:** The pool’s sex condition must also be present in the collection.

- A Pool of *Culex pipiens* Female-Unfed cannot be created unless there are enough *Culex pipiens* Female-Unfed on the collection. 

**Example:** The collection abundance = 50 *Culex pipiens* Female-Unfed.

- Two pools of 25 *Culex pipiens* Female-Unfed would be valid.

- Two pools of 35 *Culex pipiens* Female-Unfed would NOT be valid.

***

**Rule:** Pools of higher order taxonomy (eg genus) counts can be aggregates of lower order taxonomy specimens in the collection.

**Example:** The collection abundance = 25 *Culex pipiens* & 25 *Culex tarsalis*.

- A pool of 50 *Culex* (unspecified) would be valid.

***

**Rule:** Pools of lower order taxonomy cannot be drawn out from higher order abundance.

**Example:** The collection abundance =  50 *Culex* (unspecified).

- Two pools of 25 *Culex pipiens* would NOT be valid.

***

**Rule:** Pools with general sex conditions can also be aggregates of more specific sex conditions found in the abundance. 

**Example:** The collection abundance = 25 *Culex pipiens* Female-Unfed & 25 *Culex pipiens* Female-Bloodfed.

- A pool of 50 *Culex pipiens* Female-Mixed would be valid.

***

**Rule:** Pools with specific sex conditions cannot be drawn of more general sex conditions found in the abundance. 

**Example:** The collection abundance = 50 *Culex pipiens* Female-mixed.

- A pool of 25 *Culex pipiens* Female-Unfed would NOT be valid.

***

**Rule:** Pools on collections with a “presence” trap type are considered to be valid if that species & sex/condition is present in the collection abundance.

**Example:** *Culex tarsalis* Female-Unfed is shown to be “present” in the collection of trap type OVI-PRES.

- A pool of 50 *Culex tarsalis* Female-Unfed would be valid.

- A pool of 50 *Culex* (unspecified) Female-Mixed would be valid.

**Example:** Only *Aedes* (unspecified) Female-Mixed is shown to be “present” in the collection of trap type OVI-PRES.

- A pool of 50 *Aedes aegypti* Female-Unfed would NOT be valid.

- A pool of 50 *Aedes aegypti* Female-Mixed would NOT be valid.

- A pool of 50 *Aedes* (unspecified) Female-Unfed would NOT be valid.

- A pool of 50 *Aedes* (unspecified) Female-Mixed would be valid.

***

**Rule:** Pools with values in the “Other Sites” field are counted differently. If the number of specimens from the “Other Sites” is designated in parenthesis (eg “123456(25)”), then the value is subtracted from the current pool’s count. If there is no indication of the number of specimens contributed by the “Other Site”, then the current pool's count is considered to be just 1 for the purpose of validation.

**Example:** The collection abundance = 40 *Culex pipiens* Female-mixed.

- A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456(20)” would be valid. The effective count for validation would be 30 (ie 50 - 20).

- A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456(5)” would NOT be valid. The effective count for validation would be 45 (ie 50 - 5).

**Example:** The collection abundance = 40 *Culex pipiens* Female-mixed.

- A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456” would be valid. The effective count for validation would be 1.

***

**Rule:** Species mixes (eg "*Culex pipiens/quinquefasciatus*") are treated like a higher order taxonomy.

**Example:** The collection abundance = 25 *Culex pipiens* & 25 *Culex quinquefasciatus*.

- A pool of 50 *Culex pipiens/quinquefasciatus* would be valid.

**Example:** The collection abundance =  50 *Culex pipiens/quinquefasciatus*.

- A pool of 25 *Culex pipiens* would NOT be valid.

***

## Validation Logic Rules in the VectorSurv API

To allow for greater flexibility when accessing the VectorSurv system programatically through the VectorSurv API, slight differences in data validation are allowed. These difference are listed below.

***

**Difference:** Pool counts are validated against the total abundance on the collection. Pools of lower order taxonomy (ie species and sub-species) counts must have themselves or a parent taxonomy represented in the collection. Additionally, pools of higher-order taxonomy must have themselves or children taxonomy represented in the collection.

- A pool of *Culex pipiens* cannot be created unless there are enough *Culex pipiens*, *Culex*, *Culicidae*, etc. on the collection. 

**Example:** The collection abundance = 50 *Culex pipiens*.

- Two pools of 25 *Culex pipiens* would be valid.

- Two pools of 25 *Culex* would be valid.

- Two pools of 35 *Culex pipiens* would NOT be valid.

**Example:** The collection abundance = 50 *Culex* (unspecified).

- Two pools of 25 *Culex pipiens* would be valid.

- Two pools of 25 *Culex*  would be valid.

- Two pools of 35 *Culex pipiens* would NOT be valid.

**Example:** The collection abundance = 25 *Culex pipiens* & 25 *Culex tarsalis*.

- A pool of 50 *Culex* (unspecified) would be valid.

***

**Difference:** The pool’s sex condition must also be present in the collection. Pools with general sex conditions can also be aggregates of more specific sex conditions found in the abundance. Pools with specific sex conditions can be drawn of more general sex conditions found in the collection. 

- A pool of *Culex pipiens* Female-Unfed cannot be created unless there are enough *Culex pipiens* Female-Unfed on the collection. 

**Example:** The collection abundance = 50 *Culex pipiens* Female-Unfed.

- Two pools of 25 *Culex pipiens* Female-Unfed would be valid.

- Two pools of 35 *Culex pipiens* Female-Unfed would NOT be valid.

**Example:** The collection abundance = 25 *Culex pipiens* Female-Unfed & 25 *Culex pipiens* Female-Bloodfed.

- A pool of 50 *Culex pipiens* Female-Mixed would be valid.

**Example:** The collection abundance = 50 *Culex pipiens* Female-mixed.

- A pool of 25 *Culex pipiens* Female-Unfed would be valid.

***

**Difference:** Pools on collections with a “presence” trap type are considered to be valid if that species & sex/condition is present in the collection abundance.

**Example:** *Culex tarsalis* Female-Unfed is shown to be “present” in the collection of trap type OVI-PRES.

- A pool of 50 *Culex tarsalis* Female-Unfed would be valid.

- A pool of 50 *Culex* (unspecified) Female-Mixed would be valid.

**Example:** Only *Aedes* (unspecified) Female-Mixed is shown to be “present” in the collection of trap type OVI-PRES.

- A pool of 50 *Aedes aegypti* Female-Unfed would be valid.

- A pool of 50 *Aedes aegypti* Female-Mixed would be valid.

- A pool of 50 *Aedes* (unspecified) Female-Unfed would be valid.

- A pool of 50 *Aedes* (unspecified) Female-Mixed would be valid.

***

**Difference:** Pools with values in the “Other Sites” field are counted differently. If the number of specimens from the “Other Sites” is designated in parenthesis (eg “123456(25)”), then the value is subtracted from the current pool’s count. 

**Example:** The collection abundance = 40 *Culex pipiens* Female-mixed.

- A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456(20)” would be valid. The effective count for validation would be 30 (ie 50 - 20).

- A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456(5)” would NOT be valid. The effective count for validation would be 45 (ie 50 - 5).

If there is no indication of the number of specimens contributed by the “Other Site”, then the current pool's count is considered to be just 1 for the purpose of validation.

**Example:** The collection abundance = 40 *Culex pipiens* Female-mixed.

A Pool of 50 *Culex pipiens* Female-mixed and an Other Sites value of “123456” would be valid. The effective count for validation would be 1.

***

**Difference:** Species mixes (eg *Culex pipiens/quinquefasciatus*) are treated like a higher order taxonomy.

**Example:** The collection abundance = 25 *Culex pipiens* & 25 *Culex quinquefasciatus*.

- A pool of 50 *Culex pipiens/quinquefasciatus* would be valid.

**Example:** The collection abundance =  50 *Culex pipiens/quinquefasciatus*.

- A pool of 25 *Culex pipiens* would be valid.
