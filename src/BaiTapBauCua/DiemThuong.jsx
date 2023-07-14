import React from 'react'
import {useSelector} from 'react-redux'
export default function DiemThuong() {
    let {tongTien}=useSelector(state=>state.BaiTapBauCuaReducer)
  return (
    <div className='mt-4'>
        <span style={{backgroundColor:'red',color:'#fff', padding:'10px', borderRadius:'5px'}}>Điểm thưởng:
            <span className='text-warning'>{tongTien}$</span>
        </span> <br />
        <button className='btn btn-success mt-3'>Chơi lại</button>
    </div>
  )
}
