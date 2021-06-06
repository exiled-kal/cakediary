import {useState, useEffect} from 'react';
import {db} from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
      const unsub = db.cio
  })

};
