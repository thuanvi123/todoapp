import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='container p-3 p-sm-1'>
          <div className='row'>
              <div className='col-xl-6 col-lg-7 col-md-10 '>
                  <div className='card layout'>
                      <div className='card-body'>
                          {children}
                      </div>
                  </div>
                  
              </div>

          </div>
            
        </div>
    )
}

export default Layout
