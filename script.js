const header=document.querySelector('.topbar');
const toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{header.classList.toggle('open');toggle.textContent=header.classList.contains('open')?'×':'☰';});
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');toggle.textContent='☰';}));
