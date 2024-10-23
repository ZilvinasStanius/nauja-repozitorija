let svoris = prompt('Iveskite savo svori:');
svoris = Number(svoris);
console.log(typeof svoris);
if (svoris >= 400 || svoris <= 10 || isNaN(svoris)) {
  alert('Neteisingai ivestas svoris');
} else {
  document.write(`<p>Jusu svoris kilogramais:  ${svoris}kg.</p>`);
  document.write(`<p>Jusu svoris gramais: ${svoris * 1000}g.</p>`);
}
