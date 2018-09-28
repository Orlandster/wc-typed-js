import { LitElement, html } from '@polymer/lit-element';

class TypedJS extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {

        }
    }

    render(properties) {
        return html`
        <div><slot></slot></div>
        `;
    }
}

window.customElements.define('typed-js', TypedJS);