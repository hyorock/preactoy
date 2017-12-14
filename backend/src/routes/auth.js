import { Router } from 'express';

import * as Auth from '../api/auth';
import { catchAsyncErrors } from '../common/routeUtil';
import { AuthMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/register', catchAsyncErrors(Auth.Register));
router.post('/login', catchAsyncErrors(Auth.Login));
router.post('/me', AuthMiddleware, catchAsyncErrors(Auth.Me));
router.post('/logout', catchAsyncErrors(Auth.Logout));

export default router;
