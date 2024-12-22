import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../Api/axiosInstance';
import { RootState } from '../Store/store';

const saveToLocalStorage = (data: any[]) => {
  localStorage.setItem('posts', JSON.stringify(data));
};

const loadFromLocalStorage = () => {
  const storedPosts = localStorage.getItem('posts');
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axiosInstance.get('/posts');
  const localPosts = loadFromLocalStorage();
  return [...localPosts, ...response.data];
});

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (newPost: { userId: number; title: string; body: string }, { getState }) => {
    const response = await axiosInstance.post('/posts', newPost);
    const localPosts = (getState() as RootState).posts.posts;
    const updatedPosts = [response.data, ...localPosts];
    saveToLocalStorage(updatedPosts); 
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: loadFromLocalStorage(),
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload); 
      });
  },
});

export default postSlice.reducer;
