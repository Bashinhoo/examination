import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import UserCon from '../components/UserCon';
import UserProfile from './UserProfile';

const Users = ({users}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [page, setPage] = React.useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecords, setCurrentRecords] = useState();
  const [openProfile, setOpenProfile] = useState(false);
  const [currentProfile, setCurrentProfile] = useState();


  const [recordsPerPage] = useState(6);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        if(users.length > 0) {
          setIsLoading(false);
        }
        setCurrentRecords(users.slice(indexOfFirstRecord, indexOfLastRecord));
    }, [indexOfFirstRecord, indexOfLastRecord, users])

  const nPages = Math.ceil(Object.keys(users).length / recordsPerPage);


  return (
    <div>
      {isLoading
      ? <p> loading............</p>
      : <>
        <UserProfile open={openProfile} onClose={() => setOpenProfile(false)} currentProfile={currentProfile} />
        <Pagination
            data = { users }
            nPages = { nPages }
            currentPage = { currentPage }
            currentRecords = { currentRecords }
            setCurrentPage = { setCurrentPage }
        >
          <div className='users-con'>
            {currentRecords?.map((x, y) => {
              return (
                <UserCon key={y} user={x} onClick={() => { setOpenProfile(true); setCurrentProfile(x) }}  />
              )
            })}
          </div>
        </Pagination>
      </>
    }
    </div>
  )
}

export default Users