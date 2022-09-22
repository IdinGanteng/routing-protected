
import React from 'react'
  import Navbar from '../component/Navbar'
  import Sidebar from '../component/Sidebar'

  
  export const Dashboard = () => {
    return (
      <div>
        <Navbar/>
        <h1 style={{fontFamily:'-apple-system, BlinkMacSystemFont', fontSize: 27, marginTop:'50px',marginBottom:'1px', paddingLeft:'40%'}}>Selamat Datang Tuan</h1>
        <Sidebar/>
       
      </div>
    )
  }
  
  export default Dashboard
  
  