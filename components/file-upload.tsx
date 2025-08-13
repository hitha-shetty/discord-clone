"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"

interface FileUploadProps{
    endPoint : "serverImage" | "messageFile"
    value : string,
    onChange : (url? : string)=>void,
}

const FileUpload = ({
    endPoint,
    value,
    onChange
 } : FileUploadProps) => {
  
  console.log("FileUpload rendering with endpoint:", endPoint);
  
  return (
    <div className="!p-2">
      <UploadDropzone
        endpoint={endPoint}
        onClientUploadComplete={(res)=>{
            console.log("Upload complete:", res);
            onChange(res?.[0].url)
        }}
        onUploadError={(error: Error)=>{
            console.error("Upload error:", error);
        }}
        onUploadBegin={(fileName) => {
            console.log("Upload started:", fileName);
        }}
        onUploadProgress={(progress) => {
            console.log("Upload progress:", progress);
        }}
        config={{
            mode: "auto"
        }}
      />
    </div>
  );

};

export default FileUpload;
