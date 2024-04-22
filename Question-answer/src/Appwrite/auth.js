import { Client, Account} from 'appwrite';
import {ID} from 'appwrite'
export class AuthService{
    client = new Client();
    account;
    constructor(){
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID
    this.account = new Account(this.client);
   
}
 createAccount ({email,password,name}){

    const promise = this.account.create(ID.unique(),email, password,name);
    promise.then(function (response) {
            console.log(response); // Success
            console.log('success'); // Success
        }, function (error) {
            console.log(error); // Failure
            console.log('fail'); // Success
        })
    }
    async login({email,password}){
        try {
            const userSession = await this.account.createEmailPasswordSession(email,password)
            console.log(userSession.providerUid);
            return userSession
        } catch (error) {
            console.log(`error in login :: ${error}`);
        }
    }
    async getCurrentUser(){
        try {
            user = await this.account.get()
            console.log(user);
            return user

        } catch (error) {
            console.log(`error in current user get :: ${error}`);
            
        }
    }
    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}
const authService = new AuthService()
export default authService