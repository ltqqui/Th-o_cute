import React from 'react'
import { useDispatch } from 'react-redux'
import { tangGiamAction } from '../redux/action/BaiTapBauCuaAction'
import {useSpring, animated} from 'react-spring'
export default function QuanCuoc(props) {

    let {qc}=props
    let dispatch=useDispatch()

    const [propsUsePringIncrease,setIncrease]=useSpring(()=>{
        return {
            to:{
                scale:1
            },
            from:{
                scale:0.75
            },
            reset:true
        }
    })
    const [propsUsePringDecrease,setDecrease]=useSpring(()=>{
        return {
            to:{
                scale:1
            },
            from:{
                scale:0.75
            },
            reset:true
        }
    })




    return (
        < div>
            <img src={qc.hinhAnh} style={{ width: 200 }} alt="" />
            <div style={{ backgroundColor: 'green', width: 200, padding: '8px', borderRadius: '5px', textAlign: 'center', marginTop: 5 }}>
                <animated.button className='btn btn-danger' style={{transform:propsUsePringDecrease.scale.interpolate(scale=> `scale(${scale})`)}} onClick={()=>{
                    setDecrease(0.75)
                    setDecrease(1)
                    dispatch(tangGiamAction(qc.ma,false))
                }}>-</animated.button>
                <span style={{ margin: '0 15px',color:'orange' }}>{qc.cuoc}</span>
                <animated.button className='btn btn-primary' style={{transform:propsUsePringIncrease.scale.interpolate(scale=> `scale(${scale})`)}} onClick={()=>{
                    setIncrease(0.75)
                    setIncrease(1)
                    dispatch(tangGiamAction(qc.ma,true))
                }}>+</animated.button>
            </div>
        </div>
    )
}
