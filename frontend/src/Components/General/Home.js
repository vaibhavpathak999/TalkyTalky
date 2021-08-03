import React, { useState, useEffect } from "react";

const Home = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/posts', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
    }, [])

    return (
        <div className="home">
            {
                data.map(item => {
                    <div key={item._id} className="card home-card">
                        <h4>{item.postedBy}</h4>
                        <div className="card-image">
                            <img className="" src={item.imageURL} />
                        </div>
                        <div className="card-content">
                            <h5>{item.title}</h5>
                            <i class="material-icons" style={{ color: "red" }}>favorite</i>
                            <p>{item.body}</p>
                            <input type="text" placeholder="add comment"></input>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Home;