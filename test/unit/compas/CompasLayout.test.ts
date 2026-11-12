import { expect, fixture, html } from '@open-wc/testing';
import { XMLEditor } from '@openscd/oscd-editor';

import { CompasLayout } from '../../../src/addons/CompasLayout.js';

describe('CompasLayout editor tabs', () => {
  let element: CompasLayout;
  let tabs: HTMLElement;
  let plugin: HTMLElement;

  beforeEach(async () => {
    element = await fixture<CompasLayout>(html`
      <compas-layout
        .host=${new EventTarget()}
        .editor=${new XMLEditor()}
        .plugins=${[
          {
            name: 'Test editor',
            kind: 'editor',
            active: true,
            requireDoc: false,
          },
        ]}
      ></compas-layout>
    `);
    expect(element).to.be.instanceOf(CompasLayout);
    tabs = element.shadowRoot!.querySelector<HTMLElement>('oscd-menu-tabs')!;
    plugin = document.createElement('div');
    element.shadowRoot!.append(plugin);
  });

  async function toggleTabs(detail?: { visible?: boolean }): Promise<void> {
    plugin.dispatchEvent(
      new CustomEvent('toggle-editor-tabs', {
        detail,
        bubbles: true,
        composed: true,
      })
    );
    await element.updateComplete;
  }

  it('hides and restores tabs for events bubbling from a plugin', async () => {
    expect(getComputedStyle(tabs).display).not.to.equal('none');
    await toggleTabs({ visible: false });
    expect(getComputedStyle(tabs).display).to.equal('none');
    await toggleTabs({ visible: true });
    expect(getComputedStyle(tabs).display).not.to.equal('none');
  });

  it('restores tabs when visibility or event detail is omitted', async () => {
    await toggleTabs({ visible: false });
    await toggleTabs({});
    expect(getComputedStyle(tabs).display).not.to.equal('none');
    await toggleTabs({ visible: false });
    await toggleTabs();
    expect(getComputedStyle(tabs).display).not.to.equal('none');
  });

  it('handles toggle events after the layout is reconnected', async () => {
    const parent = element.parentElement!;
    element.remove();
    parent.append(element);
    await toggleTabs({ visible: false });
    expect(getComputedStyle(tabs).display).to.equal('none');
    await toggleTabs({ visible: true });
    expect(getComputedStyle(tabs).display).not.to.equal('none');
  });
});
