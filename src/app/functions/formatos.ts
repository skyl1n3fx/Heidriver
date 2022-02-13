/** 
 * Función que transforma el número ingresado en formato de miles
 * @param {number} numero número a tranformar 
 * @returns {string} número transformado 
 */

 export function separadorMillares(numero : number) {
    return numero.toLocaleString('es-CL');
}