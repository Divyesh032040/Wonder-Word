 const config = {
    appwriteUrl: String(import.meta.env.VITE_ENDPOINT),

    PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),

    DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

    COLLECTION_ID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    SECRET_API_KEY:String(import.meta.env.secretKey)
}

export default config



  