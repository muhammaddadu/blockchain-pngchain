const _ = require('lodash');

module.exports = {
    getAll: {
        path: '/learner',
        method: 'GET',
        fn(req, resp, next) {
            req.models.LearnerContract.getAll()
                .then((data) => resp.ok(data))
                .catch((err) => resp.error(err));
        }
    },
    create: {
        path: '/learner',
        method: 'PUT',
        fn(req, resp, next) {
            let params = _.merge({}, req.params, req.body);
            req.models.LearnerContract.create(params)
                .then((data) => resp.ok(data))
                .catch((err) => resp.error(err));
        }
    }
};
