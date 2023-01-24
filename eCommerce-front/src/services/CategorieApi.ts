
import axios from "axios";

class CategorieApi{
    URL_BASE=`http://localhost:3004/categorie`;

    async getAll(){
        try{
            const response= await axios.get(this.URL_BASE);
            return response;
        }catch(e){
            console.log(e);
        }
    }
    async getOne(id:any){
        try{
            const response= await axios.get(this.URL_BASE+`/${id}`);
            return response;
        }catch(e){
            console.log(e);
        }
        
    }
}
export default new CategorieApi();

