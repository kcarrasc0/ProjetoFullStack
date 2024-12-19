const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas
router.post('/', productController.createProduct); // Criar produto
router.get('/', productController.getProducts); // Listar produtos
router.get('/:id', productController.getProductById); // Obter produto por ID
router.put('/:id', productController.updateProduct); // Atualizar produto
router.delete('/:id', productController.deleteProduct); // Deletar produto

module.exports = router;
