import React, { useState } from 'react'

  

function Header() {
    
  return (
    <div className='mb-4'><header>
    {/* <MDBNavbar expand='lg' light className='bg-dark'>
      <MDBContainer fluid>
        <MDBNavbarToggler
         
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <MDBCollapse navbar >
          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem active>
              <MDBNavbarLink className='text-light' aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-light' href='#'>Features</MDBNavbarLink>
            </MDBNavbarItem>
           
            <MDBNavbarItem>
              <MDBNavbarLink className='text-light' href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar> */}

    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '200px' }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Quotes</h1>
            
            
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
  )
}

export default Header