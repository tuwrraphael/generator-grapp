import template from "./<%= componentname %>.html";
import "./<%= componentname %>.scss";

export class <%= componentname %> extends HTMLElement {
   
    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }
}

customElements.define("<%= tagname %>", <%= componentname %>);
