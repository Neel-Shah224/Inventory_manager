import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert/*, { AlertProps }*/ from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  
    const {open,message,severity}=props.props
    const {setMessageContent}=props
    console.log(props)

  const handleClose = (event) => {
    

    setMessageContent({open:false,message:'',severity:severity});
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}
