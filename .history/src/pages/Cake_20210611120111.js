import {Card, CardHeader} from '@material-ui/core';
import { useState } from 'react';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  const [cake, setCake] = useState(null)
  return (
    <Card>
      <CardHeader>{image1}</CardHeader>
    </Card>
  );
};

export default Cake;
