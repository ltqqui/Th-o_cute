import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import QuanCuoc from './QuanCuoc'
export default function DanhSachCuoc(props) {
    let {danhSachCuoc}=useSelector(state=>state.BaiTapBauCuaReducer)
    let dispatch=useDispatch()
    const renderQuanCuoc=()=>{
        return danhSachCuoc.map((qc,index)=>{
            return <div key={index}  className="col-4 mb-2" style={{ textAlign: 'left' }}>
                <QuanCuoc qc={qc}/>
            </div>
        })
    }

    return (
        <div className='row mt-3'>
            {renderQuanCuoc()}
        </div>
    )
}
