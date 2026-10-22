import { expect, test } from "@playwright/test";
import { field, input, openRecord, record } from "@verimind/salesforce";

// Runs against the run's org, already signed in, with the records from
// verimind/salesforce-data.json (synthetic values only).

test("the account Verimind created shows its fields", async ({ page }) => {
  await openRecord(page, record("account"));
  await page.getByRole("tab", { name: "Details" }).click();
  await expect(field(page, "Account.Name")).toContainText("Verimind Sample Account");
  await expect(field(page, "Account.Industry")).toContainText("Technology");
});

test("the contact belongs to the account", async ({ page }) => {
  await openRecord(page, record("contact"));
  await page.getByRole("tab", { name: "Details" }).click();
  await expect(field(page, "Contact.AccountId")).toContainText("Verimind Sample Account");
});

test("the account's phone can be changed and saved", async ({ page }) => {
  await openRecord(page, record("account"), { mode: "edit" });
  await input(page, "Account.Phone").fill("+91 00 0000 0002");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  await expect(field(page, "Account.Phone")).toContainText("+91 00 0000 0002");
});
