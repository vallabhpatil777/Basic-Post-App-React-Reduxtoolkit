## Post Application 


### Approach 


1. Created a React application with Redux Toolkit for state management.Used jsonplaceholder.typicode.com as the API for fetching and adding posts.

2. Configured a Redux store (store.ts) to manage the application state. Used postSlice to handle the posts data, including fetching and adding posts.
   Leveraged createAsyncThunk for asynchronous actions to fetch and add posts.

3. Created a reusable axiosInstance for API requests with a base URL and default headers.

4. Implemented fetchPosts to load posts from the API and merge them with local storage data. Implemented addPost to add a new post via the API and update local storage.

5. Posts added by the user are saved to local storage for persistence across sessions (as after refresh the newly added posts were not visible). Combined local storage posts with API data during the post fetch operation.

6. Configured routing with React Router for navigation between homepage and Add post page.

7. Created different components 
<ul>
<li>Navbar Component: Provided navigation between the post list page (/) and add post page (/add-post).</li>
<li>PostList Component: Fetched posts from the Redux store and displayed posts in a responsive grid layout using Material-UI components.</li>
<li>AddPostForm Component: A form to allow users to add new posts. Showed a success Snackbar(Material-UI component) on successful post submission.</li>
</ul>
8. Styling is done using Material-UI components. Added hover and transition effects for better UI experience.


### Assumptions :

Local storage is used to persist user-added posts after browser refresh since the API is not persistent.



### Installation 

1. Clone this repository to your local machine using `git clone https://github.com/vallabhpatil777/Basic-Post-App-React-Reduxtoolkit.git`.
2. Move the appropriate directory using `cd <your-directory-path>`
3. Run `npm install` to install the required dependencies from package.json file.
4. Run `npm run dev` to start the web server locally. 

