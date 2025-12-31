import express from 'express';
import {
  getCards,
  getCardById,
  likeCard,
  dislikeCard,
  createCard,
  deleteCard,
} from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.get('/:cardId', getCardById);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

export default router;