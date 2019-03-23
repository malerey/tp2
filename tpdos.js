var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

//PRIMER EJERCICIO
function precioMaquina(componentes) {
  var precioTotal = 0
  for (let i = 0; i < componentes.length; i++) {
    //console.log(componentes [i])
    for (let j = 0; j < local.precios.length; j++) {
      // console.log(local.precios[j].componente)
      if (componentes[i] === local.precios[j].componente) {
        precioTotal = precioTotal + local.precios[j].precio
      }
    }
  }
  return precioTotal
}
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
//SEGUNDO EJERCICIO
function cantidadVentasComponente(componentes) {
  var sumaCantidadVentas = 0
  for (let i = 0; i < local.ventas.length; i++) {
    for (let j = 0; j < local.ventas[i].componentes.length; j++) {
      if (componentes === local.ventas[i].componentes[j]) {
        sumaCantidadVentas += 1
      }
    }
  }
  return sumaCantidadVentas
}
console.log(cantidadVentasComponente("Monitor ASC 543")); // 2*/
//TERCER EJERCICIO
function vendedoraDelMes(mes, anio) {
  var cantidadDeVentasAda = 0
  var cantidadDeVentasGrace = 0
  for (let i = 0; i < local.ventas.length; i++) {
    //console.log(local.ventas[i].fecha.getMonth()+1)
    //console.log(mes)
    //console.log(local.ventas[i].fecha.getFullYear())
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      // console.log(local.ventas[i].nombreVendedora)
      // console.log(precioMaquina(local.ventas[i].componentes))
      //console.log(local.ventas[i].componentes)
      //console.log("el valor de la venta fue de:")
      if (local.ventas[i].nombreVendedora === "Ada") {
        cantidadDeVentasAda += precioMaquina(local.ventas[i].componentes)
        if (local.ventas[i].nombreVendedora == 'Grace') {
          ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes)

        }
        if (cantidadDeVentasAda > cantidadDeVentasGrace) {
          return "Ada"
        } else {
          return "Grace"

        }
      }
    }
  }
}
console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
//CUARTO EJERCICIO

function ventasMes(mes, anio) {
  var acumulador = 0
  for (let i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      acumulador = acumulador += precioMaquina(local.ventas[i].componentes)
    }
  }
  return acumulador
}
console.log(ventasMes(1, 2019)); // 1250
//EJERCICIO CINCO
//Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
function ventasVendedora(nombre) {
  var ventasAcumuladas = 0
  for (let i = 0; i < local.ventas.length; i++) {

    if (local.ventas[i].nombreVendedora === nombre) {
      ventasAcumuladas = ventasAcumuladas + precioMaquina(local.ventas[i].componentes)

    }
  }
  return ventasAcumuladas
}
console.log(ventasVendedora("Grace")); // 900

//EJERCICIO SEIS
// Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica 
//la función cantidadVentasComponente
function componenteMasVendido() {
  var productoMasvendido = 0
  var posicionDelProductoMásVendido = 0
  var totalComponentes = []
  for (let i = 0; i < local.precios.length; i++) {
    //console.log(local.precios[i].componente)
    //console.log( cantidadVentasComponente(local.precios[i].componente))
    totalComponentes.push(cantidadVentasComponente(local.precios[i].componente))
  }
  for (let j = 0; j < totalComponentes.length; j++) {
    if (totalComponentes[j] > productoMasvendido) {
      productoMasvendido = totalComponentes[j]
      posicionDelProductoMásVendido = [j]

    }
    return local.precios[j].componente
  }
}

console.log(componenteMasVendido()); // Monitor GPRS 3000

//EJERCICIO SIETE
// indica si hubo ventas en un mes determinado.
function huboVentas(mes, anio) {
 ventasMes=false
  for (let i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      ventasMes=true
     
    

    }
  }
  return ventasMes
}
console.log(huboVentas(3, 2019)); // false


// Ejercicio parte 2
//Se abrió una nueva sucursal en caballito ahora los datos en deben tener una propiedad nueva que se llame SUCURSAL, 
// y deben contener ["centro", "caballito"] tengo que cargar la información  en el ARRAY VENTAS siguiendo el patron 
// fecha, nombreVendedora, componentes, sucursal
for (let index = 0; index < local.ventas.length; index++) {
  local.ventas.componentes = "sucursales"
  console.log(local.ventas)
}
local.sucursales = ["Centro", "Caballito"];

console.log(local.ventas)



//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora,
// componentes, sucursal

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro


//Se que debería crear una función y luego darle push

