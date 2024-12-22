import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/Slices/postSlice';
import { AppDispatch } from '../Redux/Store/store';
import { RootState } from '../Redux/Store/store';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const status = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <Typography>Loading...</Typography>;
  if (status === 'failed') return <Typography>Error: {error}</Typography>;

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3}>
        {posts.map((post: Post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 5,
                backgroundColor: '#fff', 
                borderRadius: 2, 
                transition: 'transform 0.3s ease', 
                '&:hover': {
                  transform: 'scale(1.05)', 
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography color="text.secondary">User ID: {post.userId}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostList;
