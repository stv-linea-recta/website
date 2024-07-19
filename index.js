var root = document.querySelector(':root');

const prefersLigtScheme = window.matchMedia("(prefers-color-scheme: light)");

const savedtheme = localStorage.getItem('theme');


if (prefersLigtScheme.matches && savedtheme == null) {
  root.classList.remove('dark');
  root.classList.add('light');
  localStorage.setItem('theme','light');
} 

if (savedtheme == 'light') {
  root.classList.remove('dark');
  root.classList.add('light');
}

function darkmode() {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('theme','light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme','dark');
  }

}

window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", (event) => {
       const theme = event.matches ? 'dark' : 'light';
       console.log(theme,savedtheme);
       if (theme != localStorage.getItem('theme')) {
         darkmode();
       }
   });
