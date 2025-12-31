import Card from '../models/card.js';

/**
 * GET /cards
 */
export const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.json(cards))
    .catch(() => res.status(500).json({ message: 'Error del servidor' }));
};

export const getCardById = (req, res) => {
  Card.findById(req.params.cardId)
    .orFail()
    .then((card) => res.json(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID inválida' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Tarjeta no encontrada' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};


/**
 * POST /cards
 */
export const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id, // ⚠️ llegará del middleware en el siguiente paso
  })
    .then((card) => res.status(201).json(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Datos inválidos' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};

/**
 * DELETE /cards/:cardId
 */
export const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail()
    .then(() => res.json({ message: 'Tarjeta eliminada' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID inválida' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Tarjeta no encontrada' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};

/**
 * PUT /cards/:cardId/likes
 */
export const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((card) => res.json(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID inválida' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Tarjeta no encontrada' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
};

/**
 * DELETE /cards/:cardId/likes
 */
export const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((card) => res.json(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID inválida' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Tarjeta no encontrada' });
      }
      return res.status(500).json({ message: 'Error del servidor' });
    });
}