import React from 'react'
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import './jobCard.css'
const JobCard = ({  
   name,
   role,
   location,
   jobDetails,
   minSalary,
   maxSalary,
   minExperience,
   logo,
   jdlink}) => {
    // console.log('url', jobDetails);
  return (
     <>
       <div className='parent'>
       <Paper sx={{padding:'20px'}}>
           <Paper className='posted' sx={{borderRadius:'20px'}} elevation={2}>
                ⏳ Posted 6 days ago 
           </Paper>

           <div className='companyheader'>
              <img src={logo} alt="W" height={70} width={70} />
              <div >
                  <Typography className='font' sx={{fontWeight:'700' ,color:'#999999', fontFamily:' "Raleway", sans-serif;'}}>{name}</Typography>
                  <Typography  sx={{fontSize:'18px',fontWeight:'500' , color:'#424242' ,  fontFamily:' "Raleway", sans-serif;'}} >{role}</Typography>
                  <Typography sx={{fontSize:'14px',fontWeight:'600' , color:'#424242',  fontFamily:' "Raleway", sans-serif;'}}>{location}</Typography>
              </div>
           </div>

           <div style={{marginTop:'10px', marginBottom:'10px' }}>
             {
               (minSalary && maxSalary) ?(
                  <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#5b6675'}}>Estimated Salary: Rs {minSalary}-{maxSalary} LPA ✅</Typography>
               ):(
                  <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#5b6675'}}>Cannot be disclosed</Typography>
               )
             }
              
           </div>

            <div >
               <Typography sx={{fontSize:'18px',fontWeight:'600', fontFamily:' "Raleway", sans-serif;'}}>About Company</Typography>
               <Typography sx={{fontSize:'17px',fontWeight:'800', fontFamily:' "Raleway", sans-serif;'}}>About us</Typography>
               <div style={{maxHeight:'100px', overflow:'hidden', position:'relative'}}>
               <Typography sx={{ fontSize:'17px',fontWeight:'500',fontFamily:' "Raleway", sans-serif;'}}>{jobDetails} Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto nulla quod dolorum ab velit numquam aliquid facere sapiente, consectetur ipsum. Voluptatum alias sed vitae quod explicabo quo, sapiente architecto.</Typography>
                
                    
               </div>
                   <div className='view font'>
                        <a href={jdlink}>View Job</a>
                    </div>
            </div>

            <div >
               {
                  minExperience? (
                     <>
                       <Typography sx={{ fontFamily:' "Raleway", sans-serif;',  color:'#999999', fontWeight:'800', fontSize:'16px'}}>Minimum Experience</Typography>
                       <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#424242'}}>{minExperience} years</Typography>
                     </>
                  ): (
                     <>
                     <Typography sx={{ fontFamily:' "Raleway", sans-serif;',  color:'#999999', fontWeight:'800', fontSize:'16px'}}>Freshers can also apply</Typography>
                     <Typography sx={{ fontFamily:' "Raleway", sans-serif;', color:'#424242'}}>0 years</Typography>
                     </>
                  )
               }
               
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