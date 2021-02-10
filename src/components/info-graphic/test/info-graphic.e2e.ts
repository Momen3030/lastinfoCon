import { newE2EPage } from '@stencil/core/testing';

describe('info-graphic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<info-graphic></info-graphic>');

    const element = await page.find('info-graphic');
    expect(element).toHaveClass('hydrated');
  });
});
