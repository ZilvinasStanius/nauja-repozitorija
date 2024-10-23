function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let gender = '';

  if (document.getElementById('vyras').checked) {
    gender = 'Vyras';
  } else if (document.getElementById('moteris').checked) {
    gender = 'Moteris';
  }

  if (gender === '') {
    alert('Prašome pasirinkti lytį!');
    return;
  }

  console.log(gender);
  let cmValue = height * 100; // Ensure 'height' is defined correctly
  let motersSvoris = 45.5 + (cmValue - 152.4) * 0.91;
  let vyroSvoris = 50 + (cmValue - 152.4) * 0.91;

  if (gender === 'Moteris') {
    document.getElementById(
      'tobulasSvoris'
    ).innerText = `Rekomenduojamas svoris: ~ ${Math.round(motersSvoris)}kg.`;
    console.log(motersSvoris);
  } else if (gender === 'Vyras') {
    document.getElementById(
      'tobulasSvoris'
    ).innerText = `Rekomenduojamas svoris: ~ ${Math.round(vyroSvoris)}kg.`;
    console.log(vyroSvoris);
  } else {
    console.log('Invalid gender selected.');
  }

  if (weight >= 400 || height >= 3.5) {
    alert('Neteisingai pateikti duomenys!');
  } else if (weight && height) {
    let kmiIndex = weight / (height * height);
    document.getElementById('kmi-result').innerText = `Jūsų KMI:`;

    let result = '';
    if (kmiIndex < 18.5) {
      result = 'Svoris yra per mažas';
    } else if (kmiIndex >= 18.5 && kmiIndex < 25) {
      result = 'Jūsų svoris yra normaslus.';
    } else if (kmiIndex >= 25 && kmiIndex < 29.9) {
      result = 'Jūs turite antsvorio';
    } else {
      result = 'Nutukimas';
    }
    document.getElementById('kmi-feedback').innerText = ` ${kmiIndex.toFixed(
      2
    )} - ${result}`;
    // hidden 
    let kmiTable = document.getElementById('kmiTable');
    kmiTable.classList.add('show');
    document.getElementById('hiddenTitle').classList.remove('hidden');
    document.getElementById('resultDiv').style.display = 'block';
  }
}
