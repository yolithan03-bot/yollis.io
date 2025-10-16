// Fundo cintilante estilo purple ocean
const canvas=document.getElementById('bg-canvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const particles=[];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.5,dy:(Math.random()-0.5)*0.5});
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(232,156,255,0.7)';
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

// LIGHTBOX
const lightbox=document.getElementById('lightbox');
const lightImg=lightbox.querySelector('img');
document.querySelectorAll('.photo img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightImg.src=img.src;
    lightbox.classList.add('open');
  });
});
lightbox.addEventListener('click',()=>lightbox.classList.remove('open'));
