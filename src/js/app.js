import CollapseButton from './CollapseButton';

const collapseBtnContainers = document.querySelectorAll('#collapse-button');

collapseBtnContainers.forEach((container) => {
  const collapseButton = new CollapseButton(container);
  collapseButton.bindToDOM();
});
