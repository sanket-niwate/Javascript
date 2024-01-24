function fetchdata() {
    return new Promise((resolve, reject) => {
        const success= Math.random()<0.8;
        if (success) {
            resolve({message:'data received'});
        } else {
            reject(new Error("error"));
        }
    })
    
}


fetchdata().then((data)=>{
    console.log('success'+data.message);

}).catch((error)=>{
    console.log('error'+error.message);
})


async function syncdata() {
    const data= await fetchdata();
    if (data) {
        console.log(data);
    } else {
        console.log("not");
    }
}

syncdata()