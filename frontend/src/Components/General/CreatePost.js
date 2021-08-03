import React, {useState, useEffect} from "react";
import "./css/signin.css";
import {Link, useHistory} from "react-router-dom"; 
import M from "materialize-css";

const CreatePost = () => {

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageURL,setImageURL] = useState("");
    const [image,setImage] = useState("")

    useEffect(()=>{
        if(imageURL)
        {
            fetch("/create",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    imageURL
                })
            }).then(response => response.json())
                .then(data => {
                    if(data.error)
                    {
                        M.toast({html: data.error,classes:"#00b0ff light-blue accent-3"})
                    }
                    else
                    {
                        M.toast({html: 'Successfully Posted',classes:"#9ccc65 light-green lighten-1"});
                        history.push("/");
                    }
                })
                .catch(err => console.error(err))
        }
    },[imageURL])


    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","talkytalkypic")
        data.append("cloud_name","talkytalky")
        fetch("https://api.cloudinary.com/v1_1/talkytalky/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            M.toast({html: 'Successfully Saved to Cloudinary',classes:"#9ccc65 light-green lighten-1"});
            console.log(data);
            setImageURL(data.url);
        })
        .catch(err=>{
            console.log(err)
        })    
    }

    return (
        <div className="create-post">
            <div className="card createCard">
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" />
                <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} placeholder="Content" />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Image</span>
                        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload Image" />
                    </div>
                    
                    <button style={{margin:"15px 40%"}} onClick={()=>postDetails()} className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;