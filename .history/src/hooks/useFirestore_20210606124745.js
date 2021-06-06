import {useState, useEffect} from 'react';
import {db} from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs
      });
  });
};
