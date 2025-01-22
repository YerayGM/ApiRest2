/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID de la bicicleta
 *         color:
 *           type: string
 *           description: El color de la bicicleta
 *         modelo:
 *           type: string
 *           description: El modelo de la bicicleta
 *         ubicacion:
 *           type: array
 *           items:
 *             type: number
 *           description: La ubicación de la bicicleta
 *       example:
 *         id: 1
 *         color: Rojo
 *         modelo: Trek
 *         ubicacion: [28.503789, -13.853296]
 */

let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;