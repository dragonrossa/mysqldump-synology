//create myswqldump backup at 00:30 h every one hour, next on 01:30

var cron = require('node-cron');
const mysqldump = require('mysqldump');

cron.schedule('30 * * * *', () => {

async function asyncCall() {
    try{

      let conn = await mysqldump({
            connection: {
                host: '192.168.0.4', //ip adress
                user: 'root',
                port: '3306',
                password: 'password!',
                database: 'database',
            },
            dumpToFile: '/volume1/rosana/backup/docker_hour_dump_nodejs.sql',
        })
    
        
        let result = await mysqldump({
            connection: {
                host: '192.168.0.4',
                user: 'root',
                port: '3306', //main port for database, MariaDB5
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
  
 
  

