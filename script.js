const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick =  function () {
    document.body.style.backgroundColor = 'lightblue';
}

const tAcakWarna = document.createElement('button');
const teks = document.createTextNode('acak warna');
tAcakWarna.appendChild(teks);
tAcakWarna.setAttribute('type', 'tAcakWarna');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function (){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sHijau.addEventListener('input', function (){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function (){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(e){
    const posisiX = Math.round((e.clientX / window.innerWidth) * 255);
    const posisiY = Math.round((e.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = 'rgb('+ posisiX +', '+ posisiY +', 100)';
})