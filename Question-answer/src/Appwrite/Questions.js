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
async createQuestion({Title,Content,Category,User}){
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
async createQuestionAnswer({title,q_id,user}){
    // console.log(import.meta.env.VITE_APPWRITE_DB_ID);
        return  await this.databases.createDocument(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_Answer_ID,
            ID.unique(),
          
            {
                title,q_id,user
    
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
    async showQuestionAllAnswer(id,queries = [Query.equal('q_id' , id)]){
        console.log('id is',id);
        
        return  await this.databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_Answer_ID,
           queries
        )
    }
    async showCategoryWiseQuestions(cat,queries = [Query.equal('Category' , cat)]){
        
        return  await this.databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
           queries
        )
    }
    async showSearchWiseQuestions(q,queries = [
        Query.search('Title' , [q]),
        // Query.search('Content' , q)
    
        ]){
        
        return  await this.databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
           queries
        )
    }
   
  
}
const questionService = new QuestionService()
export default questionService