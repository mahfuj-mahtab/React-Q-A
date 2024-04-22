import { Client, Account} from 'appwrite';
import {ID} from 'appwrite'
export class AuthService{
    client = new Client();
    account;
    constructor(){
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6620a9a025f93acf8fa0'); // Replace with your project ID
    this.account = new Account(this.client);
    // const promise = this.account.create(ID.unique(),'mohot11@gmail.com', 'mohot66468','Mohot');
    // promise.then(function (response) {
    //         console.log(response); // Success
    //         console.log('success'); // Success
    //     }, function (error) {
    //         console.log(error); // Failure
    //         console.log('fail'); // Success
        // })
}
}
const authService = new AuthService()
export default authService