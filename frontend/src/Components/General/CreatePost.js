import React from "react";

const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="card createCard">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Content" />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Image</span>
                        <input type="file" multiple />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload Image" />
                    </div>
                    
                    <button style={{margin:"15px 40%"}} className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;