export class HttpService {


    _handleErrors(res) {
        if(!res.ok) {
            if(!res.ok) throw new Error(res.statusText);
      }
        return res;
    }


    get(url, tokens={}) {
   
        return fetch(url,{headers:{ 
                                    'Accept' : 'application/json',
                                    'Content-Type' : 'application/json',
                                    'Authorization' : `Bearer ${tokens.token}`,
                                    'session_id' : `${tokens.session_id}`,
                                    },
                                    method: 'GET'           
            })
            //.then(res => this._handleErrors(res))
            .then(res => res.json())
            .catch(erro=> erro);
        
    }
    
    post(url, dado, token='') {
        //console.log('POST:',url);
        return fetch(url, {
            headers: { 
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json',
                        'Authorization' : `Bearer ${token}`},
            method: 'post',
            body: JSON.stringify(dado)
        })
       // .then(res => this._handleErrors(res))
        .then(res =>{console.log('httpservice:: ',res); return res.json()})
        .catch(erro=>erro);
    }


    put(url, dado, token='') {
        //console.log('PUT:',url);
        return fetch(url, {
            headers: { 
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json',
                        'Authorization' : `Bearer ${token}`},
            method: 'put',
            body: JSON.stringify(dado)
        })
       // .then(res => this._handleErrors(res))
        .then(res => res.json())
        .catch(erro=>erro);
    }


}