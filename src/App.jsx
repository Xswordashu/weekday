import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './components/filter/filter';
import { useEffect, useState, useRef } from 'react';
import JobCard from './components/card/jobCard';
import { Grid } from '@mui/material';
//import { useSelector, useDispatch } from 'react-redux';
function App() {
  const filter = useSelector(state => state.filter);
  const [jobs, setJobs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  console.log('page', page);
  console.log('jobs', jobs);

  const elementRef = useRef(null);


    function onIntersection(entries){
    console.log('intersection', entries);
    const firstEntry = entries[0];
     if(firstEntry.isIntersecting && hasMore){
          fetchMoreItems()
   }
  }

    async function fetchMoreItems(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const body = JSON.stringify({
      "limit": 10,
      "offset": page*10
     });

     const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
     };

     fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          
          console.log('result',result);
            if(result.jdList.length ===0){
            setHasMore(false);
          }
          else{
            setJobs(prevJobs => [...prevJobs, ...result.jdList])
            setPage(prevPage => prevPage + 1);
          }

      })
      .catch((error) => console.error(error));

  }

  useEffect(()=>{
      const observer= new IntersectionObserver(onIntersection)
      if(observer && elementRef.current){
          observer.observe(elementRef.current)
      }
      
      return ()=>{
         if(observer){
           observer.disconnect();
         }
      }

  }, [jobs])


 
  return (
    <>
     <Filter/>
     <div style={{display:'flex', justifyContent:'center'}}>
     <Grid container sx={{maxWidth:'1000px'}}>
       {
         jobs.map((job,index)=>{
            // console.log('child', job);
             let flag = true;
             Object.keys(filter).forEach(key=>{
                // if(filter.key == '')
                //   return;
                //console.log('keys', key)
                if(key == 'roles' &&  filter.roles!='' && job.jobRole != filter.roles)
                 flag = false;
                //console.log('roles', key.roles);
                if(key == 'experience' && filter.experience!='' && job.minExp < filter.experience)
                 flag = false;

                if(key == 'location' && filter.location!=''  && job.location != filter.location)
                  flag = false;

                if(key == 'salary' && filter.salary!='' && job.minJdSalary <= filter.salary)
                  flag = false;
             })

             if(flag)
             return (
              
              <Grid item xs={12} md={4} lg={4} key={index} sx={{margin:'auto'}} >
                <JobCard 
                name={job.companyName}
                role={job.jobRole}
                location={job.location}
                jobDetails={job.jobDetailsFromCompany}
                minSalary={job.minJdSalary}
                maxSalary={job.maxJdSalary}
                minExperience={job.minExp}
                logo={job.logoUrl}
                jdlink={job.jdLink}
                />
              </Grid>
                
             )
         })
       }
       </Grid>
       </div>
       {hasMore && 
            <div ref={elementRef} style={{textAlign: 'center', fontWeight:'400'}}>Loading More Jobs for You...</div>
        }
    </>
  )
}

export default App;
