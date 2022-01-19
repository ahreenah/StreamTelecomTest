import Styled from 'styled-components';
import {Fragment} from 'react'


let Card = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    box-shadow:1px 1px 10px 2px #e0e0e0;
    border-radius:6px;
    padding:20px;
    gap:5px;
`

let Name=Styled.div`
    font-weight:500;
`

let Contacts = Styled.div`
    margin-top:10px;
    display:flex;
    gap:10px;
    flex-direction:row;
`

let Link = Styled.a`
    text-decoration:none;
    color:#505050;
    &:hover{
        color:#008090;
    }
`

export default function ({data,listType}){
    const ShowType=listType?Fragment:Contacts;
    return (
    <Card>
        <div>
            <Name>{data.fullname}</Name>
        </div>
        <ShowType>
            <div>
                <Link href={'mailto://'+data.email}>{data.email}</Link>
            </div>
            <div>
                <Link href={'tel://'+data.phone}>{data.phone}</Link>
            </div>
        </ShowType>
    </Card>)
}