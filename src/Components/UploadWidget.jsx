import { useEffect, useRef } from "react";


const cloudName = import.meta.env.VITE_CLOUD_NAME
const preset = import.meta.env.VITE_CLOUD_PRESET

const UploadWidget = ({onUpload}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: preset,
      },
      function (error, result) {
        console.log(result.info.url);
        onUpload(result.info.url)
      }
    );
  }, []);
  return (
  <button onClick={() => widgetRef.current.open()}>Upload</button>
)
};

export default UploadWidget;
