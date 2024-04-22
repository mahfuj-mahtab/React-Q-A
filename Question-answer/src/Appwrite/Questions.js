import { Client, Account,Databases} from 'appwrite';
import {ID} from 'appwrite'
export class QuestionService{
    client = new Client();
    account;
    constructor(){
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID
    const databases = new Databases(this.client);
   
}
   async createQuestion({title,content,category,user}){
        return  promise =await this.databases.createDocument(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
          
            {
                title,content,category,user
    
            }
        );
        
        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }


   
  
}
const questionService = new QuestionService()
export default questionService