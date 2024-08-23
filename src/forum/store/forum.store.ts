import { create } from "zustand";
import { ForumStoreI } from "../interfaces/forum.interface";
import { ForumRequests } from "../api/ForumRequest";
import { handleStatusErrors } from "../utils/handleStatusCode";

export const useForumStore = create<ForumStoreI>((set) => ({
    posts: [],
    categories: [],
    selectedPost: null,
    isLoading: false,
    setPosts: (posts) => set({ posts }),

    setCategories: (categories) => set({ categories }),

    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    
    addCategory: (category) => set((state) => (
        { categories: [...state.categories, category] }
    )),

    updatePost: (postId, post) => set((state) => (
        { posts: state.posts.map((p) => p.id === postId ? post : p) }
    )),

    updateCategory: (categoryId, category) => set((state) => (
        { categories: state.categories.map((c) => c.id === categoryId ? category : c) }
    )),

    deletePost: (postId) => set((state) => (
        { posts: state.posts.filter((p) => p.id !== postId) }
    )),

    deleteCategory: (categoryId) => set((state) => (
        { categories: state.categories.filter((c) => c.id !== categoryId) }
    )),

    votePost: (postId, vote) => set((state) => (
        { posts: state.posts.map((p) => p.id === postId ? { ...p, votes: [...p.votes, vote] } : p) }
    )),

    getPosts: async() => {
        set({ isLoading: true });
        const response = await ForumRequests.getPosts();
        if( response.status === 200 ){
            return set({ posts: response.data, isLoading: false });
        }
        handleStatusErrors( response.status );
    },

    getCategories: () => set((state) => ({ categories: state.categories })),

    createPost: (post) => set((state) => ({ posts: [...state.posts, post] })),

    createCategory: (category) => set((state) => (
        { categories: [...state.categories, category] }
    )),

    getPostById: (postId) => set((state) => (
        { selectedPost: state.posts.find((p) => p.id === postId) }
    )),    
}));
