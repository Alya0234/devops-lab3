const { test, expect } = require('@playwright/test');

test('Lab 3 application homepage loads', async ({ page }) => {
    await page.goto('http://localhost:3001');

    await expect(page.locator('body')).not.toBeEmpty();
});

test('Health endpoint returns healthy status', async ({ request }) => {
    const response = await request.get('http://localhost:3001/health');

    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual({ status: 'healthy' });
});

test('Feature flag endpoint returns a boolean', async ({ request }) => {
    const response = await request.get('http://localhost:3001/api/feature');

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.feature).toBe('welcomeBanner');
    expect(typeof data.enabled).toBe('boolean');
});
