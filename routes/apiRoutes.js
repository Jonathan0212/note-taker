const router = require('express').Router()
const store = require ('../db/store')

router.get('/notes', (req,res) => {
    store
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err))
});

router.post('/notes', (req,res) => {
    store
      .addNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err))
});

router.delete('/notes', (req,res) => {
  store
  .removeNotes(req.params.id)
  .then(() => res.json({ ok: true }))
  .catch(err => res.status(500).json(err))
})

module.exports = router;