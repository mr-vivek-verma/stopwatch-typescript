import Container from '@mui/material/Container';
import { useState } from 'react';
import { ApplicationData } from '../../utils/interfaces';
import NavBar from '../NavBar/NavBar';
import TimerClock from '../Timer/TimerClock';
import { MainContentStyles } from '.././Main/Main.styles';
import { Font, Mode } from "../../utils/enum";

const defaultData: ApplicationData = {
  pomodoro: 25,
  short_break: 5,
  long_break: 15,
  font: Font.Kumbh,
  color: 'red',
};

const colorTable: Record<string, string> = {
  red: '#508588',
  blue: '#70F3F8',
  purple: '#D881F8',
};

export default function MainContent() {
  const [applicationData, setApplicationData] = useState<ApplicationData>(defaultData);
  const [mode, setMode] = useState<Mode>(Mode.Pomodoro);
  
  

  return (
    <>
      <Container maxWidth='sm' sx={MainContentStyles}>
        <NavBar font={applicationData.font} currentselectedcolour={colorTable[applicationData.color]} mode={mode} setMode={setMode} />
        <TimerClock font={applicationData.font} mode={mode} defaultSeconds={applicationData[mode] * 60} currentselectedcolour={colorTable[applicationData.color]} />
      </Container>
      
    </>
  );
}