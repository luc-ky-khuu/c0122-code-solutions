const express = require('express');
const dataJSON = require('./data.json');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = dataJSON.notes;
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const notes = dataJSON.notes;
  const idNum = Number(req.params.id);
  if (!Number.isInteger(idNum) || idNum < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[idNum]) {
    res.status(200).json(notes[idNum]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${idNum}` });
  }
});

app.post('/api/notes', (req, res) => {
  const noteContent = req.body;
  const notes = dataJSON.notes;
  const nextId = dataJSON.nextId;
  if (!noteContent.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    notes[nextId] = noteContent;
    notes[nextId].id = nextId;
    dataJSON.nextId++;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occured.' });
        console.error(err);
      } else {
        res.status(201).json(notes[nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  const notes = dataJSON.notes;
  if (!Number.isInteger(idNum) || idNum < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[idNum]) {
    res.status(404).json({ error: `cannot find note with id ${idNum}` });
  } else {
    delete notes[idNum];
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred.' });
        console.error(err);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  const notes = dataJSON.notes;
  const noteContent = req.body;
  if (!Number.isInteger(idNum) || idNum < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!noteContent.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (Number.isInteger(idNum) && noteContent.content) {
    if (notes[req.params.id]) {
      notes[idNum].content = noteContent.content;
      fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error has occurred.' });
          console.error(err);
        } else {
          res.status(200).json(notes[idNum]);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${idNum}` });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
