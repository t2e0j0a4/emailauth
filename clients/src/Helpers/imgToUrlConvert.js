
export default function imgToURLConvert(file) {
    
    const base = new Promise ((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        }
        reader.onerror = (err) => {
            reject(err);
        }
    }).then((res)=>{
        return res;
    }).catch((err)=>{
        return err;
    })

    return base;
}