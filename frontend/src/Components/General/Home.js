import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h4>Person Name</h4>
                <div className="card-image">
                    <img className="" src="https://images.unsplash.com/photo-1519693360201-4e53a8e0d45a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <h5>Post Title</h5>
                    <i class="material-icons" style={{color:"red"}}>favorite</i>
                    <p>This is going to be post's content</p>
                    <input type="text" placeholder="add comment"></input>
                </div>
            </div>
            
        </div>
    )
}

export default Home;