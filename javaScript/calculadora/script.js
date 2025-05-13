let valor = ' ';
let valor2 = ' ';
let total = ' ';
function Calculadora() {
  display = document.getElementById('display');
  let math = '';
  this.inicia = () => {
    display.innerHTML = 'Calculadora iniciada ';
    this.capitureClickes();
  }

  this.capitureClickes = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) {
        if (el.innerHTML === "." && valor.split('.').length > 1) return;
        valor += el.innerHTML;
        total += el.innerHTML;
      }
      if (el.classList.contains('btn-clear')) {
        total = '';
      }
      if (el.classList.contains('btn-del')) {
        total = valor.slice(0, -1);
      }
      if (el.classList.contains('btn-math')) {
        total += el.innerHTML;
        valor = '';
      }
      if(el.classList.contains('btn-expre')) {
        total += el.innerHTML;
      }
      if (el.classList.contains('btn-eq')) {
        total = eval(total);
      }
      display.innerHTML = total
    });
  }
}
const calculadora = new Calculadora()
calculadora.inicia()
