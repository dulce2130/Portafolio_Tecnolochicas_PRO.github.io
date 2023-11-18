let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Estudio Ingeniería en Sistemas Computacionales. Me apasiona el desarrollo de software en Python, la creación de aplicaciones web y el manejo de bases de datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
