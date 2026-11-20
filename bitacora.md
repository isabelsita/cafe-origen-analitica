## MiniReto 1 - Primer tueste: los datos

| Problema | Decisión |
|---|---|
| La venta 2 tiene cantidad 0 | No tenerla en cuenta para calcular las ventas |
| Algunas ciudades tienen espacios y están escritas de diferentes formas | Quitar los espacios y organizar los nombres para poder compararlos |
| El cliente C05 aparece en dos ventas | Es válido porque un cliente puede comprar varias veces |
| No sabemos qué significa cada propiedad | Crear un diccionario de datos para explicar cada una |

## MiniReto 2 - Los números del día con ciclos

En este reto trabajamos con las 12 ventas que teníamos en datos.js y creamos 6 funciones para analizar la información utilizando ciclos y condicionales

### Funciones realizadas

| Función | ¿Qué hace? |
|---|---|
| valorVenta | Multiplica la cantidad por el precio de cada venta |
| totalVendido | Suma el dinero de todas las ventas |
| totalUnidades | Cuenta cuántas unidades se vendieron |
| ventaMayor | Busca la venta que generó más dinero |
| ticketPromedio | Calcula el promedio sin contar las ventas con cantidad 0 |
| ventasPorCiudad | Calcula el total vendido en una ciudad sin importar los espacios o mayúsculas |

### Resultados obtenidos

| Indicador | Resultado |
|---|---|
| Total vendido | $985.000 |
| Total de unidades | 23 |
| Venta mayor | Venta 10 del cliente C07 por $240.000 |
| Ticket promedio | $89.545,45 |
| Ventas en Medellín | $356.000 |

### Pruebas realizadas

Probamos las funciones con el arreglo completo de 12 ventas, con una sola venta y con un arreglo vacío

| Prueba | Resultado |
|---|---|
| Arreglo completo | Las funciones mostraron los resultados esperados |
| Una sola venta | Se calcularon los datos de esa venta correctamente |
| Arreglo vacío | Las funciones devolvieron 0 y ventaMayor devolvió null |

### Problemas y decisiones

| Problema | Decisión |
|---|---|
| Algunas ventas tienen cantidad 0 | No contarlas para calcular el ticket promedio |
| Las ciudades están escritas de diferentes formas | Utilizar trim y toLowerCase para poder compararlas |
| No sabíamos cómo encontrar la venta mayor | Tomar la primera venta como referencia y compararla con las demás usando un ciclo |
| El arreglo podía estar vacío | Agregar condiciones para evitar errores al hacer los cálculos |

### Conclusión

En este reto aprendí a recorrer arreglos con ciclos for...of y a utilizar acumuladores para sumar valores, también aprendí a combinar funciones y condicionales para obtener información de las ventas sin tener que revisar cada dato manualmente