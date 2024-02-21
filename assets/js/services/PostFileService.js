export class PostFileService {


    _handleErrors(res) {
        if(!res.ok) {
            if(!res.ok) throw new Error(res.statusText);
      }
        return res;
    }


    get(url, token='') {
        return fetch(url,{headers:{ 
            'Authorization' : `Bearer ${token}`            
            },
            cache: "no-cache",
            method: 'GET'           
            })
            .then( res => res.blob() )
            .then( blob => {
              let file = window.URL.createObjectURL(blob);
              return file;
            })
            .catch(erro=>erro);
        
    }
    
    post(url, dado, token='') {
        return fetch(url, {
            headers: {
                        'Authorization' : `Bearer ${token}`},
            method: 'post',
            body: dado
        })
        //.then(res => res.json())
        .then(res => res)
        .catch(erro=>{console.log(erro); return erro});

    }
}