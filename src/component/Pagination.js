import React from 'react'

function Pagination({currentPage ,totalPages, handlePreviousButtonClick, handleButtonClick, handleNextButtonClick}) {
    

    console.log("Pagination currentPage=",currentPage);
    console.log("Pagination totalPages=",totalPages);
    
    let totalPagesArr = [];
    for (var i=1; i <= totalPages; i++) { 
        console.log('i=',i);
        totalPagesArr.push(i);
      }

    return (
        <div>
          
            <button onClick={handlePreviousButtonClick}>previous</button>
            {totalPagesArr.map((page) => (
                 <button style={currentPage === page ? { backgroundColor:'gray'} : { backgroundColor:'white'}} key={page} className="current" onClick={handleButtonClick}>{page} </button>
                
                
            ))}
            
           <button className="next"  onClick={handleNextButtonClick}>next</button>
        </div>
      
    
       
    );
}

export default Pagination;
