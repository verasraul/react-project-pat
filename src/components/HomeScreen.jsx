import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import PersonIcon from '@mui/icons-material/Person';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import './HomeScreen.css';

function HomeScreen() {

  return (
    <>
    <div className='home-container'>
        <div className='home-content'>
            <h1>Welcome to SuSu</h1>
            <p>Personalized Content</p>
        
            <div className='card-grid'>
                <div className='user-made-payment-card'>
                    <PersonIcon />
                    <h2>$User 1</h2>
                    <p>Paid in SuSu 1</p>
                    <PriceCheckIcon />
                    <Button text='View SuSu' onClick={() => console.log('clicked card 1')} />
                </div>
                <div className='user-received-payment-card'>
                    <PersonIcon />
                    <h2>$User 2</h2>
                    <p>Received Payment in SuSu 2</p>
                    <SavingsIcon />
                    <Button text='View SuSu' onClick={() => console.log('clicked card 2')} />
                </div>
                <div className='user-owes-payment-card'>
                    <PersonIcon />
                    <h2>$User 3</h2>
                    <p>Owes in SuSu 3</p>
                    <ReceiptIcon />
                    <Button text='View SuSu' onClick={() => console.log('clicked card 3')} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeScreen