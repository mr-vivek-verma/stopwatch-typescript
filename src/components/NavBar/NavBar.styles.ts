import { relative } from "path";

export const ToggleButtonGroupStyles = {p: 0.5};

export const NavBarButtonStyles = (bgColour: string) => ({
  backgroundColor: bgColour,
  '&.MuiToggleButton-root:hover': {                                            
    backgroundColor: bgColour,                                                                                               
  },                                                                 
  color: 'primary.dark',                                                                                                                                                                                                                                              
  
});   
                      

