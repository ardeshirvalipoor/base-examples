"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(req, res, next) {
    /*     Todo.find(function (err, todos) {
    
            if (err) {
                res.send(err);
            }
    
            res.json(todos);
    
        }); */
}
function create(req, res, next) {
    /* Todo.create({
        title: req.body.title
    }, function (err, todo) {

        if (err) {
            res.send(err);
        }

        Todo.find(function (err, todos) {

            if (err) {
                res.send(err);
            }

            res.json(todos);

        });

    }); */
}
function update() {
}
function remove(req, res, next) {
    /*     Todo.remove({
            _id: req.params.todo_id
        }, (err, todo) => {
            res.json(todo);
        }); */
}
// secure route
function getProtected(req, res, next) {
    res.json({ msg: 'You are authorized to see this' });
}
// secure base on role
function getSensitive(req, res, next) {
    res.json({ msg: 'You are authorized to see this' });
}
exports.default = {
    get,
    create,
    update,
    remove,
    getProtected,
    getSensitive
};
/* function loadUser(req, res, next) {
    if (req.params.userId) {
      Users.findOne({ id: req.params.userId }, function(err, user) {
        if (err) {
          next(new Error("Couldn't find user: " + err));
          return;
        }
  
        req.user = user;
        next();
      });
    } else {
      next();
    }
  }
  
  // ...
  
  app.get('/user/:userId', loadUser, function(req, res) {
    // do something with req.user
  });
  
  app.get('/users/:userId?', loadUser, function(req, res) {
    // if req.user was set, it's because userId was specified (and we found the user).
  }); */
