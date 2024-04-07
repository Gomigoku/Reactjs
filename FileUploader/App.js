import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [selectedFile, setSelectedFile] = useState();

  const onFileChange =(event) =>{
      setSelectedFile(event.target.files[0]);
  }

  const onFileUpload = () =>{
      const formData = new FormData();
      formData.append("myFiles", selectedFile, selectedFile.name);
      console.log(selectedFile);
      console.log(formData);
      axios.post("api/uploadfiles", formData);
  }

  const fileData = () => {
    if(selectedFile){
      return(
        <div>
          <h1>File Details:</h1>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    }
    else{
      return( <div>
        <br></br>
        <h4>Choose file before hitting upload button!!</h4>
      </div>);
    }
  }
  return (
    <div>
      <h1>File Uploader</h1>
      <input type="file" onChange={onFileChange}></input>
      <button onClick={onFileUpload}>Upload!</button>
      {fileData()}
    </div>
  )
}

export default App
