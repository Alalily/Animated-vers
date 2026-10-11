const targetIds = ['cw_image07.png', 'cw_image01.png'];

const spinTargets = new Set();

targetIds.forEach((id) => {
  const target = document.getElementById(id);
  if (target) {
    spinTargets.add(target);
  }
});

document.querySelectorAll('[id*="cw_image"]').forEach((element) => {
  spinTargets.add(element);
});

spinTargets.forEach((image) => {
  image.classList.add('spin-image');
});