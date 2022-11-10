import { Router, Request, Response, NextFunction } from 'express';
import configs from '../configs'
import controllers from '../controllers'
import { base } from '../express-typescript-base'

let router = Router()

router.get('/', controllers.todo.get);
// router.get('/:id', controllers.todo.getTodo);
router.get('/protected-todo', base.middlewares.authorize.byRole([]),  controllers.todo.getProtected);
router.get('/sensitive-todo', base.middlewares.authenticate.token(configs.jwt.SECRET), controllers.todo.getSensitive);
router.post('/', controllers.todo.create);
router.put('/:id', controllers.todo.update);
router.delete('/:id', controllers.todo.remove);
  
export default router   