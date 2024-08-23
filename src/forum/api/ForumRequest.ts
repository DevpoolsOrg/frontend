import httpClientAdapter from "@/adapters/httpClient.adapter";
import { Category, ForumPost, Vote } from "../interfaces/forum.interface";



export class ForumRequests {

    private static baseUrl = import.meta.env.VITE_URL_API;

    static async getPosts() {
        const response = await httpClientAdapter.get<ForumPost[]>(`${this.baseUrl}/api/posts`, {withCredentials: true});
        return response;
    };

    static async getPostById(id: string) {
        const response = await httpClientAdapter.get<ForumPost>(`${this.baseUrl}/api/posts/${id}`, {withCredentials: true});
        return response;
    };

    static async createPost(data: { title: string, content: string, category: string }) {
        const response = await httpClientAdapter.post<ForumPost>(`${this.baseUrl}/api/posts`, data, { withCredentials: true });
        return response;
    };

    static async updatePost(id: string, data: { title: string, content: string, category: string }) {
        const response = await httpClientAdapter.patch<ForumPost>(`${this.baseUrl}/api/posts/${id}`, data, { withCredentials: true });
        return response;
    };

    static async deletePost(id: string) {
        return await httpClientAdapter.delete<Promise<void>>(`${this.baseUrl}/api/posts/${id}`, { withCredentials: true });
    }

    static async votePost(postId: string, voteOption: string) {
        const response = await httpClientAdapter.post<Vote>(`${this.baseUrl}/api/posts/${postId}/vote`, { voteOption }, { withCredentials: true });
        return response;
    };

    static async getCategories() {
        const response = await httpClientAdapter.get<Category[]>(`${this.baseUrl}/api/categories`, {withCredentials: true});
        return response;
    };

    static async createCategory(data: { name: string, description: string }) {
        const response = await httpClientAdapter.post<Category>(`${this.baseUrl}/api/categories`, data, { withCredentials: true });
        return response;
    };

    static async updateCategory(id: string, data: { name: string, description: string }) {
        const response = await httpClientAdapter.patch<Category>(`${this.baseUrl}/api/categories/${id}`, data, { withCredentials: true });
        return response;
    };

    static async deleteCategory(id: string) {
        return await httpClientAdapter.delete<Promise<void>>(`${this.baseUrl}/api/categories/${id}`, { withCredentials: true });
    }

}