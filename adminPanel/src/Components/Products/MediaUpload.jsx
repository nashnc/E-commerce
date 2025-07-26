import React, { useRef, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MediaUpload = () => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    updateFileList(droppedFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    updateFileList(selectedFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const updateFileList = (newFiles) => {
    // Avoid duplicates based on file name + size
    const updatedFiles = [
      ...files,
      ...newFiles.filter(
        (newFile) =>
          !files.some(
            (existingFile) =>
              existingFile.name === newFile.name &&
              existingFile.size === newFile.size,
          ),
      ),
    ];
    setFiles(updatedFiles);
  };

  const handleRemove = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {files.map((file, index) => {
          const objectURL = URL.createObjectURL(file);
          return (
            <div key={index} className="group relative h-[200px] w-[200px]">
              <LazyLoadImage
                src={objectURL}
                effect="blur"
                alt={`Preview ${index}`}
                className="h-[200px] w-[200px] rounded object-cover shadow"
              />
              <button
                onClick={() => handleRemove(index)}
                className="absolute right-1 top-1 rounded-full bg-[rgba(0,0,0,0.5)] px-2 py-1 text-xs text-white opacity-80 hover:opacity-100"
              >
                ✕
              </button>
            </div>
          );
        })}
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`group flex h-[225px] w-[300px] min-w-[300px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center transition-colors ${
            isDragging
              ? "border-[rgba(0,0,0,0.7)] bg-[rgba(0,0,0,0.1)]"
              : "border-gray-300 hover:border-[rgba(0,0,0,0.7)]"
          }`}
        >
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <p className="text-center text-gray-600">
            Drag & drop files here or{" "}
            <span className="text-[rgba(0,0,0,0.7)] underline">
              click to upload
            </span>
          </p>
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            alt=""
            className="w-[200px] min-w-[200px] object-fill opacity-30 group-hover:opacity-60"
          />
        </div>
      </div>
    </>
  );
};

export default MediaUpload;
