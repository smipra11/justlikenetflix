import React from "react"
import "./Banner.css"

function Banner(){
    return(
    <header className="banner" style={{
        backgroundSize:'cover',
        backgroundPosition:"center center",
        backgroundImage:`url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`
    }}>
        <div className="banner_contents">
            <h1 className="banner_title"> Movie Name</h1>
                   <div className="banner_buttons">
                      <button classNmae="banner_button">Play</button>
                     <button className="banner_button">My List</button>
                   </div>
                   <h1 className="banner_description">
                       This is a test description
                   </h1>
        </div>

    </header>
    )
}
export default Banner