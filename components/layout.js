import "./header.js";
import "./footer.js";

class SiteLayout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <site-header></site-header>
      <div class="page">
        <img src="../assets/linea-recta-yuri-light.svg" class="yuri yuri-light">
        <img src="../assets/linea-recta-yuri-dark.svg" class="yuri yuri-dark">
      <main>
        ${this.innerHTML}
      </main>
      </div>
      <site-footer></site-footer>
    `;
    }
}

customElements.define("site-layout", SiteLayout);