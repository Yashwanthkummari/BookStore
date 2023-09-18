import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import ram from '../../images/LordRam.jpg'
import './card.css';
import ram from '../../images/Ram.jpeg'

export default function Cardd() {
  return (
    <Card className="card" >
      <CardActionArea>
        <CardMedia
          component="img"
        />
        <div className='cardimage'><img id='CardImage' src={ram} alt="lordram" /></div>
        <CardContent>
          <div className='carddetails'>
            <div className='cardtitle'>Ramayanam</div>
            <div className='carddetails1'>
              <div className='author'> by Valmiki</div>
              <div className='ratingdetails'>
                <div className='rating'>4.5 &#9733; </div>
                <div className='ratingcount'>(20)</div>
              </div>
              <div className='prices'>
                <div className='discountprice' >Rs1500</div>
                <div className='MRP' >Rs3000</div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}