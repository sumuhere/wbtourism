//typwriter effect

var app = document.getElementById('typewrite');

var typewriter = new Typewriter(typewrite, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(250)
  .typeString('Come to <span style="color: #50CB93;">West Bengal</span>')
  .pauseFor(300)
  .deleteChars(19)
  .typeString('Experience the <span style="color: #50CB93;">Bengal</span>')
  .deleteChars(6)
  .typeString('<span style="color: #50CB93;">Culture.</span>')
  .pauseFor(600)
  .start();
