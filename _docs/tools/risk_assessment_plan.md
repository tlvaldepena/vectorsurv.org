---
Title: Risk Assessment Surface Methodology
gateway-url: https://maps.vectorsurv.org/risk
---

This page describes the methodology behind the WNV risk surface maps. Note that these estimates are derived from the Risk Assessment Model found in the [California Mosquito-Borne Virus Surveillance and Response Plan](http://westnile.ca.gov/resources.php) and that other states may use different benchmark values than are described here.


## Background

Every Sunday, surfaces are generated for the prior two weeks starting from a Sunday to a Saturday. For example, if today was the 15th or any day within the week starting on the 15th, the prior two weeks would be from the 1st to the 14th. The initial map, i.e. of California, is reduced to a pixelized grid, where each pixel is 1/32 of a degree. Because the surveillance factors, apart from **Environmental Conditions**, are for a specific point, all points within a pixel are aggregated for that pixel. For example, if two trap sites from which arthropod abundance was estimated came from within the same pixel, those abundance estimates would be combined for that pixel.

There are five surveillance factors that comprise the risk surface: **Environmental Conditions**, **Arthropod Abundance Anomaly**, **Viral Infection Rate**, **Sentinel Chicken Seroconversions**, and **Dead Bird Infections**. Each of these components receives an *Assessment Value* ranging from 1 (lowest risk) to 5 (highest risk), which are then averaged to create the final *Response Level*. Human cases do not factor into the risk calculations because they are considered outcome measures.

## Surveillance Factors

### Environmental Conditions

The **Environmental Conditions** component of the risk assessment is based on the average daily temperature during the previous two weeks.

The *Assessment Values* are assigned for the following benchmarks:

1. Average daily temperature during the previous two weeks was <= 56 F
2. Average daily temperature during the previous two weeks was 57-65 F
3. Average daily temperature during the previous two weeks was 66-72 F
4. Average daily temperature during the previous two weeks was 73-79 F
5. Average daily temperature during the previous two weeks was > 79 F

### Arthropod Abundance Anomaly

The **Arthropod Abundance Anomaly** component of the risk assessment is derived separately for the two primary WNV vectors, *Cx tarsalis* and the *Cx pipiens* complex, and for four trap types, New Jersey light traps, CO2-baited traps, gravid traps, and resting traps. For each species and trap type, the total number collected within a pixel during the previous two weeks is summed and compared to the 5-year average total for the same two week period. That pixel's anomaly value is then interpolated using an inverse-distance weighting process to the pixels within an 8 km zone of the initial pixel. This results in four surfaces for each species, one surface per trap type. For each final pixel, the set of four corresponding pixels are examined and the highest value is chosen to create the final surface for each species.

The *Assessment Values* are assigned for the following benchmarks:

1. Vector abundance during the previous two weeks was well below average (<= 50%)
2. Vector abundance during the previous two weeks was below average (51-90%)
3. Vector abundance during the previous two weeks was average (91-150%)
4. Vector abundance during the previous two weeks was above average (151-300%)
5. Vector abundance during the previous two weeks was well above average (> 300%)

### Viral Infection Rate

The **Viral Infection Rate** component of the risk assessment is also derived separately for the two primary WNV vectors, *Cx. tarsalis* and the *Cx pipiens* complex, although without considering trap type. For each species, the infection rate per 1000 mosquitoes during the previous two weeks is calculated for each pixel by dividing the number of positive pools by the number of mosquitoes tested. This value is interpolated using an inverse-distance weighting process to the pixels within an 8 km zone of the initial pixel. 

The *Assessment Values* are assigned for the following benchmarks:

1. MIR during the previous two weeks = 0
2. MIR during the previous two weeks = 0.1-1.0
3. MIR during the previous two weeks = 1.1-2.0
4. MIR during the previous two weeks = 2.1-5.0
5. MIR during the previous two weeks > 5.0

### Sentinel Chicken Seroconversions

The **Sentinel Chicken Seroconversions** component of the risk assessment is the number of chickens in a flock that develop antibodies to WNV and/or the number of flocks with seropositive chickens during the previous two week period. Notably, there are two defined regions the sentinel flocks: the specific region and the broad region. The specific region is the pixel where the flock is located while the broad region represents the pixels ~241 miles around the pixel with a flock. Pixels in the broad region do not contribute to the risk surface unless there is overlap with mosquito endpoints.

The *Assessment Values* are assigned for the following benchmarks:

1. No serovonversions in the broad region during the previous two weeks
2. One or more seroconversions in the broad region during the previous two weeks
3. One or two seroconversions in a single flock in the specific region during the previous two weeks
4. More than two seroconversions in a single flock or two flocks with one or two seroconversions in the specific region during the previous two weeks
5. More than two seroconversions per flock in multiple flocks in the specific region during the previous two weeks

### Dead Bird Infections

The **Dead Bird Infections** component of the risk assessment is the number of positive dead birds found in a given pixel during the previous three month period. This longer time period reduces the impact of zip code closures during periods of increased WNV transmission. Similar to the **Sentinel Chicken Seroconversions**, there are two defined regions for dead bird infections: the specific region and the broad region. The specific region is the pixel where the dead bird was located while the broad region represents the pixels ~241 miles around the pixel with a dead bird. Pixels in the broad region do not contribute to the risk surface unless there is overlap with mosquito endpoints.

The *Assessment Values* are assigned for the following benchmarks:

1. No positive dead birds in the broad region during the previous three months
2. One or more positive dead birds in the broad region during the previous three months
3. One positive dead bird in the specific region during the previous three months
4. Two to five positive dead birds in the specific region during the previous three months
5. More than five positive dead birds in the specific region during the previous three months

## Risk Surfaces

The final response level is derived from the average of the five *Assessment Values* for a given pixel. The response levels fall into three categories:

1. Normal Season (Average rating 1.0-2.5)
2. Emergency Planning (Average rating 2.6-4.0)
3. Epidemic (4.1-5.0)

These values are averaged separately for *Cx tarsalis* and the *Cx pipiens* complex. For example, in a pixel where the average temperature during the previous two weeks was 83 F (5), the *Cx tarsalis* abundance anomaly was 200% (4), the MIR was 1.5 (3), no seroconversions were detected (1), and one positive bird was found (2), the response level would be the average of these values or 3, which is considered Emergency Planning. 








