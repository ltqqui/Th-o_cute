import { end_game, play_game, tang_giam } from "../type/BaiTapBauCuaType";

export const tangGiamAction=(ma,tangGiam)=>({
    type:tang_giam,
    ma,
    tangGiam
})

export const playGameAction=()=>({
    type:play_game
})

export const endGameAction=()=>({
    type:end_game
})