import axios from 'axios';


export default class PostService {

    
    static async getAllTrend() {
    let response = await axios.get('https://apimocha.com/seargeyl87/mebel/trending')
                return response.data;
    }
           
    static async getOurProduct() {
        let response = await axios.get('https://apimocha.com/seargeyl87/mebel/our-products')
                return response.data;   
    }

    static async getMenu() {
        let response = await axios.get('https://apimocha.com/seargeyl87/mebel/list_menu')
                return response.data;  
    }

    static async getPict() {
        let response = await axios.get('https://apimocha.com/seargeyl87/mebel/pict_menu')
                return response.data;  
    }

    static async getSofa(url) {
        let response = await axios.get(`https://apimocha.com/seargeyl87/mebel/${url}`)
                return response.data;  
    }
    static async getChairs() {
        let response = await axios.get('https://apimocha.com/seargeyl87/mebel/chairs')
                return response.data;  
    }
}
