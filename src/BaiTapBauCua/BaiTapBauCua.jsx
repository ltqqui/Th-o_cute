import React from 'react'
import '../assets/css/BaiTapBaiCua.css'
import DiemThuong from './DiemThuong'
import DanhSachCuoc from './DanhSachCuoc'
import ListXucXac from './ListXucXac'

export default function BaiTapBauCua() {
  return (
    <div className='container-fluid baiTapBauCua'>
        <h3 style={{marginTop:0, color:'green', fontSize:35}}>Bài tập bầu cua cyberSoft</h3>
        <DiemThuong/>
        <div className="row">
            <div className="col-8">
            <DanhSachCuoc/>
            </div>
            <div className="col-4">
                <ListXucXac/>
            </div>
        </div>
    </div>
  )
}
