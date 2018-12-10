const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

router.use( function( req, res, next ) {
    // this middleware will call for each requested
    // and we checked for the requested query properties
    // if _method was existed
    // then we know, clients need to call DELETE request instead
    if ( req.query._method == 'DELETE' ) {
        // change the original METHOD
        // into DELETE method
        req.method = 'DELETE';
        // and set requested url to /user/12
        req.url = req.path;
    } else if ( req.query._method == 'PUT' ) {
            // change the original METHOD
            // into DELETE method
            req.method = 'PUT';
            // and set requested url to /user/12
            req.url = req.path;
        }
    next();
});

router.get('/', user_controller.home);
router.get('/novy', user_controller.user_create);
router.post('/novy', user_controller.user_create_post);
router.get('/:id', user_controller.user_details);
router.put('/:id/upravit', user_controller.user_update);
router.delete('/:id/zmazat', user_controller.user_delete);

module.exports = router;
