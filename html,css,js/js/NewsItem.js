class NewsItem extends  HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        let img;
        let summary;
        let url;
        if(this.hasAttribute('img')) {
            img = this.getAttribute('img');
        }
        if(this.hasAttribute('summary')) {
            summary = this.getAttribute('summary');
        }
        if(this.hasAttribute('url')) {
            url = this.getAttribute('url');
        }

        let content = `
                    <style>
                        :host {
                            all: initial; /* 1st rule so subsequent properties are reset. */
                            display: block;
                        }
                        .thumb {
                            padding: 1px; 
                            border: 1px solid #dcdcdc;
                        }
                        .summary {
                            font-style: italic;
                        }
                        .more {
                            text-transform: uppercase;
                            font-size: 11px;
                            color: rgba(0,0,0,0.66);
                        }
                    </style>
                `;

        if (img) {
            content += `<img class="thumb" src="${img}" width="100">`;
        }
        if (summary) {
            content += `<p class="summary">${summary}</p>`;
        }
        if (url) {
            content += `<p><a class="more" href="${url}">More</a></p>`;
        }

        shadowRoot.innerHTML = content;
    }
}
// Defined custom element
customElements.define('news-item', NewsItem);
