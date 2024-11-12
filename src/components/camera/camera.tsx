import React, { useState } from 'react';
import Webcam from 'react-webcam';

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: 'user',
// };

export const WebcamComponent = () => {
  const webcamRef = React.useRef<Webcam | null>(null);

  const [rawData, setRawData] = useState('');

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      if (imageSrc != null) setRawData(imageSrc);

      console.log(imageSrc);
    }
  }, [webcamRef]);
  return (
    <div className="flex space-x-5">
      <div className="flex flex-col space-y-4 mb-4  max-w-xl ">
        <Webcam
          audio={false}
          // height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // width={1280}
          // videoConstraints={videoConstraints}
          mirrored={true}
        />
        {/* make better styles for the button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-gray-200 p-3 rounded-md font-bold text-xl mx-auto"
          onClick={capture}
        >
          Capture
        </button>
      </div>
      <div>{rawData && <img src={rawData} alt="mon image wsh" />}</div>
    </div>
  );
};
