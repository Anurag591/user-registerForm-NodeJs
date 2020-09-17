/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    register: async(req, res) => {
        User.register(req.body, async(err, result) => {
            if(err){
                res.serverError(err)
            } else {
                res.json(result);
            }
        })
    }
};

