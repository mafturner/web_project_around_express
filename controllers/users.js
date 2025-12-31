import User from "../models/user.js";

// GET /users
export const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(() =>
      res.status(500).json({ message: "Error al obtener usuarios" })
    );
};

// GET /users/:userId
export const getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(user);
    })
    .catch(() =>
      res.status(400).json({ message: "ID de usuario inválido" })
    );
};

// POST /users
export const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).json(user))
    .catch((err) =>
      res.status(400).json({
        message: "Error al crear usuario",
        error: err.message,
      })
    );
};

/**
 * PATCH /users/me
 */
export const updateUserProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Datos inválidos' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};

/**
 * PATCH /users/me/avatar
 */
export const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Datos inválidos' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};