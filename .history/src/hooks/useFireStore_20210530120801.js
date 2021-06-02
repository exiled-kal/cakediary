import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    projectFirestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach();
    });
  }, [collection]);

  return {docs};
};
