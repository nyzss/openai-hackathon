import React, { useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

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
    <div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        mirrored={true}
      />
      <button onClick={capture}>Capture photo</button>

      {rawData && <img src={rawData} alt="mon image wsh" />}
    </div>
  );
};
