import Marathon from '../Classes/Marathon.js';

const lentelesElementas = document.querySelector('#tableBody');
export function addRunnerToTable(runner, category) {
  lentelesElementas.innerHTML += ` <td>${runner.id}.</td>
        <td>${runner.name}</td>
        <td>${runner.secondName}</td>
        <td>${runner.age}</td>
        <td>${runner.weight} kg</td>
        <td>${runner.category}</td>
        <td><button  class ="delete" data-id ="${runner.id}">Issiregistruoti</button></td>`;
}
