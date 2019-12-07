const router = require("express").Router();
const path = require('path');
const fs = require('fs');


/* get the notes */
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err,data)  => {
    console.log(data);
    //id = 0;
    parsedData = JSON.parse(data)
    res.json(parsedData);
    
  });
});

router.delete('/notes/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data)  => {
    let parsedData = JSON.parse(data);
    let modifiedData = parsedData.filter(x => x.id !== parseInt(req.params.id))
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(modifiedData), (err) => {
      if (err) throw err;
    });
  });   
  res.send('post sent');
  });



router.post('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err,data)  => {
      /* convert json data to array */
      let notes = JSON.parse(data);
      let newNote = req.body;
      if (notes.length === 0) {
        notes.push({
          ...newNote,
          id: 1});
      } else 
      {
        let prevNote = notes[notes.length - 1];
       notes.push( {
         ...newNote,
         id: prevNote.id + 1
       });
      }
      /* use normal write file to save to db.json */
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('note saved');
      });
    });
    res.send('post sent');
});


module.exports = router;
