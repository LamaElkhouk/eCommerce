import axios from "axios";
class ArticleApi{
    URL_BASE = `http://localhost:3004/article`

    async getAll(){
        try{
            const response=await axios.get(this.URL_BASE);
            return response;
        } catch(e){
            console.log(e);
        }
    }
    async getOne(id:any){
        try{
            const response=await axios.get(this.URL_BASE+`/${id}`);
            return response;
        } catch(e){
            console.log(e);
        }
    }
    async getByCategorie(categorie:any){
        try{
            const response=await axios.get(this.URL_BASE+`?categorie=${categorie}`);
            return response;
        } catch(e){
            console.log(e);
        }
    }
}

export default new ArticleApi();
