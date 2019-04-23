//create myswqldump backup at 00:00 h every day

var cron = require('node-cron');
const mysqldump = require('mysqldump');

cron.schedule('0 0 * * *', () => {

async function asyncCall() {
    try{

      let conn = await mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                port: '3307',
                password: 'password',
                database: 'database',
            },
            dumpToFile: '/path/to/your/folder/daily_dump_nodejs.sql',
        })
    
        
        let result = await mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                port: '3307',
                password: 'password',
                database: 'database',
            },
        })

       

    }catch(error){

        console.error(error);
        conn.close();
      
    }

  }

  asyncCall();

});
  
 
  

