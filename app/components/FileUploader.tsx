import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


const FileUploader = () => {
    const onDrop = useCallback(() => {
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <div className="w-full gradient-border">
           <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default FileUploader