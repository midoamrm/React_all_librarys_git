/* eslint-disable prettier/prettier */
import React,{ useRef } from 'react';
import {View,TouchableOpacity,Text} from 'react-native'

import VideoRecorder from 'react-native-beautiful-video-recorder';

export default function Videorr() {
// eslint-disable-next-line prettier/prettier

const videoRecorder = useRef(null)
   const  start = () => {
        // 30 seconds
        if (videoRecorder && videoRecorder.current) {
            videoRecorder.current.open({ maxLength: 30 }, (data) => {
              console.log('captured data', data);
            })
          }
    }


    return (
		<View>
			
		  <TouchableOpacity onPress={start}>
		  	<Text>Start</Text>
		  </TouchableOpacity>
          <VideoRecorder ref={videoRecorder} compressQuality={'medium'} />
		</View>
	);



}