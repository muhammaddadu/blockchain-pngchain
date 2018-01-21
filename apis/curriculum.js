const _ = require('lodash');

module.exports = {
    getAll: {
        path: '/curriculum',
        method: 'GET',
        fn(req, resp, next) {
            req.models.CurriculumContract.getAll()
                .then((data) => resp.ok(data))
                .catch((err) => resp.error(err));
        }
    },
    create: {
        path: '/curriculum',
        method: 'PUT',
        fn(req, resp, next) {
            let params = _.merge({}, req.params, req.body);
            console.log(params);
            req.models.CurriculumContract.create(params)
                .then((data) => resp.ok(data))
                .catch((err) => resp.error(err));
        }
    }
};
