const jwt = require('jsonwebtoken');
const cadena = process.env.cadena;

const validarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
      return res.status(403).json({ error: 'Acceso denegado' });
  }
  console.log("token activo, verificando...");
  jwt.verify(token, cadena, (err, user) => {
      if (err) return res.status(401).json({ error: 'Token inválido' });
      req.user = user;
      next();
  });
};

module.exports = validarToken;