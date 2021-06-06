import menuElementTpl from './menu.hbs';
import menuElements from './menu.json';
import './styles.css';

const menuRef = document.querySelector('.js-menu');
const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markUpMenu = menuElementTpl(menuElements);

menuRef.insertAdjacentHTML('beforeend', markUpMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

inputRef.addEventListener('change', onInputChange);

// реализация замены светлой темы на темную и на оборот
function onInputChange() {
  if (inputRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// реализация сохранения темы в локал стор. (сохранение темы после перезагр. стр.) и правильного положения чекбокса в черной теме
const keepOfTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  }
  if (savedTheme === Theme.DARK) {
    inputRef.checked = true;
  }
};
keepOfTheme();
