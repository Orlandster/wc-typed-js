import { LitElement, html } from '@polymer/lit-element';

class TypedJS extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            strings: {type: Array},
            stringsElement: {type: String},
            typeSpeed: {type: Number},
            startDelay: {type: Number},
            backSpeed: {type: Number},
            smartBackspace: {type: Boolean},
            shuffle: {type: Boolean},
            backDelay: {type: Number},
            fadeOut: {type: Boolean},
            fadeOutClass: {type: String},
            fadeOutDelay: {type: Boolean},
            loop: {type: Boolean},
            loopCount: {type: Number},
            showCursor: {type: Boolean},
            cursorChar: {type: String},
            autoInsertCss: {type: Boolean},
            attr: {type: String},
            bindInputFocusEvents: {type: Boolean},
            contentType: {type: String},
        }
    }

    render(properties) {
        return html`
        <div><slot></slot></div>
        `;
    }
}

window.customElements.define('typed-js', TypedJS);