

export class SettingsController {
  constructor() {

  }

  toggleSettings() {
    const settings = document.getElementById("settings");
    const header = document.getElementById('app-header');
    const main = document.getElementById('app-main');
    const footer = document.getElementById('app-footer');

    if (settings.classList.contains('d-none')) {
      settings.classList.remove('d-none');
      header.classList.add('d-none');
      main.classList.add('d-none');
      footer.classList.add('d-none');
    }
  }

  toggleUI() {
    const settings = document.getElementById("settings");
    const header = document.getElementById('app-header');
    const main = document.getElementById('app-main');
    const footer = document.getElementById('app-footer');

    if (header.classList.contains('d-none')) {
      settings.classList.add('d-none');
      header.classList.remove('d-none');
      main.classList.remove('d-none');
      footer.classList.remove('d-none');
    }
  }
}