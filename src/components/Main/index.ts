// import React from 'react'
// import Container from '@mui/material/Container';
// import { useState } from 'react';
// import { ApplicationData } from '../../utils/interfaces';
// import NavBar from '../NavBar/NavBar';
// import TimerClock from '../Timer/TimerClock';
// import { MainContentStyles } from './Main.styles';
// import { Font, Mode } from "../../utils/enum";
// import applicationData from "./Main"



// const defaultData: ApplicationData = {
//   pomodoro: 25,
//   short_break: 5,
//   long_break: 15,
//   font: Font.Kumbh,
//   color: 'red',
// };

// const colorTable: Record<string, string> = {
//   red: '#508588',
//   blue: '#70F3F8',
//   purple: '#D881F8',
// };

// type Mode = {
//   Pomodoro : string = 'Pomodoro',
//   // ShortBreak = 'short_break',
//   // LongBreak = 'long_break',
// }

// type Font = {
//   Kumbh :string = 'Kumbh Sans, sans-serif',
// //   Roboto = 'Roboto Slab, serif',
// //   Space = 'Space Mono, monospace',
// // }

// const index = (font:string) => {
//   return (
//     <div>
//         <Container maxWidth='sm' sx={MainContentStyles}>
//          <NavBar font={applicationData.font} currentselectedcolour={colorTable[applicationData.color]} mode={mode} setMode={setMode} />
//          <TimerClock font={applicationData.font} mode={mode} defaultSeconds={applicationData[mode] * 60} currentselectedcolour={colorTable[applicationData.color]} />
//           {/* <NavBar />
//          <TimerClock /> */}
//        </Container>
//     </div>
//   )
// }

export {}
