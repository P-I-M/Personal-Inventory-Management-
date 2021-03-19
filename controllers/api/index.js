const router = require('express').Router();


const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');
const categoryRoutes = require('./category-routes.js');

router.use('/Users', userRoutes);
router.use('/Products', productRoutes);
router.use('/Categories', categoryRoutes);

module.exports = router;