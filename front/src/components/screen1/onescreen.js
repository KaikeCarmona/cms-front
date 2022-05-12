import react from "react";
import { AddSide, EyeSide, HomeApp, ItensSidebar, RemoveSide, SearchBar, SearchButton, Searching, Sidebar, StyledInput, SwitchToggle, UpdateSide } from "./styleonescreen";


export default function ScreenOne (){

    function nome() {
        console.log("rodando")
    }

    return(
        <>
            <Sidebar>
                <ItensSidebar>
                    <UpdateSide/>
                    <AddSide/>
                    <RemoveSide/>
                    <EyeSide/>
                    {/* <AddCircle/>
                    <RemoveCircleOutline/>
                    <Eye/> */}
                </ItensSidebar>
            </Sidebar>
            <HomeApp>
                <SearchBar>
                    <StyledInput id="dado"></StyledInput>
                    <SearchButton onClick={get()}>
                        <Searching></Searching>
                    </SearchButton>
                </SearchBar>
            </HomeApp>
            <SwitchToggle>
                <input type="checkbox"/>
                <span/>
            </SwitchToggle>
        </>
    );
}

function get() {
    let dado = document.querySelector('#dado').value
    
    function dados(id) {
      fetch(`http://localhost:3000/${id}`)
      .then(res => res.json())
      .then((data) =>{
        console.log(data)
      });
    }
  
  dados(dado);
  }
    