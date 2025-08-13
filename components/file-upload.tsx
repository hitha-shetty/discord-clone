"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  endPoint: "serverImage" | "messageFile";
  value: string;
  onChange: (url?: string) => void;
}

const FileUpload = ({ endPoint, value, onChange }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="upload" className="rounded-full" />
        <button
          onClick={()=>onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="!p-2">
      <UploadDropzone
        endpoint={endPoint}
        onClientUploadComplete={(res) => {
          console.log("Upload complete:", res);
          onChange(res?.[0].ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Upload error:", error);
        }}
        onUploadBegin={(fileName) => {
          console.log("Upload started:", fileName);
        }}
        onUploadProgress={(progress) => {
          console.log("Upload progress:", progress);
        }}
        config={{
          mode: "auto",
        }}
      />
    </div>
  );
};

export default FileUpload;
