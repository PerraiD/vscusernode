'use strict';

var express         = require('express');
var bodyParser      = require('body-parser');
var router          = express.Router();
var randtoken       = require('rand-token');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));


var users= [
  {"login" : "CLAIRE_BOUZIGUES", "sn" : "BOUZIGUES", "mail" : "cbouzigues@voyages-sncf.com", "givenName" : "Claire", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "MATHIEU_DEVE", "sn" : "DEVE", "mail" : "mdeve@voyages-sncf.com", "givenName" : "Mathieu", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "CECILE_GRENIER", "sn" : "GRENIER", "mail" : "cgrenier@voyages-sncf.com", "givenName" : "Cecile", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "OLIVIER_HAFNER", "sn" : "HAFNER", "mail" : "ohafner@voyages-sncf.com", "givenName" : "Olivier", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "LUCIE_IMBERT", "sn" : "IMBERT", "mail" : "limbert@voyages-sncf.com", "givenName" : "Lucie", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "PRESCILLIA_JUNGMANN", "sn" : "JUNGMANN", "mail" : "pjungmann@voyages-sncf.com", "givenName" : "Prescillia", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "EMILIE_LAURENT", "sn" : "LAURENT", "mail" : "elaurent@voyages-sncf.com", "givenName" : "Emilie", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "VERA_MARINIUK", "sn" : "MARINIUK", "mail" : "vmariniuk@voyages-sncf.com", "givenName" : "Vera", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "ALIZEE_MARION-WUILLEMIN", "sn" : "MARION-WUILLEMIN", "mail" : "amarion-wuillemin@voyages-sncf.com", "givenName" : "Alizee", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "DIMITRI_MATOU", "sn" : "MATOU", "mail" : "dmatou@voyages-sncf.com", "givenName" : "Dimitri", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "TANIA_MONNIER", "sn" : "MONNIER", "mail" : "tmonnier@voyages-sncf.com", "givenName" : "Tania", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "MICKAEL_MOYEN-PEDONE", "sn" : "MOYEN-PEDONE", "mail" : "mmoyen-pedone@voyages-sncf.com", "givenName" : "Mickael", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "CLAIRE_BAS", "sn" : "BAS", "mail" : "cbas@voyages-sncf.com", "givenName" : "Claire", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "CAROLINE_POTEZ-BOUTEILLER", "sn" : "POTEZ BOUTEILLER", "mail" : "cpotezbouteiller@voyages-sncf.com", "givenName" : "Caroline", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "ARNAUD_SCHOUMACHER", "sn" : "SCOUMACHER", "mail" : "aschoumacher@voyages-sncf.com", "givenName" : "Arnaud", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "YASMINA_YOZMANE", "sn" : "YOZMANE", "mail" : "yyozmane@voyages-sncf.com", "givenName" : "Yasmina", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "JADE_PLANTIN", "sn" : "PLANTIN", "mail" : "JPlantin.prestataire@voyages-sncf.com", "givenName" : "Jade", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "ELIANE_BARBOSA", "sn" : "BARBOSA", "mail" : "ebarbosa@voyages-sncf.com", "givenName" : "Eliane", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "SYLVIE_FILLON", "sn" : "FILLON", "mail" : "sfillon@voyages-sncf.com", "givenName" : "Sylvie", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "LUDOVIC_FLEURIEAU", "sn" : "FLEURIEAU", "mail" : "lfleurieau@voyages-sncf.com", "givenName" : "Ludovic", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "STEPHANIE_BROTONS", "sn" : "BROTONS", "mail" : "sbrotons@voyages-sncf.com", "givenName" : "Stephanie", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "MAISTA_DAKITSE", "sn" : "DAKITSE", "mail" : "MDakitse@voyages-sncf.com", "givenName" : "Maista Dedevi ", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "MAGALI_PIERRE-LOUIS", "sn" : "PIERRE-LOUIS", "mail" : "mpierre-louis@voyages-sncf.com", "givenName" : "Magali", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "RAPHAEL_MOULINS", "sn" : "RAPHAEL", "mail" : "rmoulins@voyages-sncf.com", "givenName" : "Raphael", "inetUserStatus" : "active", "token" : randtoken.generate(32)},
  {"login" : "MARIE-BLESH_YVES", "sn" : "YVES-MARIE", "mail" : "ymblesh@voyages-sncf.com", "givenName" : "Yves-Marie", "inetUserStatus" : "active", "token" : randtoken.generate(32)}
]


function find_by_login(login){
    login = login.toUpperCase();
    var indexU = users.findIndex(function(e){return e.login === login});
    var u = null;
    if (indexU !== -1){
      u = users[indexU];
    }
    return u;      
}

function find_by_token(token){
    var indexU = users.findIndex(function(e){return e.token === token});
    var u = null;
    if (indexU !== -1){
      u = users[indexU];
    }
    return u;      
}


function response_identity(user){
    var res = "";
    Object.keys(user).forEach(function(element) {
        res +="userdetails.attribute.name="+element+"\nuserdetails.attribute.value="+user[element]+"\n"
    }, this);

    return res;
}

/**=============================================================
 * ======= all routes for the user =============================
 *///===========================================================

/**
 * get function to retrieve all users from the database
 */
// router.get('/', function(req,res,next) {
//     res.json(users);
// })

/**
 * get function to retrieve one user by its id
 */
router.post('/json/authenticate', function(req,res,next) {   
    var login = req.headers["X-OpenAM-Username"] || req.headers["x-openam-username"]
    var token = {"tokenId":null}
    if(login){
        var user = find_by_login(login);
        if (user){
            token.tokenId = user.token;
        }      
    }
    res.json(token);
})

/**
 * TODO : Improve this function to get user not just id list
 * get function to get all contacts from a user 
 */
.post('/identity/attributes',function(req,res,next){
    var token = req.params.subjectid || req.body.subjectid;
    var resp = {"error":"Invalid token"}
    if (token) {
        var user = find_by_token(token);
        if (user) {
            resp = response_identity(user);
            res.send(resp);
        }
    }
    if (resp.error){ //avoid Error: Can't set headers after they are sent.
        res.json(resp);
    }
   
})
module.exports = router;