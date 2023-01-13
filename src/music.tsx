import axios from 'axios';
import {useEffect, useState} from 'react';
import {Image, Text, View, TextInput} from 'react-native';
import RNFS from 'react-native-fs';
import CustomButton from './components/button';
import Styles from './styles';
import CircularProgress from 'react-native-circular-progress-indicator';
import RNFetchBlob from 'rn-fetch-blob';

const MusicDownloader = () => {
  const [songName, setSongName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imgPath, setImgPath] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    console.log(imgPath);
  }, [imgPath]);

  useEffect(() => {
    console.log('Progress====', progressPercent);
    progressPercent == 100 && setDownloading(false);
  }, [progressPercent]);

  useEffect(() => {
    console.log('re-render');
  }, [downloading]);

  const onPressHandler = () => {
    setDownloading(true);
    RNFetchBlob.config({
      path: `${RNFS.DownloadDirectoryPath}/${songName}.mp3`,
    })
      .fetch(
        'GET',
        `https://pagalfree.com/download/128-${songName}%20-%20${movieName}%20128%20Kbps.mp3`,
        {},
      )
      .progress((received, total) => {
        setProgressPercent((received * 100) / total);
        console.log('progress---', (received * 100) / total);
      })
      .then(res => {
        setDownloading(false);
        setProgressPercent(0);
        console.log('this file is saved to ', res.path());
      })
      .catch(res => console.log('error'));
  };
  return (
    <View>
      <TextInput
        placeholder="Enter movie name"
        style={Styles.inputStyle}
        onChangeText={text => setMovieName(text)}
        textAlign="center"
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Enter song name"
        style={Styles.inputStyle}
        onChangeText={text => setSongName(text)}
        textAlign="center"
        autoCapitalize="words"
      />
      <CustomButton
        title="Submit"
        onPress={() => {
          setImgPath(
            `https://pagalfree.com/images/128${songName}%20-%20${movieName}%20128%20Kbps.jpg`,
          );
          setIsSubmitted(true);
        }}
      />
      {isSubmitted && (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image
            style={{height: 300, width: 300}}
            source={{
              uri: imgPath,
            }}
          />
          <CustomButton title="download" onPress={onPressHandler} />
        </View>
      )}
      {downloading && (
        <CircularProgress
          value={progressPercent}
          radius={40}
          valueSuffix={'%'}
          activeStrokeColor="blue"
          activeStrokeWidth={3}
          progressValueStyle={{fontWeight: '100'}}
          inActiveStrokeColor="transparent"
        />
      )}
    </View>
  );
};

export default MusicDownloader;
