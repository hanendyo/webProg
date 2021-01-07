// ASYNC AWAIT

function cobaPromise(){
    return new Promise((resolve, reject)=>{
        const waktu = 2000;
        if(waktu < 5000){
            setTimeout(()=>{
                resolve('selesai!')
            }, waktu);
        } else {
            reject('KELAMAAN CUY!')
        }
    });
}


// try & catch
async function cobaAsync(){
    try{
        const coba = await cobaPromise();
       console.log(coba); 
    } catch(err) {
       console.error(err);    
    }
}

cobaAsync();