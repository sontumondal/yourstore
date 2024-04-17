import React, { useEffect, useState } from 'react'
import axiosInstance from './Helper'
import { profile_image} from './Helper'
const ProfileLogout = () => {
   const [profileData,setProfileData]=useState({})
 
        useEffect(()=>{
          (async()=>{
            const res=await axiosInstance.get("/user/profile-details");
            const data=await res.data;
            setProfileData(data.data)
            // console.log(data.data);
          })()
       
          
        },[])
        const {email,first_name,last_name,profile_pic}=profileData;
      
  return (
    <>
        <div className="profile-page">

        <img src={profile_image(profile_pic)}  alt="" width="15rem"/>
        <div className="profile-logout">
             <a href="/logout">Logout</a>
            <select >
            <option value="firstname">{first_name}</option>
                <option value="email"> {email}</option>
                {/* <option value="lastname">{last_name}</option> */}
            </select>

        </div>

        </div>
    </>
  )
}

export default ProfileLogout
