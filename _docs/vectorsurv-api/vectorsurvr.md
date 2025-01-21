---
title: vectorSurvR Package
permalink: /docs/vectorsurvr/
---

# Getting Started with vectorsurvR

The vectorsurvR package is an easy way to perform analysis and create custom visualizations using your VectorSurv data. You don’t need to be a programmer. VectorSurvR provides easy-to-use functions to pull exactly the data you need from the API, and makes it available as a starting point for calculations and visualizations.

To get started:

## 1. Install R and RStudio

If you haven’t already, download and install [R](https://cran.r-project.org/) and [RStudio](https://posit.co/downloads/).

## 2. Install vectorsurvR

There are two ways to install vectorsurvR:

### Install from CRAN (Recommended)

To install the stable version of vectorsurvR from CRAN, run:

````
```{r}

install.packages("vectorsurvR")

```
````

### Install from GitHub (Development Version)

To install the latest development version of vectorsurvR from GitHub, you need the devtools package. Run:

````
```{r}

# Install devtools if not already installed
if (!require("devtools")) {
  install.packages("devtools")
}

# Install vectorsurvR from GitHub
devtools::install_github("UCD-DART/vectorsurvR")

```
````

## 3. Load package
````
```{r}

library(vectorsurvR)

```
````

## 4. Next Steps

-   Refer to our vectorsurvR [Training Series](https://www.youtube.com/watch?v=2BfMG0P6Ndc&list=PLbSUoxtSzuqQFhsquussQDNJdwt2-k1bh) on Youtube for detailed instructions on using vectorsurvR
-   Read the [User Guide](https://github.com/UCD-DART/vectorsurvR/tree/main)
