import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData,deleteData } from '../Store/reducer'



function Cardlist() {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.data.data)
    useEffect(()=>{dispatch(fetchData())},[dispatch])
    const [move ,setMove] = useState(0)
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{setLoader(false)},5000)
    },[])
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center  gap-5 flex-wrap'>
        {/* {data.length} */}
        {data.map((i,index)=>{
            if(move<=index && index<move+6){
                return (
                    <div className='w-[30%] '>
                    <div className='w-[100%] h-[70vh] border  bg-white flex flex-col px-4 gap-2  '>
                    <div onClick={()=>dispatch(deleteData(i.id))} className='w-[100%] py-2 px-2 flex justify-end text-[25px] text-[red]'>x</div>
                    {/* <h1 className='text-[px]'>{i.userId}</h1> */}
                    {/* <label>{i.id}</label> */}
                    
                    <label className='text-[17px] font-semibold'>{i.title}</label>
                    
                    <label className='text-[15px]'>{i.body}</label>
                    <label className=' text-gray-300 text-[14px]'>Mon,27 dec 2020 14:57 GMT...</label>
                    <img className='w-[80%] h-[30vh] object-cover' src='https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0'></img>
        
                </div>
                </div>
                )
            }
               }
        )}
      <div className='w-[30%] h-[10vh] flex justify-between'>
                <button onClick={()=>{if(move>0){setMove(move-6)}}}>{"<"}</button>
                {data.map((i,index)=>{
                    if(data.length/6>index){
                        return ( <button onClick={()=>setMove(6*index)}>{index+1}</button>)
                    }
                }
                    
            
               )}
                <button onClick={()=>setMove(move+6)}>{">"}</button>

            </div>
            {loader &&
            <div className='h-[100vh] w-[100%] bg-white fixed top-0 left-0 flex items-center justify-center'>
                <div className='w-[150px] h-[150px] rounded-full loader '></div>
            </div>}
    
    </div>
  )
}

export default Cardlist