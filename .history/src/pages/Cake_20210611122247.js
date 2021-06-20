import {Card, CardHeader} from '@material-ui/core';
import { useEffect } from 'react';
import {useState} from 'react';
import { db } from '../firebase';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    db.get(`/cakes/` + id)
    .then(res => setCake(res.data)
  })

  return (
    <Card>
      <CardHeader>{image1}</CardHeader>
    </Card>
  );
};

export default Cake;
