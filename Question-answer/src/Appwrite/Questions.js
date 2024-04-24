import { Client, Account,Databases,Query} from 'appwrite';
import {ID} from 'appwrite'
import { Navigate } from 'react-router-dom';
export class QuestionService{
    client = new Client();
    account;
    databases
    constructor(){
    // console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID
    
    this.databases = new Databases(this.client);
}
async createQuestion({Title,Content,Category,User= 'two@gmail.com'}){
    // console.log(import.meta.env.VITE_APPWRITE_DB_ID);
        return  await this.databases.createDocument(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            ID.unique(),
          
            {
                Title,Content,Category,User
    
            }
        );
        
        // promise.then(function (response) {
        //     console.log(response);
        //     Navigate('/')
        // }, function (error) {
        //     console.log(error);
        // });
    }

    async showAllQuestions(){
        return  await this.databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            [
                
            ]
        )
    }
    async showQuestionAnswer($id){
        console.log('id',$id);
        
        return  await this.databases.getDocument(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            $id
        )
    }
   
  
}
const questionService = new QuestionService()
export default questionService