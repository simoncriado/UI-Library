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

// Tabs
class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }
  toggleTabs(e) {
    // remove current active classes
    this.tabs.forEach((tab) => tab.classList.remove('active'));
    // add new active class
    e.target.classList.add('active');
  }
  toggleContent(e) {
    // remove current active classes
    this.container.querySelectorAll('.content').forEach((item) => {
      item.classList.remove('active');
    });
    // add new active class
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// Snackbar
class Snackbar {
  constructor() {
    this.snackbar = document.createElement('div');
  }
  init() {
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }
  show(message) {
    this.snackbar.textContent = message;
    this.snackbar.classList.add('active');
    setTimeout(() => {
      this.snackbar.classList.remove('active');
      this.snackbar.textContent = '';
    }, 4000);
  }
}

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});
