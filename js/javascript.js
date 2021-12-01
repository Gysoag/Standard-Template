/*  Javascript
    Author: Jeffrey Widmer
    Company: GYSO AG
    Date: 25.11.2021
*/

/******************************************* || Accordion Funktion || START     *******************************************/

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    //items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }

  // Mehrere Tabs öffnen
  if (itemToggle == 'true') {
    this.setAttribute('aria-expanded', 'false');
  }

}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/******************************************* || Accordion Funktion || ENDE     *******************************************/