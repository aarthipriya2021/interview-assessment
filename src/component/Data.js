import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";


export default function Data() {
  const [responseData, setResponseData] = useState({
    data:[],
    total:0,
    total_pages:0
  });

  const [currentPage, setCurrentPage] = useState(1)

// request types
// GET , POST, PUT, DELETE

  const f = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
    const json = await res.json();
    console.log('json=',json);
    setResponseData(json);
  };
  useEffect(() => {
    f();
  }, [currentPage]);

  const handlePreviousButtonClick =() => {
    console.log("handlePreviousButtonClick",responseData);
    currentPage > 0 && setCurrentPage(currentPage - 1)
  }
  const handleButtonClick =(event) => {
    console.log("handleButtonClick",responseData);
    console.log("event=",event.target.innerText);
    setCurrentPage(parseInt(event.target.innerText))
  }
  const handleNextButtonClick =() => {
    console.log("handleNextButtonClick",responseData);
    setCurrentPage(currentPage + 1)
  }

  if (responseData.data.length > 0) {
    return (
      <div className="App">
        <h1> User's Profile</h1>
        <div className="flex">
          {responseData.data.length &&
            responseData.data.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <strong>{user.first_name}&nbsp;</strong>
                    <strong>{user.last_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} alt="images" />
                </div>
              );
            })}
        </div>
        <Pagination currentPage={currentPage} total={responseData.total} totalPages={responseData.total_pages} handlePreviousButtonClick={handlePreviousButtonClick} handleButtonClick={handleButtonClick} handleNextButtonClick={handleNextButtonClick} />
        </div>
          
          
    );
  } else {
    return( 
    <div>No data available
      <Pagination currentPage={currentPage}  totalPages={responseData.total_pages} handlePreviousButtonClick={handlePreviousButtonClick} handleButtonClick={handleButtonClick} handleNextButtonClick={handleNextButtonClick} />
      </div>
      )
    
   
  }

  
}
