import {Card, CardHeader} from '@material-ui/core';
import {useEffect} from 'react';
import {useState} from 'react';
import {db} from '../firebase';

const Cake = ( {setSelectedImg, selectedImg}) => {
  
  

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
