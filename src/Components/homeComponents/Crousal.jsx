import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/appContext';
import coverImage from '../../Images/Carousalimg.jpg'
import { Link } from 'react-scroll';
const Crousal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false); // New loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser, inputRef, createUserLoader, siteData } = useContext(AppContext);

  // Wrapper for file change to handle loading
  const uploadImage = (fieldName) => async (e) => {
  setUploading(true);
  try {
    await handleFileUpdate(e, fieldName);
  } catch (err) {
    console.error("Upload error:", err);
  } finally {
    setUploading(false);
  }
};

const color = "#108515"

  return (
    <div
      className="container-fluid py-5 d-flex justify-content-center align-items-center flex-wrap mainCarousal"
      style={{
        height: '800px',
        backgroundImage:
          `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(16 133 21 / 25%)',
          zIndex: 1,
        }}
      />

      {/* Content row */}
      <div className="row w-100 position-relative" style={{ zIndex: 2 }}>
        <div className={`col-md-6 ${isMobile ? 'col-12 mb-4' : ''} d-flex align-items-center`}>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={`${isMobile ? 'fw-bold fs-3' : 'display-5 fw-bold px-5'}`}
            style={{ color: 'white' }}
          >
            A lot of experts say that the Akhuwat Foundation Loan Program is one of the best ways to get a loan in Pakistan.
          </h1>
        </div>

        <div className="col-md-6 d-flex justify-content-center  align-items-center my-3">
          <div
          className='p-4 flex-wrap'
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '1200px',
              maxWidth: '700px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div
                style={{
                  backgroundColor: '#108515',
                  borderRadius: '10px',
                  padding: '8px',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              > */}
                {/* <span style={{ fontSize: '20px' }}>📞</span> */}
              {/* </div> */}
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#108515'
                }}
              >
                Akhuwat Foundation
              </span>
            </div>
            {/* <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#108515'
              }}
            >
              
            </span> */}
<Link class="btn btn-primary" to="loan-form"  role="button" style={{backgroundColor:'#108515', color:'white'}} type="button" >Apply Loan</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;