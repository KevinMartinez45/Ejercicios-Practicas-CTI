function checkCashRegister(price, cash, cid) {
    const monedas = [
      { name: "PENNY", value: 0.01 },
      { name: "NICKEL", value: 0.05 },
      { name: "DIME", value: 0.1 },
      { name: "QUARTER", value: 0.25 },
      { name: "ONE", value: 1 },
      { name: "FIVE", value: 5 },
      { name: "TEN", value: 10 },
      { name: "TWENTY", value: 20 },
      { name: "ONE HUNDRED", value: 100 }
    ];
  
    let cambio = cash - price;
  
    let dineroEnCaja = cid.reduce((acc, valor) => {
      return acc + valor[1];
    }, 0);
  
    dineroEnCaja = Math.round(dineroEnCaja * 100) / 100;
  
    if (dineroEnCaja < cambio) return { status: "INSUFFICIENT_FUNDS", change: [] };
  
    if (dineroEnCaja === cambio) return { status: "CLOSED", change: cid };
  
    let valor = [];
  
   
  
    for (let i = monedas.length - 1; i >= 0; i--) {
      const { name, value } = monedas[i];
      let cantidad = 0;
  
      while (cambio >= value && cid[i][1] > 0) {
        cambio -= value;
        cambio = Math.round(cambio * 100) / 100;
        cid[i][1] -= value;
        cantidad += value;
      }
  
      if (cantidad > 0) {
        valor.push([name, cantidad]);
      }
    }
  
    if (cambio > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: valor };
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  