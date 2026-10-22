import { defineConfig, devices } from "@playwright/test";

// On Verimind the run's browser, sign-in, and org address are set for you
// (docs/api/reference.md, Browsers): no credentials in the suite.
export default defineConfig({
  testDir: "./tests",
  timeout: 90_000,
  reporter: [["html", { open: "never" }], ["list"]],
  use: { trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
