let Bicicleta = require("../../models/Bicicleta");

/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: Endpoints para gestionar bicicletas
 */

/**
 * @swagger
 * /api/bicicletas:
 *   get:
 *     summary: Lista todas las bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Lista de bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 */
exports.bicicleta_list = function(req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
};

/**
 * @swagger
 * /api/bicicletas:
 *   post:
 *     summary: Crea una nueva bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       201:
 *         description: Bicicleta creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 */
exports.bicicleta_create = function(req, res) {
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    });
};

/**
 * @swagger
 * /api/bicicletas/{id}:
 *   delete:
 *     summary: Elimina una bicicleta por ID
 *     tags: [Bicicletas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la bicicleta
 *     responses:
 *       204:
 *         description: Bicicleta eliminada
 *       404:
 *         description: Bicicleta no encontrada
 */
exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
};

/**
 * @swagger
 * /api/bicicletas/{id}:
 *   put:
 *     summary: Actualiza una bicicleta por ID
 *     tags: [Bicicletas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la bicicleta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       404:
 *         description: Bicicleta no encontrada
 */
exports.bicicleta_update = function(req, res) {
    let bici = Bicicleta.findById(req.params.id);
    if (bici) {
        bici.color = req.body.color;
        bici.modelo = req.body.modelo;
        bici.ubicacion = [req.body.latitud, req.body.longitud];
        res.status(200).json({
            bicicleta: bici
        });
    } else {
        res.status(404).send('Bicicleta no encontrada');
    }
};