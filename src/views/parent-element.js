import { LitElement, html, css } from 'lit-element';
import './child-element.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';    

const VisibilityFilters = { 
    SHOW_ALL: 'All',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
  };

class parentElement extends LitElement {

    static get properties() {
        return {
            title: {type: String},
            child: {type: Object},
            childHidden: {
                type: Boolean,
                hasChanged(newVal, oldVal) {
                    console.log("has changed", oldVal, " to ", newVal);
                    return true;
                }
            },
        }
    }

    constructor() {
        super();
        this.title = 'parent-element';
        this.childHidden = true;
    }

    static get styles() {
        return css `
            :host {
                background-color: #5e6673;
            }
            :host([hidden]]) {
                display: none;
            }
            :host-context(#child-element) {
                color : red;
            }
        `
    }
    
    render() {
        return html`
            <div id="parent-element">
                <p>${this.title}</p>
                <button @click="${() => this.showChild()}">child show</button>
            </div>
            <child-element 
                ?hidden="${this.childHidden}"
                @hide-child="${() => this._hideChild()}"
            ></child-element>
        `
    }

    updated(){
        console.log('updated');
      }

    showChild() {
        // this.child = this.shadowRoot.querySelector('#child-element');
        console.log("showChild() 실행");
        this.childHidden = false;
        console.log(this.childHidden);
    }

    _hideChild() {
        console.log("_hideChild() 실행");
        this.childHidden = true;
        console.log(this.childHidden);
    }
}

customElements.define('parent-element', parentElement);