import jwt from 'jsonwebtoken';
import { Fail } from '../common/responseUtil';
import User from '../models/user';

//const debug = require('debug')('server:auth');

export async function AuthMiddleware(req, res, next) {
    let token = req.body.accesstoken;
    let username = req.body.username;
    let user = await User.findOne({ username });

    if(!token || !user || user.blacklist) {
        throw Fail('not logged in', 403);
    }

    await jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if(err) {
            throw Fail(err, 400);
        }
        req.decoded = decoded;
    });
    return next();
}