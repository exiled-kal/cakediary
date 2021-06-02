import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    projectFirestore.collection(collection)
    .orderBy('c')
    .onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id});
      });
      setDocs(documents);
    });
  }, [collection]);

  return {docs};
};
