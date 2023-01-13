import axios from 'axios';
import {useEffect, useState} from 'react';
import {Image, Text, View, TextInput} from 'react-native';
import RNFS from 'react-native-fs';
import CustomButton from './components/button';
import Styles from './styles';

const MusicDownloader = () => {
  const [songName, setSongName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imgPath, setImgPath] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    console.log(imgPath);
  }, [imgPath]);

  useEffect(() => {
    console.log('Progress====', progressPercent);
  }, [progressPercent]);

  const onPressHandler = () => {
    RNFS.downloadFile({
      fromUrl: `https://pagalfree.com/download/128-${songName}%20-%20${movieName}%20128%20Kbps.mp3`,
      toFile: `${RNFS.DownloadDirectoryPath}/${songName}.mp3`,
      progress: res => {
        setProgressPercent((res.bytesWritten / res.contentLength) * 100);
      },
    });
  };
  return (
    <View>
      <TextInput
        placeholder="Enter movie name"
        style={Styles.inputStyle}
        onChangeText={text => setMovieName(text)}
        textAlign="center"
      />
      <TextInput
        placeholder="Enter song name"
        style={Styles.inputStyle}
        onChangeText={text => setSongName(text)}
        textAlign="center"
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
        <>
          <Image
            style={{height: 400, width: 400}}
            source={{
              uri: imgPath,
            }}
          />
          <CustomButton title="download" onPress={onPressHandler} />
        </>
      )}
    </View>
  );
};

export default MusicDownloader;
