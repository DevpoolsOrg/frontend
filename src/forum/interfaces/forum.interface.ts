

export interface ForumPost {
    id: string;
    title: string;
    content:string;
    userId: string;
    tematicArea: string;
    isPublished: boolean;
    category: Category;
    votes: Vote[];
}


export interface Vote {
    id: string;
    voteOption: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}


export interface ForumStoreI {
    posts: ForumPost[];
    categories: Category[];
    selectedPost: ForumPost | null;
    isLoading: boolean;
    createPost: (post: ForumPost) => void;
    updatePost: (postId: string, post: ForumPost) => void;
    deletePost: (postId: string) => void;
    getPosts: () => void;
    getPostById: (postId: string) => void;
    addPost: (post: ForumPost) => void;
    setPosts: (posts: ForumPost[]) => void;
    votePost: (postId: string, vote: Vote) => void;
    createCategory: (category: Category) => void;
    updateCategory: (categoryId: string, category: Category) => void;
    deleteCategory: (categoryId: string) => void;
    getCategories: () => void;
    setCategories: (categories: Category[]) => void;
    addCategory: (category: Category) => void;
}