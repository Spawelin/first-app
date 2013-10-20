
/*
 * GET users listing.
 */

exports.users = function(req, res){
	res.render('users' , { title : 'Users screen'} );
};