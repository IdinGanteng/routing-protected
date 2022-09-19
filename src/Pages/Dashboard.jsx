
import React from 'react'
  import Navbar from '../component/Navbar'
  import Sidebar from '../component/Sidebar'

  
  export const Dashboard = () => {
    const rawUser = localStorage.getItem('username')
    const user = rawUser.replace(/^"(.+(?="$))"$/, '$1')
    return (
      <div>
        <Navbar/>
        <h1 style={{fontFamily:'-apple-system, BlinkMacSystemFont', fontSize: 27, marginTop:'50px',marginBottom:'1px', paddingLeft:'40%'}}>Selamat Datang Tuan {user}</h1>
        <Sidebar/>
       
      </div>
    )
  }
  
  export default Dashboard
  
  