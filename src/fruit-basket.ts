import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fruit-basket')
export class FruitBasketAp extends LitElement {
  static styles = css`
    main {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      width: 100vw;
    }
    main > * {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 100%;
    }
    main > div:first-of-type {
      height: 30%;
    }
  `;

  render() {
    return html`
      <main>
        <div>Fruits</div>
        <div>Basket</div>
      </main>
    `;
  }
}
