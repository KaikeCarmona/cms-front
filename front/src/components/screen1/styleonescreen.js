import styled from 'styled-components'
import { Update, RemoveCircleOutline } from "@styled-icons/material";
import { AddCircle } from "@styled-icons/ionicons-outline";
import { Eye } from "@styled-icons/evil";
import { Search } from "@styled-icons/ionicons-outline";


export const Sidebar = styled.div`
    width: 80px;
    height: 50vh;
    background-color:#232C33;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left:-8px;
`;

export const SwitchToggle = styled.div`
    width: 60px;
    height: 26px;
    border-radius: 16px;
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    margin-bottom: 45%;
    margin-right: 1%;
    position: relative;

    input{
        height: 100%;
        width: 100%;
        opacity: 0;
    }

    span{
        position: absolute;
        width: 32px;
        height: 26px;
        border-radius: 16px;
        background: rgba(16, 46, 74, 0.6);
        left: 0;
        transition: 0.5s;
    }

    input:checked + span{
        left: 45%;
    }
`;

export const ItensSidebar = styled.div`
    height:100%;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap:15%;
`;


export const UpdateSide = styled(Update)`
    margin-top: 6px;
    width:  62px;
    height: 80px;
    cursor: pointer;
    background-color: #0000FF;
    border-radius: 15px;
    margin-left: 8px;
`;


export const AddSide = styled(AddCircle)`
    width: 62px;
    height: 80px;
    cursor: pointer;
    background-color: #3385FF;
    border-radius: 15px;
    margin-left: 8px;
    `;

export const RemoveSide = styled(RemoveCircleOutline)`
    width: 62px;
    height: 80px;
    cursor: pointer; 
    background-color: #C03131;
    border-radius: 15px;
    margin-left: 8px;
    
`;

export const EyeSide = styled(Eye)`
    margin-bottom: 6px;
    width: 60px;
    height: 80px;
    cursor: pointer;
    background-color: #5CD65C;
    border-radius: 15px;
    margin-left: 8px;
`;

export const HomeApp = styled.div`
    width: 75%;
    height: 65%;
    background-color: #F4F4F9;
    margin: auto;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;

`;

export const SearchBar = styled.div`
    width: 100%;
    height: 10%;
    background-color: rgba(0,0,0, 0.75);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    @media (min-width: 576px){
        width: 100%;
    }
`;

export const StyledInput = styled.input`
    height: 30px;
    margin-top: 1%;
    margin-left: 25%;
    width: 300px;
    opacity: 0.81;
    outline: 0;

    @media (min-width: 576px){ 
        width: 50%;
    }
`;

export const SearchButton = styled.button`
    margin-left: 15px;
    color: white;
    cursor: pointer;
    justify-content: 'center';
    background-color: transparent;
    border: none;

    @media (min-width: 576px){
        margin-top: 10px;
    }

`

export const Searching = styled(Search)`
    height: 30px;
    width: 30px;
    color: white;
`