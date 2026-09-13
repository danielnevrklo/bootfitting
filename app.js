const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
navigation.classList.add('enhanced');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

const inquiryForm = document.querySelector('#inquiry-form');
inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const data = new FormData(inquiryForm);
  const subject = 'Bootfitting — poptávka';
  const body = `Jméno: ${data.get('name')}\nE-mail: ${data.get('email')}\nTelefon: ${data.get('telephone') || 'neuveden'}\n\n${data.get('message')}`;
  window.location.href = `mailto:jesteneni@hotovy.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Zpráva se otevírá v poštovní aplikaci; zatím nebyla odeslána. Pokud se aplikace neotevřela, volejte +420 728 183 036.';
});
