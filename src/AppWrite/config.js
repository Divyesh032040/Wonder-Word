
/* eslint-disable no-unused-vars */
import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../config/conf";



export class Service {
    client = new Client();
    databases; 
    bucket; 
   
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.PROJECT_ID);

        this.databases = new Databases(this.client); 
        this.bucket = new Storage(this.client); 
    }
    
    // Create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const data = await this.databases.createDocument(
                conf.DATABASE_ID, 
                conf.COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            console.log("my data",data)
            return data;
        } catch (error) {
            console.error('Error creating post:', error);
            throw new Error('Something bad happened while creating the post.');
        }
    }

    // Update Post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    content
                }
            );
        } catch (error) {
            console.error('Error updating post:', error);
            throw new Error('Something bad happened while updating the post.');
        }
    }

    // Delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                slug
            );
            return true;
        } catch (error) {
            console.error('Error deleting post:', error);
            throw new Error('Something bad happened while deleting the post.');
        }
    }

    // Get a Single Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                slug
            );
        } catch (error) {
            console.error('Error fetching post:', error);
            throw new Error('Something bad happened while fetching the post.');
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }


    // Upload File
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.BUCKET_ID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error('Error uploading file:', error);
            throw new Error('Something bad happened while uploading the file.');
        }
    }

    // Delete File
    async deleteFile(fileId) {
        
        try {
            await this.bucket.deleteFile(
                conf.BUCKET_ID,
                fileId
            );
            return true;
        } catch (error) {
            console.error('Error deleting file:', error);
            throw new Error('Something bad happened while deleting the file.');
        }
    }
    
    // Get File Preview
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.BUCKET_ID,
            fileId,
            
        )
    }
}

const service = new Service();
export default service;
