import React ,{memo} from 'react'
import { useSpring, animated } from 'react-spring'
 function XucXac(props) {
    let { xx } = props
    const [propUseSpring,set]=useSpring(()=>{
        return {
            to:{
                xyz:[720,720,720]
            },
            from:{
                xyz:[0,0,0]
            },
            config:{duration:1000},
            reset:true
        }
    })
    set({xyz:[720,720,720]})
    return (
        <div>
            <div className='scene' >
                <animated.div className="cube" style={{transform:propUseSpring.xyz.interpolate((x,y,z)=>{
                    return ` translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg) `
                })}}>
                    <div className="cube_face front">
                        <img src={xx.hinhAnh} style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube_face right">
                        <img src='./img/BaiTapBauCua/bau.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube_face back">
                        <img src='./img/BaiTapBauCua/cua.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube_face left">
                        <img src='./img/BaiTapBauCua/ca.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube_face top">
                        <img src='./img/BaiTapBauCua/ga.png' style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="cube_face bottom">
                        <img src='./img/BaiTapBauCua/nai.png' style={{ width: '100%' }} alt="" />
                    </div>
                </animated.div>
            </div>
        </div>
    )
}


export default memo(XucXac)