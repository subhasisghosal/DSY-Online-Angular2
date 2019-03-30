const operation = require('../controllers/operation')

function init(app) {
    const path = '/operation'
    app.get(path + '/admission', operation.getAdmissionForm)
    app.post(path + '/admission', operation.saveAdmissionForm)
        // app.get(path + '/', rating.checkHealth)
}
module.exports = init;