import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
      projectFirestore.collection(collec)
  }, [collection]);

  return {docs};
};
