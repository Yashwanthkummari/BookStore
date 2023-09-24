import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './card.css';
import ram from '../../images/Ram.jpeg'
import { useNavigate } from 'react-router-dom';

export default function Cardd() {
  
  const navigate = useNavigate()

  const bookDetails =()=>{
   navigate("/bookdetails")
  }
  return (
    <div onClick={bookDetails}> <div className='cardddbook'>Books(01)</div> 
    <Card className="card"  >
     
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
                <div className='MRP'  >Rs3000</div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

  );
}