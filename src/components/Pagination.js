import * as React from 'react';

import ImageButton from './ImageButton';

import firstPageIcon from '../assets/prev.svg';
import lastPageIcon from '../assets/next.svg';
import prevPageIcon from '../assets/arrow-left.svg';
import nextPageIcon from '../assets/arrow-right.svg';


const Pagination = (props)=>{
    const { setCurrentPage, currentPage, nPages, data, currentRecords, children } = props;

    const lastPage = () => {
      if(currentPage !== nPages)
          setCurrentPage(nPages)
    }
    const firstPage = () => {
        if(currentPage !== 1)
            setCurrentPage(1)
    }
    const nextPage = () => {
      if(currentPage !== nPages)
          setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return(
        <div className='pageCon'>
             { children }
              {data.length > 0 &&
                <div className='pageNav'>
                    <p className='pageNav-text'>
                          Displaying { currentRecords.length }  of { data.length } Users
                    </p>
                    <div className='flex'>
                        <ImageButton onClick={ () => firstPage() }  imgSrc={firstPageIcon}  />
                        <ImageButton onClick={ () => prevPage() }  imgSrc={prevPageIcon}  />
                    </div>
                    <p className='pageNav-text'>
                        <span className='text-black'> Page { currentPage }  </span> of { nPages }
                    </p>
                    <div className='flex'>
                        <ImageButton onClick={ () => nextPage() }  imgSrc={nextPageIcon}  />
                        <ImageButton onClick={ () => lastPage() }  imgSrc={lastPageIcon}  />
                    </div>
                </div>
              }
        </div>
    )
}
export default Pagination;