import jwt from 'jsonwebtoken';
import DataBase from './database';
import Validate from './validate';

// Connection URL
const url = 'mongodb+srv://admin:testadmin@courseapi-zkvbf.gcp.mongodb.net/test?retryWrites=true';
// Database Name
const dataBaseName = 'CourseApi';

const Base = new DataBase(url, dataBaseName);
const Validator = new Validate();

Base.connect();

const createRouter = (router) => {
  router.get('/categories', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Base.get('categories', (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res.status(200).json(data);
    }, req.query);
  });

  router.post('/categori', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { authorization } = req.headers;
    if (authorization && authorization.indexOf('Token') !== -1) {
      Base.get('users', (err, data) => {
        const user = data.filter(el => el.token === authorization.split('Token')[1].replace(' ', ''));
        if (user.length === 0) {
          return res.status(500).json({ message: 'Invalid token' });
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          const result = Validator.category(req.body);
          if (result.status) {
            const {
              name,
              short,
            } = req.body;
            const category = {
              name,
              short,
            };
            Base.post('categories', category, (err, data) => {
              if (err) {
                return res.status(500).json({ message: err });
              }
              return res.status(200).json(data);
            });
          } else {
            res.status(500).json({ message: result.descriptions });
          }
        }
      }, {});
    } else {
      res.status(500).json({ message: 'Invalid token' });
    }
  });

  router.get('/products', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Base.get('products', (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res.status(200).json(data);
    }, req.query);
  });

  router.post('/product', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { authorization } = req.headers;
    if (authorization && authorization.indexOf('Token') !== -1) {
      Base.get('users', (err, data) => {
        const user = data.filter(el => el.token === authorization.split('Token')[1].replace(' ', ''));
        if (user.length === 0) {
          return res.status(500).json({ message: 'Invalid token' });
        } else {
          const result = Validator.product(req.body);
          if (result.status) {
            const date = new Date().getTime();
            const {
              name,
              descriptions = '',
              images = [],
              category,
              brand,
              model,
              specifications = null,
              price,
              currency,
            } = req.body;
            const product = {
              name,
              descriptions,
              images,
              category,
              brand,
              model,
              specifications,
              price,
              currency,
              date,
            };

            Base.get('categories', (err, data) => {
              if (err) {
                return res.status(500).json({ message: err });
              }
              const validCategory = Validator.valideCategory(product, data);
              if (validCategory.status) {
                Base.post('products', product, (err, data) => {
                  if (err) {
                    return res.status(500).json({ message: err });
                  }
                  return res.status(200).json(data);
                });
              } else {
                res.status(500).json({ message: validCategory.descriptions });
              }
            }, {});

          } else {
            res.status(500).json({ message: result.descriptions });
          }
        }
      }, {});
    } else {
      res.status(500).json({ message: 'Invalid token' });
    }
  });

  router.get('/product/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Base.getById('products', req.params.id, (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      return res.status(200).json(data);
    });
  });

  router.post('/register', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const result = Validator.valideRegister(req.body);
    if (result.status) {
      const {
        email,
        password,
      } = req.body;
      const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      const user = {
        email,
        password,
        token,
      }
      Base.get('users', (err, data) => {
        if (err) {
          return res.status(500).json({ message: err });
        }
        const validUser = Validator.valedeUsers(user, data);
        if (validUser.status) {
          Base.post('users', user, (err, data) => {
            if (err) {
              return res.status(500).json({ message: err });
            }
            return res.status(200).json([user]);
          });
        } else {
          return res.status(500).json({ message: validUser.descriptions });
        }
      }, {});
    } else {
      return res.status(500).json({ message: result.descriptions });
    }
  });

  router.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { email, password } = req.body;
    Base.get('users', (err, data) => {
      const user = data.filter(el => el.email === email);
      if (user.length === 0) {
        return res.status(500).json({ message: 'User not found.' });
      } else if (user[0].password !== password) {
        return res.status(500).json({ message: 'Invalid password.' });
      } else {
        return res.status(200).json(user);
      }
    }, {});
  });
  router.post('/auth-token', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { token } = req.body;
    Base.get('users', (err, data) => {
      const user = data.filter(el => el.token === token);
      if (user.length === 0) {
        return res.status(500).json({ message: 'User not found.' });
      } else {
        return res.status(200).json(user);
      }
    }, {});
  });
};


export default createRouter;
