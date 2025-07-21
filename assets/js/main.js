import { products } from './products.js';
import { dpTeam } from './team.js';
import { usefulLinks } from './usefulLinks.js';

export function loadHeader() {
  fetch("./parts/header.html")
    .then((response) => response.text())
    .then((html) => (document.getElementById("header").innerHTML = html));
}

export function loadProducts() {
  fetch("./parts/product-card.html")
    .then((response) => response.text())
    .then((template) => {
      const productsGrid = document.getElementById("products-grid");
      
      products.forEach((product) => {
        let card = template
          .replaceAll("{{image}}", product.image)
          .replaceAll("{{title}}", product.title)
          .replaceAll("{{url}}", product.url);
        
        productsGrid.innerHTML += card;
      });
    });
} 

export function loadUsefulLinks() {
  fetch("./parts/link-card.html")
    .then((response) => response.text())
    .then((template) => {
      const linksGrid = document.getElementById("useful-links-grid");
      
      usefulLinks.forEach((link) => {
        let card = template
          .replaceAll("{{title}}", link.title)
          .replaceAll("{{description}}", link.content)
          .replaceAll("{{url}}", link.url);
        
        linksGrid.innerHTML += card;
      });
    });
}

export function loadTeam() {
  fetch("./parts/team-card.html")
    .then((response) => response.text())
    .then((template) => {
      const teamGrid = document.getElementById("team-grid");
      
      dpTeam.forEach((member) => {
        let card = template
          .replaceAll("{{url}}", member.url)
          .replaceAll("{{title}}", member.title);
        
        teamGrid.innerHTML += card;
      });
    });
}