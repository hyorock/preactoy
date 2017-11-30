import * as _ from 'lodash';

export function Success(res, body = {}) {
    return res.status(200).json(_.extend({ success: true }, body));
}

export function ErrorHandle(err, req, res, next) {
    if (err.status) {
        res.status(err.status).json({
            status: 'error',
            message: err.message ? err.message : err
        });
        return next();
    }
}
