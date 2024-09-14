import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
// import { getDownloadURL, uploadBytes } from 'firebase/storage';
import React, { useState }  from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import {ref, uploadBytes} from 'firebase/storage';


function UploadImages() {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const onFileSelected=(event)=>{
    const files = event.target.files;

    for(let i=0; i<files?.length;i++){
      const file =files[i];
      setSelectedFileList((prev)=>[...prev,file])
    }

  }

  const onImageRemove = (image,index)=>{
    const result = selectedFileList.filter((item)=> item!=image);
    setSelectedFileList(result);
  }

  const UploadImages = ()=>{
    selectedFileList.forEach((file)=>{
      const fileName = Date.now() + '.jpeg';
      const storageRef = ref(storage, 'car-marketplace/' + fileName);
      const metaData = {
        contentType: 'image/jpeg'
      }
      uploadBytes(storageRef, file,metaData).then((snapShot)=>{
        console.log('Uploaded File');
      }).then(resp=>{
        getDownloadURL(storageRef).then(async(downloadUrl)=>{
          console.log(downloadUrl);
        })
      })
    })
    
  }

  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload car Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
          {selectedFileList.map((image,index)=>(
            <div key = {index}>
              <IoIosCloseCircle className='absolute m-2 text-lg text-white'
              onClick={()=>onImageRemove(image, index)}/>
              <img src= {URL.createObjectURL(image)} className='w-full h-[130px] object-cover'/>
              </div>
          ))}
            <label htmlFor='upload-images'>
              <div className='border rounded-xl border-dotted
              border-primary bg-blue-100 p-10 cursor-pointer hover:shadow'>
                <h2 className='text-lg text-center text-primary'>+</h2>
              </div>

            </label>
            <input type = "file" multiple={true} id='upload-images' 
            onChange= {onFileSelected}
            className='opacity-0'/>
            </div>
            <Button onClick={UploadImages}>Upload Images</Button>
    </div>
  )
}

export default UploadImages