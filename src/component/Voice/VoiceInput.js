import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPause, faPlay, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import './VoiceInput.css'
export const VoiceInput = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [receivedAudio, setReceivedAudio] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const startRecord = async () => {
        setIsRecording(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const newRecorder = new RecordRTC(stream, {
                type: 'audio',
                mimeType: 'audio/wav',
                recorderType: StereoAudioRecorder,
                desiredSampRate: 22500,
                numberOfAudioChannels: 1
            });
            newRecorder.startRecording();
            setRecorder(newRecorder);
            console.log('record started');
            setTimeout(() => { startVAD(newRecorder, stream); }, 5000);
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const startVAD = (recorder, stream) => {
        const audioContext = new AudioContext();
        const mediaStreamSource = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        mediaStreamSource.connect(analyser);

        const bufferSize = 2048;
        const buffer = new Float32Array(bufferSize);

        const checkForSilence = () => {
            analyser.getFloatTimeDomainData(buffer);

            let rms = 0;
            for (let i = 0; i < bufferSize; i++) {
                rms += buffer[i] * buffer[i];
            }
            rms = Math.sqrt(rms / bufferSize);

            const silenceThreshold = 0.01;

            if (rms < silenceThreshold) {
                if (isRecording) {
                    stopRecord(recorder);
                }
            } else {
                if (isRecording) {
                    setTimeout(checkForSilence, 3000);
                }
            }
        };
        checkForSilence();
    };

    const stopRecord = (recorder) => {
        setIsRecording(false);
        recorder.stopRecording(() => {
            const audioBlob = recorder.getBlob();
            setAudioBlob(audioBlob);
            sendAudioToAPI(audioBlob);
        });
    };

    const sendAudioToAPI = (audioBlob) => {
        const formData = new FormData();
        formData.append('query', audioBlob, 'recording.wav');
        // fetch('http://192.168.1.71:8000/api/ask/', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => {
        //     if (response.ok) {
        //         return response.blob();
        //     } else {
        //         throw new Error('Network response was not ok.');
        //     }
        // }).then(blob => {
        //     const url = URL.createObjectURL(blob);
        //     const audio = new Audio(url);
        //     audio.controls = true;
        //     audio.autoplay = true;
        //     setReceivedAudio(audio);
        //     audio.addEventListener('ended', () => {
        //         stopPlaying();
        //     });
        // }).catch(error => {
        //     console.error('Error receiving or processing audio:', error);
        // });
    };

    const stopPlaying = () => {
        if (receivedAudio) {
            receivedAudio.pause();
            setReceivedAudio(null);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                id="startRecordButton"
                className={`flex items-center justify-center w-24 h-24  transition-all duration-1000 ${isRecording ? 'hidden' : 'flex'}`}
                onClick={startRecord}
            >
                <FontAwesomeIcon icon={faMicrophone} className="text-gray-600 text-4xl" />
            </div>

            <div id="recording" className={`flex flex-row items-center ${isRecording ? 'flex' : 'hidden'}`}>
                <div className="relative w-24 h-8 flex items-center overflow-hidden">
                    <div className="absolute w-2 h-8 bg-blue-600 rounded-md animate-expand" style={{ left: '20px' }}></div>
                    <div className="absolute w-2 h-8 bg-blue-600 rounded-md animate-expand" style={{ left: '40px', animationDuration: '1.5s' }}></div>
                    <div className="absolute w-2 h-8 bg-blue-600 rounded-md animate-expand" style={{ left: '60px', animationDuration: '1.25s' }}></div>
                    <div className="absolute w-2 h-8 bg-blue-600 rounded-md animate-expand" style={{ left: '80px', animationDuration: '1.75s' }}></div>
                </div>
                <FontAwesomeIcon
                    icon={faPause}
                    id="stopRecording"
                    className="mt-2   h-8 w-20"
                    onClick={() => stopRecord(recorder)}
                />
            </div>
            <div id="speaking" className={`flex flex-col items-center ${receivedAudio ? 'flex' : 'hidden'}`}>
                <FontAwesomeIcon icon={faVolumeUp} />
                <button
                    id="stop-button"
                    className="mt-2 w-16 bg-blue-600 border-2 border-black rounded-md"
                    onClick={stopPlaying}
                >
                    Stop
                </button>
            </div>
            {/* <button onClick={()=>{
                const audio=new Audio(URL.createObjectURL(audioBlob))
                audio.autoplay=true;
            }}>Click me to play</button> */}
            <div id="receivedAudio" className={`hidden ${receivedAudio ? '' : 'hidden'}`}></div>
        </div>
    );
};
