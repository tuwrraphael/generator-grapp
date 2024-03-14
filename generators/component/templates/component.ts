import template from "./<%= componentname %>.html";
import "./<%= componentname %>.scss";

export class <%= componentname %> extends HTMLElement {
   
    private rendered = false;
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.rendered) {
            this.rendered = true;
            this.innerHTML = template;
        }
    }

    disconnectedCallback() {

    }
}

export const <%= componentname %>TagName = "<%= tagname %>";
customElements.define(<%= componentname %>TagName, <%= componentname %>);
