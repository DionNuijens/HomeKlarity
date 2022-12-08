const { createPool
} = require('mysql2');

const pool = createPool({
    host:"192.168.236.132",
    user:"Denzel",
    password: "Welcome123!@#",
    database: "klarity",
    connectionLimit:10
})




var antwoord = (function(){

    pool.query(`SELECT * FROM  scanresult ORDER BY time DESC LIMIT 1`, (err, result, fields)=>{
        if(err){
            throw err;
        }
        
        return result;
    })
    
    })

    
//   const x =  pool.query(`SELECT * FROM  scanresult ORDER BY time DESC LIMIT 1`, (err, result, fields)=>{
//         if(err){
//             return err;
//         }
//         //console.log(result)
//         return result;
//     })

//     console.log(x);

    
    



    export default antwoord