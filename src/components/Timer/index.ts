// import React from 'react'
// import Box from '@mui/material/Box';
// import { InnerBgStyle, MainTimerStyle, StatusStyle, TimerInfoStyle } from './TimerClock.styles';
// import { useEffect, useState } from 'react';
// import { Font, Mode } from '../../utils/enum';
// import TimerClock from './TimerClock';

// export const index = () => {
//   return (
//     <>
//     <Box component='main' width='100%'>
//     <Box 
//       component='a'
//       onClick={onTimerButtonClick}
//       sx={{
//         // ...MainTimerStyle,
//         '&:hover': {
//           cursor: 'pointer',
//           '.timer-status': {     
//             color: currentselectedcolour,   
//           },
//         },
//       }}    
//     >      
//       <Box sx={InnerBgStyle}>
        
//         <Box sx={TimerInfoStyle}>      
//           <Box
//             component='span'
//             sx={(theme) => ({
//               fontSize: font === Font.Space ? 90 : 100,
//               fontFamily: font,
//               letterSpacing,
//               fontWeight,
//               [theme.breakpoints.down('sm')]: {
//                 fontSize: font === Font.Space ? 70 : 75,
//               },
//             })}
//           >
//             {convertTime(seconds)}
//           </Box>
//           <Box
//             component='span'
//             className='timer-status'
//             sx={(theme) => ({
//               ...StatusStyle,
//               fontFamily: font,
//               [theme.breakpoints.down('sm')]: {
//                 fontSize: 12,
//               },
//             })}
//           >
//             {timerStatus}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   </Box>
//     </>
//   )
// }
export {}