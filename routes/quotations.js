const express = require('express');

const Quotation = require('../db/models/quotations');

const router = express.Router();

router.get('/', (req, res) =>
  Quotation.find({})
    .then(r => res.status(200).json(r))
    .catch(e => res.status(500).json(e))
);

router.post('/', (req, res) =>
  Quotation.create({
    code: req.query.code,
    name: req.query.name,
    price: parseInt(req.query.price),
    qty: parseInt(req.query.qty),
  })
    .then(r => res.status(200).json(r))
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    })
);

router.delete('/:id', (req, res) =>
  Quotation.findByIdAndDelete(req.params.id)
    .then(r => res.status(200).json(r))
    .catch(e => res.status(500).json(e))
);

module.exports = router;
