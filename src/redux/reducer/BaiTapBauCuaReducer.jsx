import { end_game, play_game, tang_giam } from "../type/BaiTapBauCuaType"

const stateDefault = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/BaiTapBauCua/bau.png', cuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapBauCua/cua.png', cuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapBauCua/ca.png', cuoc: 0 },
        { ma: 'ga', hinhAnh: './img/BaiTapBauCua/ga.png', cuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapBauCua/nai.png', cuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapBauCua/tom.png', cuoc: 0 },
    ],
    danhSachXucXac: [
        { ma: 'ga', hinhAnh: './img/BaiTapBauCua/ga.png', cuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapBauCua/nai.png', cuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapBauCua/bau.png', cuoc: 0 },
    ],
    tongTien: 1000
}

const BaiTapBauCuaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case tang_giam: {
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            let index = danhSachCuocUpdate.findIndex(item => item.ma === action.ma)
            if (action.tangGiam) {
                if (state.tongTien > 0) {
                    danhSachCuocUpdate[index].cuoc += 100
                    state.tongTien -= 100
                }
            }
            else {
                if (danhSachCuocUpdate[index].cuoc > 0) {
                    danhSachCuocUpdate[index].cuoc -= 100;
                    state.tongTien += 100
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate
            return { ...state }
        } break;
        case play_game: {
            let danhSachXucXacUpdate =[]
            for (let i = 0; i < 3; i++) {
                let indexNN = Math.floor(Math.random() * 6)
                danhSachXucXacUpdate.push(state.danhSachCuoc[indexNN])
            }
            state.danhSachXucXac = danhSachXucXacUpdate
            return { ...state }
        } break;
        case end_game:{
            // xử lý khi thưởng tiền
            state.danhSachCuoc.forEach((qc, index)=>{
                let xxnn=state.danhSachXucXac.findIndex(xx=>xx.ma===qc.ma)
                if(xxnn!=-1){
                    state.tongTien+=state.danhSachCuoc[index].cuoc
                }
            })
            //xử lý hoàn tiền lại
            state.danhSachXucXac.forEach((xx,index)=>{
                let indexqc=state.danhSachCuoc.findIndex(qc=>qc.ma===xx.ma)
                if(indexqc!==-1){
                    state.tongTien+=state.danhSachXucXac[index].cuoc
                }
            })

            state.danhSachCuoc=[...state.danhSachCuoc.map((item,index)=>{return {...item,cuoc:0}})]
            return {...state}
        }
        default: return { ...state }
    }
}

export default BaiTapBauCuaReducer