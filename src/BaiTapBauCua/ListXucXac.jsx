import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'
import { endGameAction, playGameAction } from '../redux/action/BaiTapBauCuaAction'
export default function ListXucXac(props) {
    let {danhSachXucXac}=useSelector(state=>state.BaiTapBauCuaReducer)
    let dispatch=useDispatch()
    return (
        <div style={{ width: 300, height: 300, borderRadius: '50%', backgroundColor: '#fff', }}>
            <div className='row' style={{ marginLeft: '50px'}} >
                <div className="col-12" style={{marginLeft:60,marginTop:'-20px'}}>
                    <XucXac xx={danhSachXucXac[0]} />
                </div>
                <div className="col-6">
                    <XucXac xx={danhSachXucXac[1]}/>
                </div>
                <div className="col-6">
                    <XucXac  xx={danhSachXucXac[2]}/>
                </div>
            </div>
            <button className='btn btn-danger ' style={{marginTop:100,padding:'10px 20px'}} onClick={()=>{
                dispatch(playGameAction())
                dispatch(endGameAction())
            }}>Xốc</button>
        </div>
    )
}
