import {Card, CardHeader} from '@material-ui/core';
import {useEffect} from 'react';
import {useState} from 'react';
import {db} from '../firebase';

const Cake = (props) => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    db.get('/cakes/' + props.id).then((res) => setCake(res.data));
  }, [props.id]);

  return (
    <div>
      <CardHeader><img src={cake.photoUrl}</CardHeader>
    </div>
  );
};

export default Cake;
