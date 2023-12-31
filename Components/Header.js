import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';

export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white',
     width:'350px', margin:'5px auto', marginBottom:'5px', borderRadius:'20px'}}>
      <BiChevronLeft style={{ color: 'gray', fontSize: '30px', marginRight: '25px' }} />
      <label style={{ fontSize: '25px', textAlign: 'center', flex: '1' }}>Bitcoin Wallet</label>
      <AiOutlineMore style={{ color: 'gray', fontSize: '30px', marginLeft: '25px' }} />
    </div>
  );
}
