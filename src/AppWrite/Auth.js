/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { Client, Account , ID } from "appwrite";
import conf from '../config/conf'

export class AuthService {

    client = new Client();
    account;


    constructor (){

        //console.log("Appwrite URL:", conf.appwriteUrl); 
        
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.PROJECT_ID)

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        
        try {
           const userAccount =  await this.account.create(ID.unique(),email,password , name);
           if(userAccount){
            
            return this.login({email,password});
           }else {
            return userAccount;
           }
        } catch (error) {
            throw error
        }
    }

    async login ({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }
    
    async getCurrentUser() {
        try {
            // Check if a session exists first (i.e., user is logged in)
            const session = await this.account.get();
            if (session) {
                console.log("User data:", session);
                return session;
            } else {
                console.log("No active session found.");
                return null;
            }
        } catch (error) {
            console.log("Error fetching user:", error);
            throw error;
        }
    }
    

    async logOut (){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw Error('Something bad happened.');
        }
    }
}

const authService = new AuthService();

export default authService 



