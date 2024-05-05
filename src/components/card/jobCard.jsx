import React from 'react'
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import './jobCard.css'
const JobCard = () => {
  return (
     <>
       <div style={{maxWidth:'300px' , marginBottom:'5px'}}>
       <Paper sx={{padding:'20px'}}>
           <Paper className='posted' sx={{borderRadius:'20px'}} elevation={2}>
                ⏳ Posted 6 days ago 
           </Paper>

           <div className='companyheader'>
              <img src="https://media.istockphoto.com/id/1453810791/photo/running-shoes.jpg?s=1024x1024&w=is&k=20&c=GVgGt27fwGFduJZjX0JMQ0_LZct6yGkno8pbCzHmxVc=" alt="W" height={50} width={50} />
              <div >
                  <Typography className='font' sx={{fontWeight:'700' ,color:'#999999', fontFamily:' "Raleway", sans-serif;'}}>Awiros</Typography>
                  <Typography  sx={{fontSize:'18px',fontWeight:'500' , color:'#424242' ,  fontFamily:' "Raleway", sans-serif;'}} >Computer Vision Lead</Typography>
                  <Typography sx={{fontSize:'14px',fontWeight:'600' , color:'#424242',  fontFamily:' "Raleway", sans-serif;'}}>Gurgaon</Typography>
              </div>
           </div>

           <div style={{marginTop:'10px', marginBottom:'10px' }}>
              <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#5b6675'}}>Estimated Salary: $50-80 LPA ✅</Typography>
           </div>

            <div >
               <Typography sx={{fontSize:'18px',fontWeight:'600', fontFamily:' "Raleway", sans-serif;'}}>About Company</Typography>
               <Typography sx={{fontSize:'17px',fontWeight:'800', fontFamily:' "Raleway", sans-serif;'}}>About us</Typography>
               <div style={{maxHeight:'100px', overflow:'hidden', position:'relative'}}>
               <Typography sx={{ fontSize:'17px',fontWeight:'500',fontFamily:' "Raleway", sans-serif;'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ipsum mollitia dolore hic, tenetur ipsam rerum expedita illum aut ab inventore, quia molestias obcaecati, distinctio quod. Neque consequatur assumenda repellendus.</Typography>
                
                    
               </div>
                   <div className='view font'>
                        <a href="">View Job</a>
                    </div>
            </div>

            <div >
               <Typography sx={{ fontFamily:' "Raleway", sans-serif;',  color:'#999999', fontWeight:'800', fontSize:'16px'}}>Minimum Experience</Typography>
               <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#424242'}}>7 years</Typography>
            </div>

            <div style={{marginTop:'20px'}}>
               <Button  variant='filled' sx={{backgroundColor:'#54efc3', color:'black', width:'100%', padding:'10px' ,  fontFamily:' "Raleway", sans-serif;'}}> 💡Easy Apply</Button>
               <Button variant='contained' sx={{width:'100%', marginTop:'10px', padding:'10px',  fontFamily:' "Raleway", sans-serif;'}}>Unlock referral asks</Button>
            </div>
       </Paper>
    </div>
     </>
  )
}

export default JobCard