// Tooltip
class Tooltip {
  constructor(element) {
    // The element is the span tag. We pass it to the constructor when using init()
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  init() {
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);

    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });

    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Dropdown
class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }
  init() {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      this.content.classList.toggle('active');
    });
  }
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
