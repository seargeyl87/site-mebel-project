

export default class PostService {

    
    static async getAllTrend() {
    let response = [
        {
          "id":1, "status":"New", "style": "pict-name-new", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../trending-products-item1.png", "rating": 5
        },
      
        {
          "id":2, "status":"New", "style": "pict-name-new",  "name":"Chair", "new_price": 120, "old_price": 150, "description": "Minimal iconic chair", "url": "../../trending-products-item2.png", "rating": 4
        },
      
        {
          "id":3, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Dining chairs", "url": "../../trending-products-item3.png", "rating": 5
        },
      
        {
          "id":4, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 130, "old_price": 150, "description": "Buskbo armchair", "url": "../../trending-products-item4.png", "rating": 4
        },
      
        {
          "id":5, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Modern chairs", "url": "../../trending-products-item5.png", "rating": 5
        },
        {
          "id":6, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 130, "old_price": 150, "description": "Plastic dining chair", "url": "../../trending-products-item6.png", "rating": 4
        },
      
        {
          "id":7, "status":"New", "style": "pict-name-new", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal Wood chair", "url": "../../trending-products-item7.png", "rating": 5
        },
      
        {
          "id":8, "status":"New", "style": "pict-name-new", "name":"Chair", "new_price": 120, "old_price": 150, "description": "Elegent wood chair", "url": "../../trending-products-item8.png", "rating": 4
        }
      ]
                return response;
    }
           
