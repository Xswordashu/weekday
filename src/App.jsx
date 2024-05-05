import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './components/filter/filter';
import { useEffect, useState, useRef } from 'react';
import JobCard from './components/card/jobCard';
function App() {
   
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
      "offset": page
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
     <div style={{display:'flex', flexWrap:'wrap'}}>
       {
         jobs.map((job,index)=>{
             //console.log('chil', job);
             return (

              <div key={index} >
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
              </div>
                
             )
         })
       }
       </div>
       {hasMore && 
            <div ref={elementRef} style={{textAlign: 'center'}}>Load MOre Items...</div>
        }
    </>
  )
}

export default App;
