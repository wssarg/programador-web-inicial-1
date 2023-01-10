
var nombre = prompt('Hola buen dia, podría indicarme su nombre?');
alert('Hola '+nombre+', antes de entrar, le invitamos a contestar una breve encuenta de 4 preguntas');
var edad = prompt(nombre+', podrias decirme tu edad?');
var tarjeta = prompt(nombre+', podrias indicarme si operas con tarjeta de credito?');
var habitual = prompt(nombre+', podrias indicarme si venis a menudo?');
var first = new Date('12/25/2023');
var second = new Date();
const dias_para_navidad = Math.floor((first - second) / (1000 * 60 * 60 * 24));
alert('Faltan '+dias_para_navidad+' días para la proxima navidad.');