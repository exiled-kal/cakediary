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
        setDocs(documents);
      });
    return () => unsub();
    //this is is clean up function that reat will run when
    //
  }, [collection]);

  return {docs};
};

export default useFirestore;
