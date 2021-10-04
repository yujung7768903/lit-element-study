import { LitElement, html, css } from 'lit-element';

class childElement extends LitElement {
    static get properties() {
        return {
            title: {type: String},
        }
    }

    constructor() {
        super();
        this.title = 'child-element';
    }

    static get styles() {
        return css `
            :host {
                background-color: red;
            }
        `
    }

    render() {
        return html`
            <div id="child-element">
                <p>${this.title}</p>            
                <button
                    @click="${() => this.hideChild()}"
                >X</button>
            </div>
        `
    }

    hideChild() {
        console.log("hideChild() 실행");
        const hideEvent = new CustomEvent('hide-child', {detail: ''});
        this.dispatchEvent(hideEvent);
    }

}

customElements.define('child-element', childElement);
