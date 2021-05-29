import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchPosts();

        const action = {
            type: "FETCH_ALL",
            payload: data,
        };
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);

        const action = {
            type: "CREATE",
            payload: data,
        };
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};
