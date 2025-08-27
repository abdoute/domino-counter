// Theme toggle with persistence
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light'){
root.classList.add('light');
themeToggle.textContent = 'Light Theme';
themeToggle.setAttribute('aria-pressed','true');
}
themeToggle.addEventListener('click', () =>{
const isLight = root.classList.toggle('light');
localStorage.setItem('theme', isLight ? 'light' : 'dark');
themeToggle.textContent = isLight ? 'Light Theme' : 'Dark Theme';
themeToggle.setAttribute('aria-pressed', String(isLight));
});


// Placeholder navigation handlers (replace with real routes later)
const routes = {
btnMode1: 'mode1.html',
btnMode2: 'mode2.html',
btnMode3: 'mode3.html',
btnMode4: 'mode4.html',
};




// Simple demo for footer links
document.getElementById('aboutLink').addEventListener('click', (e)=>{
e.preventDefault();
alert('Domino Counter — واجهة البداية. الإصدار 2025.');
});
document.getElementById('helpLink').addEventListener('click', (e)=>{
e.preventDefault();
alert('اختر وضع اللعب، ثم اربط الأزرار بصفحاتك لاحقًا.');
});
document.getElementById("btnMode3").addEventListener("click", () => {
  window.location.href = "Mode3.html";
});
document.getElementById("btnMode2").addEventListener("click", () => {
  window.location.href = "Mode2.html";
});
document.getElementById("btnMode4").addEventListener("click", () => {
  window.location.href = "Mode4.html";
});
