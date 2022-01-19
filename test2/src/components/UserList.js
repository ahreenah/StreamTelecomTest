import User from "./User"
import Styled from 'styled-components'
import {useState} from 'react'

let ViewType=Styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    gap:20px;
    margin-bottom:20px;
`

let GridStyle=Styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:20px;
    @media(max-width:1100px){
        grid-template-columns:1fr 1fr
    }
`

let ColStyle=Styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`

let TypeItem=({children, onClick, isActive})=>{
    return (
        <div onClick={onClick} style={{
            color:isActive?'#101010':'#a0a0a0'
        }}>{children}</div>
    )
}

let Grid = ({type, children})=>{
    let Comp = type?GridStyle:ColStyle;
    return <Comp>
        {children}
    </Comp>
}

export default function({list}){
    let [listType,setListType]=useState(0)
    return (
    <div>
        <ViewType>
            <TypeItem isActive={listType==0} onClick={() =>{setListType(0)}}>Список</TypeItem>
            <TypeItem isActive={listType==1} onClick={() =>{setListType(1)}}>Сетка</TypeItem>
        </ViewType>
        <Grid type={listType}>
            {list.map((i,num)=><User data={i} key={num} listType={listType}/>)}
        </Grid>
    </div>
    )
}