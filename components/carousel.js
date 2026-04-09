class BoardCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.currentIndex = 0;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const elements = Array.from(this.querySelectorAll("element"));

        this.shadowRoot.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
    }

    .carousel {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .viewport {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .track {
      display: flex;
      height: 100%;
      transition: transform 0.5s ease;
    }

    .slide {
      min-width: 100%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }

    /* Background image */
    .card-image {
        width: 100%;
        height: 80vh;
    }
    
    .slide img {
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    
    .card-body {
    position: absolute;
    bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.47);
    }

    /* Overlay for readability */
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1;
    }

    /* Content */
    .content {
      position: relative;
      z-index: 2;
      max-width: 900px;
      width: 90%;
      margin: auto;
      text-align: center;
    }

    h2, p {
      margin: 0 0 15px;
    }

    h2 {
      font-size: 2rem;
    }

    table {
      width: 100%;
      overflow: hidden;
    }

    td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
    }

    td:first-child {
      font-weight: 600;
    }

    td:last-child {
      text-align: right;
    }

    tr:last-child td {
      border-bottom: none;
    }

    /* Buttons */
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.2s;
    }

    button:hover {
      background: rgba(0,0,0,0.7);
    }

    #prev {
      left: 20px;
    }

    #next {
      right: 20px;
    }

    /* No image fallback */
    .no-image {
      background: #333;
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    @media (max-width: 600px) {
      h2 {
        font-size: 1.5rem;
      }

      table {
        font-size: 0.85rem;
      }
    }
  </style>

  <div class="carousel">
    <button id="prev">←</button>
    <div class="viewport">
      <div class="track">
        ${elements.map(el => {
            const title = el.querySelector("h2, p")?.outerHTML || "";
            const img = el.querySelector("img")?.outerHTML || "";
            const table = el.querySelector("table")?.outerHTML || "";

            return `
      <div class="slide">
      <div class="card-header">
            ${title}
          </div>
          <div class="card-image">
            ${img}
          </div>
          <div class="card-body">
            ${table}
          </div>
      </div>
    `;
        }).join("")}
      </div>
    </div>
    <button id="next">→</button>
  </div>
`;

        this.track = this.shadowRoot.querySelector(".track");

        this.shadowRoot.getElementById("prev")
            .addEventListener("click", () => this.prev());

        this.shadowRoot.getElementById("next")
            .addEventListener("click", () => this.next());

        this.update();
    }

    update() {
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    next() {
        const total = this.querySelectorAll("element").length;
        this.currentIndex = (this.currentIndex + 1) % total;
        this.update();
    }

    prev() {
        const total = this.querySelectorAll("element").length;
        this.currentIndex = (this.currentIndex - 1 + total) % total;
        this.update();
    }

    async loadFromJSON(url) {
        const res = await fetch(url);
        const data = await res.json();

        this.innerHTML = data.map(board => `
    <element>
      ${board.image ? `<img src="${board.image}" alt="Photo of ${board.title}" />` : `<img src="/assets/boards/flippie.jpg" alt"No photo available"/>`}
      <h2>${board.title}</h2>
      <table>
        ${board.members.map(m => `
          <tr><td>${m[0]}</td><td>${m[1] ?? ""}</td></tr>
        `).join("")}
      </table>
    </element>
  `).join("");

        this.render();
    }
}

customElements.define("board-carousel", BoardCarousel);