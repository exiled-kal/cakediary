import {Card, CardHeader} from '@material-ui/core';
import {useEffect} from 'react';
import {useState} from 'react';
import {db} from '../firebase';
import image1 from '../images/cake1.jpg';

const Cake = (props) => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    db.get('/cakes/' + props.id).then((res) => setCake(res.data));
  }, [props.id]);

  return (
    <Card>
      <CardHeader>{cake.photoUrl}</CardHeader>
    </Card>
  );
};

export default Cake;
