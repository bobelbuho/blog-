import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi';

function IntroPost({post}) {
  useEffect(()=>{
    getPost()
}, [])
  const getPost=()=>{
  GlobalApi.getPost.then(resp=>{
    console.log(resp.data.data);
  })}
  return (
    <div>IntroPost</div>
  )
}

export default IntroPost