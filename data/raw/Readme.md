# Raw NCPOR Data

This folder contains the current raw/provisional data collected for
the PolarConnect prototype.

## Current dataset

`ncpor_news_raw.json`

This file currently contains 30 NCPOR news records being used for
initial RAG and application testing.

## Important

This is NOT the final normalized database dataset.

The data will later go through:

1. Source verification
2. Exact article URL verification
3. Data cleaning
4. Normalization
5. Classification
6. Database schema validation

Some fields may be derived by PolarConnect and should not be treated
as fields directly provided by NCPOR.

This dataset is committed at this stage so the RAG team can begin
testing while the database/data audit is in progress.