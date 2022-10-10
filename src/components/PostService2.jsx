import axios from "axios";


export default class PostService2 {
    static async getOurProduct(id, page) {


        let response = await axios.get('http://localhost:3000/employees', {
            params: {
                _limit: id,
                _page: page
            }
        })
        return response;
    }
 
}