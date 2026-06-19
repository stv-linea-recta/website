const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="/index.css">

<div class="header">
  <div class="primary-header">

    <img class="logo" src="/assets/linea-recta-text.svg"
         alt="Linea Recta">

    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-button-container">
      <div class="menu-button"></div>
    </label>

          <nav>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li class="dropdown">
            <a href="javascript:void(0)">Association</a>
            <div class="dropdown-content">
              <a href="/pages/board.html">Board</a>
              <a href="/pages/committees.html">Committees</a>
              <a href="/pages/membership.html">Membership</a>
              <a href="/pages/documents.html">Documents</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)">Trainings</a>
            <div class="dropdown-content">
              <a href="/pages/schedule.html">Schedule</a>
              <a href="/pages/open-trainings.html">Open trainings</a>
              <a href="/pages/external-trainings.html">External</a>
              <a href="/pages/sister-trainings.html">Sister trainings</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)">Members</a>
            <div class="dropdown-content">
              <a href="/pages/videos.html">Videos</a>
              <a href="/pages/barshifts.html">Barshifts</a>
              <a href="/pages/nstb.html">NSTB</a>
              <a href="/pages/competitions.html">Competitions</a>
            </div>
          </li> 
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </nav>
      <a href="javascript:darkmode()" class="darkmode-toggle logo"><img src="/assets/darkmode.svg"
                                                                          alt="darkmode-toggle"></a>
  </div>
</div>
`;

class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.setActiveLink();
        this.setupDarkMode();
        this.setupLogoClick();
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "/index.css");
        this.shadowRoot.appendChild(linkElem);

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    setActiveLink() {
        const links = this.shadowRoot.querySelectorAll("a");
        const path = window.location.pathname;

        links.forEach(link => {
            if (path.includes(link.getAttribute("href"))) {
                link.classList.add("active");
            }
        });
    }

    setupDarkMode() {
        const toggle = this.shadowRoot.getElementById("darkToggle");
        toggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");
        });
    }

    setupLogoClick() {
        const logo = this.shadowRoot.querySelector(".logo");
        logo.addEventListener("click", () => {
            window.location.href = "/";
        });
    }
}

customElements.define("site-header", SiteHeader);