const yesBtn=document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Vezzzzzzzzzzzzzzz Se Sabe Que Eres Muuuy Alzada, Tu Misma dices que si JAJAJAJ ')
});

const noBtn=document.querySelector('#noBtn');


noBtn.addEventListener('mouseover', function() {
    const randomX= parseInt(Math.random()*100);
    const randomY= parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.sryle.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
}) 