const Handler = require('../lib/handler');
const Member = require('../models/Member');
const Trainee = require('../models/Trainee');

module.exports = {
    async getAllUsers(req, res) {
        let userType = req.params.type;
        let userModel = userType === 'trainee' ? Trainee : Member;
        let filterQuery = userType === 'all' ? {} : { 'user_type': userType };
        try {
            const { err: errorUser, data: userList } = await Handler(userModel.find(filterQuery));
            if (errorUser || !userList)
                return res.status(500).json({ errorUser, msg: "Database Error" });
            return res.send(userList);
        } catch (error) {
            return res.status(500).json({ error, msg: "Server Error" });
        }
    },
    async getUserDetails(req, res) {
        let userId = req.params.id;
        try {
            const { err: errorUser, data: userDetail } = await Handler(Member.find({ 'id': userId }));
            if (errorUser || !userDetail)
                return res.status(500).json({ errorUser, msg: "Database Error" });
            return res.send(userDetail);
        } catch (error) {
            return res.status(500).json({ error, msg: "Server Error" });
        }
    }
}