    static async getOurProduct() {
        let response = [
            {
            "id":9, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
            "id":10, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":11, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
          
            {
            "id":12, "status":"Sale", "style": "pict-name-sale", "name":"Tabble", "new_price": 100, "old_price": 120, "description": "Wood Coffee Tables", "url": "../../our-products-products-item4.png", "rating": 5
            },
          
            {
            "id":13, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
            {
            "id":14, "status":"Sale", "style": "pict-name-sale", "name":"Bench", "new_price": 130, "old_price": 150, "description": "Amalia Cowhide Bench", "url": "../../our-products-products-item6.png", "rating": 4
            },
          
            {
            "id":15, "status":"New", "style": "pict-name-new", "name":"Storage", "new_price": 180, "old_price": 250, "description": "Juno-Hinged Lid Storage", "url": "../../our-products-products-item7.png", "rating": 5
            },
          
            {
            "id":16, "status":"New", "style": "pict-name-new", "name":"Furniture", "new_price": 120, "old_price": 150, "description": "Delicia 3 Piece Living Room", "url": "../../our-products-products-item8.png", "rating": 4
            },
           {
            "id":17, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
            "id":18, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":19, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
          
            {
            "id":20, "status":"Sale", "style": "pict-name-sale", "name":"Tabble", "new_price": 100, "old_price": 120, "description": "Wood Coffee Tables", "url": "../../our-products-products-item4.png", "rating": 5
            },
          
            {
            "id":21, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
            {
            "id":22, "status":"Sale", "style": "pict-name-sale", "name":"Bench", "new_price": 130, "old_price": 150, "description": "Amalia Cowhide Bench", "url": "../../our-products-products-item6.png", "rating": 4
            },
          
            {
            "id":23, "status":"New", "style": "pict-name-new", "name":"Storage", "new_price": 180, "old_price": 250, "description": "Juno-Hinged Lid Storage", "url": "../../our-products-products-item7.png", "rating": 5
            },
          
            {
            "id":24, "status":"New", "style": "pict-name-new", "name":"Furniture", "new_price": 120, "old_price": 150, "description": "Delicia 3 Piece Living Room", "url": "../../our-products-products-item8.png", "rating": 4
            },
           {
            "id":25, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
             "id":26,  "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
              "id":27, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
          
            {
              "id":28, "status":"Sale", "style": "pict-name-sale", "name":"Tabble", "new_price": 100, "old_price": 120, "description": "Wood Coffee Tables", "url": "../../our-products-products-item4.png", "rating": 5
            },
          
            {
              "id":29,  "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
            {
              "id":30,  "status":"Sale", "style": "pict-name-sale", "name":"Bench", "new_price": 130, "old_price": 150, "description": "Amalia Cowhide Bench", "url": "../../our-products-products-item6.png", "rating": 4
            },
          
            {
              "id":31,  "status":"New", "style": "pict-name-new", "name":"Storage", "new_price": 180, "old_price": 250, "description": "Juno-Hinged Lid Storage", "url": "../../our-products-products-item7.png", "rating": 5
            },
          
            {
              "id":32, "status":"New", "style": "pict-name-new", "name":"Furniture", "new_price": 120, "old_price": 150, "description": "Delicia 3 Piece Living Room", "url": "../../our-products-products-item8.png", "rating": 4
            },
           {
            "id":33, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
            "id":34, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":35, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
          
            {
            "id":36, "status":"Sale", "style": "pict-name-sale", "name":"Tabble", "new_price": 100, "old_price": 120, "description": "Wood Coffee Tables", "url": "../../our-products-products-item4.png", "rating": 5
            },
          
            {
            "id":37, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
            {
            "id":38, "status":"Sale", "style": "pict-name-sale", "name":"Bench", "new_price": 130, "old_price": 150, "description": "Amalia Cowhide Bench", "url": "../../our-products-products-item6.png", "rating": 4
            },
          
            {
            "id":39, "status":"New", "style": "pict-name-new", "name":"Storage", "new_price": 180, "old_price": 250, "description": "Juno-Hinged Lid Storage", "url": "../../our-products-products-item7.png", "rating": 5
            },
          
            {
            "id":40, "status":"New", "style": "pict-name-new", "name":"Furniture", "new_price": 120, "old_price": 150, "description": "Delicia 3 Piece Living Room", "url": "../../our-products-products-item8.png", "rating": 4
            },
           {
            "id":41, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
            "id":42, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":43, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
          
            {
            "id":44, "status":"Sale", "style": "pict-name-sale", "name":"Tabble", "new_price": 100, "old_price": 120, "description": "Wood Coffee Tables", "url": "../../our-products-products-item4.png", "rating": 5
            }
          ]
                return response;   
    }

    static async getMenu() {
        let response = [
            {"name": "All" , "id": 1, "link": ""}, 
            {"name": "New Arrivals" , "id": 2, "link": ""}, 
            {"name": "Hot Sale" , "id": 3, "link": ""}, 
            {"name":  "Furniture", "id": 4, "link": ""}, 
            {"name":  "Amrature", "id": 5, "link": ""},
            {"name": "Tabble" , "id": 6, "link": ""}, 
            {"name": "Chair" , "id": 7, "link": "/chairs"}, 
            {"name":  "Sofa", "id": 8, "link": "/sofa"}, 
            {"name":  "Mirrors", "id": 9, "link": ""},
            {"name":  "Stools", "id": 10, "link": ""}, 
            {"name":  "Benches", "id": 11, "link": ""}
            ]
                return response;  
    }

    static async getPict() {
        let response = [
            {
            "head":"Office Blue Chair", "price": 190, "description": "this is a nice chair4", "url": "../../chair-head-item4.png"
            },
            {
            "head":"Office Desk Chair", "price": 120, "description": "this is a nice chair1", "url": "../../chair-head-item1.png"
            },
            {
            "head":"Home Alisa Sofa", "price": 180, "description": "this is a nice chair2", "url": "../../chair-head-item2.png"
            },
            {
            "head":"Modern Chair", "price": 250, "description": "this is a nice chair3", "url": "../../chair-head-item3.png"
            },
            {
            "head":"Modern Chair2", "price": 3350, "description": "this is a nice chair4", "url": "../../chair-head-item4.png"
            },
            {
            "head":"Office Desk Chair2", "price": 1120, "description": "this is a nice chair5", "url": "../../chair-head-item1.png"
            },
            {
            "head":"Home Alisa Sofa2", "price": 1220, "description": "this is a nice chair6", "url": "../../chair-head-item2.png"
            },
            {
            "head":"Modern Chair", "price": 450, "description": "this is a nice chair7", "url": "../../chair-head-item3.png"
            }
            ]
                return response;  
    }
 
    static async getSofa() {
        let response = [
            {
            "id":45, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":46, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
            {
            "id":47, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
            {
            "id":48, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
            {
             "id":49,  "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
            {
              "id":50, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
            {
            "id":51, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":52, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            },
            {
            "id":53, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
            },
          
            {
            "id":54, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
            }
          ]
          return response; 
    }
    static async getChairs() {
        let response = [
            {
            "id":55, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
          
            {
            "id":56, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
          
           {
            "id":57, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
            {
            "id":58, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
           
           {
            "id":59, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
           
            {
              "id":60,  "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
          
           {
            "id":61, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            },
            {
            "id":62, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
            },
            
           
           {
            "id":63, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
            }
          ]
                return response;  
    }
    static async getProductId(id) {
      let response = [
        {
          "id":45, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
          },
        
          {
          "id":46, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
          },
          {
          "id":47, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
          },
          {
          "id":48, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
          },
          {
           "id":49,  "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
          },
          {
            "id":50, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
          },
          {
          "id":51, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
          },
        
          {
          "id":52, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
          },
          {
          "id":53, "status":"New", "style": "pict-name-new",  "name":"Sofa", "new_price": 120, "old_price": 150, "description": "Modern Sofa", "url": "../../our-products-products-item2.png", "rating": 4
          },
        
          {
          "id":54, "status":30, "style": "pict-name-discount", "name":"Sofa", "new_price": 130, "old_price": 150, "description": "Microfiber Sofa", "url": "../../our-products-products-item3.png", "rating": 4
          },
        {
          "id":55, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
          },
        
          {
          "id":56, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
          },
        
         {
          "id":57, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
          },
          {
          "id":58, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
          },
         
         {
          "id":59, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
          },
         
          {
            "id":60,  "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
          },
         {
          "id":61, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
          },
          {
          "id":62, "status":30, "style": "pict-name-discount", "name":"Chair", "new_price": 100, "old_price": 120, "description": "Acacia Wood Club Chairs", "url": "../../our-products-products-item5.png", "rating": 5
          },
         {
          "id":63, "status":"Sale", "style": "pict-name-sale", "name":"Chair", "new_price": 180, "old_price": 250, "description": "Minimal LCD chair", "url": "../../our-products-products-item1.png", "rating": 5
          }
        ]
        return response.filter((item) => item.id===id); 
      }
}
