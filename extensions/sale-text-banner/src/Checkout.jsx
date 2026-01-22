import '@shopify/ui-extensions/preact';
import { render } from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <>
        <s-banner heading={shopify.settings.value.heading} tone={shopify.settings.value.status} dismissible>
          {shopify.settings.value.description}
        </s-banner>
      <s-clickable>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="base" alignItems="center">
          <s-grid-item>
            <s-product-thumbnail
              src="https://cdn.shopify.com/s/files/1/0590/1176/0287/files/ChatGPT_Image_Jan_7_2026_11_04_45_AM.png"
            ></s-product-thumbnail>
          </s-grid-item>
          <s-grid-item>
            <s-section heading="Rewards">
              <s-paragraph>
                $99
              </s-paragraph>
            </s-section>
          </s-grid-item>
        </s-grid>
      </s-clickable>
    </>
  );
}

