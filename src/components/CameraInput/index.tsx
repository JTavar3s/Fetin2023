import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as Styled from './styles';
import { timeout } from 'workbox-core/_private';

interface CameraInputProps {
    onCapture: (imageData: string) => void;
}

const CameraInput: React.FC<CameraInputProps> = ({ onCapture }) => {
    const webcamRef = useRef<Webcam>(null);
    const [numPhotosTaken, setNumPhotosTaken] = useState<number>(0);

    function delay(delay: number) {
        return new Promise(r => {
            setTimeout(r, delay);
        })
    }

    const capturePhoto = async () => {
        const imageData = webcamRef.current?.getScreenshot();
        if (imageData) {
            for (let i = 0; i <= 10; i++) {
                await delay(1000);
                onCapture(imageData)
                setNumPhotosTaken(i)
            }
        }
    };


    return (
        <Styled.Webcam>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" style={{
                borderRadius: '10%',
                width: '300px',
            }} />
            <Styled.Button onClick={() => capturePhoto()} disabled={numPhotosTaken >= 10}>
                Capture Photo ({numPhotosTaken}/10)
            </Styled.Button>
        </Styled.Webcam>
    );
};

export default CameraInput;
