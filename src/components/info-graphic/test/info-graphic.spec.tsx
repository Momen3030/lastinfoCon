import { newSpecPage } from '@stencil/core/testing';
import { InfoGraphic } from '../info-graphic';

describe('info-graphic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InfoGraphic],
      html: `<info-graphic></info-graphic>`,
    });
    expect(page.root).toEqualHtml(`
      <info-graphic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </info-graphic>
    `);
  });
});
