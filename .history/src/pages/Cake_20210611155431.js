import {Card, CardHeader} from '@material-ui/core';
import {useEffect} from 'react';
import {useState} from 'react';
import {db} from '../firebase';

const Cake = ({id, name, photoUrl}) => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    db.get('/cakes/' + id).then((res) => setCake(res.data));
  }, [id]);

  return (
    <div>
      <CardHeader>
        <h1>{name}</h1>
        <img src={photoUrl} alt={name} />
      </CardHeader>
    </div>
  );
};

export default Cake;
