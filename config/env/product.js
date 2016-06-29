module.exports = {
	'facebookAuth' : {
	'clientID' : process.env.FB_CLIENT_ID , 
	'clientSecret' : process.env.FB_SECRET_ID,
	'callbackURL' : 'http://localhost:3000/auth/facebook/callback'
	}
};