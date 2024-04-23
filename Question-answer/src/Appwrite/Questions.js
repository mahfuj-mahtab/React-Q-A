import { Client, Account,Databases,Query} from 'appwrite';
import {ID} from 'appwrite'
export class QuestionService{
    client = new Client();
    account;
    databases
    constructor(){
    console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID
    
    this.databases = new Databases(this.client);
}
async createQuestion({Title,Content,Category,User}){
    console.log(import.meta.env.VITE_APPWRITE_DB_ID);
        const  promise =await this.databases.createDocument(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            ID.unique(),
          
            {
                Title,Content,Category,User
    
            }
        );
        
        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }

    async showAllQuestions(){
        return  await this.databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            [
                
            ]
        )
    }
   
  
}
const questionService = new QuestionService()
export default questionService