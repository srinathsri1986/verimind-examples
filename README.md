# Verimind examples

Sample test suites for [Verimind](https://github.com/srinathsri1986/verimind). Synthetic data only.

## salesforce/

A Playwright suite for Salesforce Lightning. Verimind signs the browser in to your org, creates the records listed in `salesforce/verimind/salesforce-data.json` before the run, and deletes them afterwards. The suite holds no credentials or org addresses.

Start a run with `source_url` set to this repository and `source_path` set to `salesforce`, and choose a stored Salesforce credential.
