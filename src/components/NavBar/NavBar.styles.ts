export const ToggleButtonGroupStyles = {p: 1};

export const NavBarButtonStyles = (bgColour: string) => ({
  backgroundColor: bgColour,
  '&.MuiToggleButton-root:hover': {
    backgroundColor: bgColour,
  },
  color: 'primary.dark',                  
});           