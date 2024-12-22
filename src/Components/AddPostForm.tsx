import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Redux/Store/store';
import { addPost } from '../Redux/Slices/postSlice';
import { TextField, Button, Box, Snackbar, Alert, Typography} from '@mui/material';


const AddPostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost({ userId: Number(userId), title, body }));
    setOpenSnackbar(true); 
    setUserId('');
    setTitle('');
    setBody('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); 
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
         <Typography variant="h6" component="div"  sx={{ textAlign: 'center', marginBottom: 2 }}>
                  Add New Post
                </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User ID"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" fullWidth>
          Add Post
        </Button>
      </form>

 
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Post Added Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddPostForm;
