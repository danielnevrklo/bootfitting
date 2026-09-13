const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
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
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count += card.querySelectorAll('li').length;
    });
    document.querySelector('#filter-status').textContent = `Počet zobrazených modelů: ${count}.`;
  });
});

const inquiryForm = document.querySelector('#inquiry-form');
inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const data = new FormData(inquiryForm);
  const subject = `Poptávka: ${data.get('service')}`;
  const body = `Jméno: ${data.get('name')}\nE-mail: ${data.get('email')}\nTelefon: ${data.get('telephone') || 'neuveden'}\n\n${data.get('message')}`;
  window.location.href = `mailto:jesteneni@hotovy.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Zpráva je připravena k otevření v poštovní aplikaci. Nic nebylo automaticky odesláno. Pokud se aplikace neotevřela, zavolejte nám. Adresa příjemce je zatím zástupná.';
});
