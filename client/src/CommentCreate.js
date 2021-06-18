import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default ({postId}) => {

    const [content, setContent] = useState('');
    const onSubmit = async (e) => {
       e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content})
    setContent('')
    }
    return <div>
    <form onSubmit={onSubmit}>
    <div>
    <label className="form-group">New Comment</label>
    <input className="form-control" value={content} onChange={e => setContent(e.target.value)}></input>
    </div>
    <button className="btn btn-primary">Submit</button>
    </form>
    </div>;
}