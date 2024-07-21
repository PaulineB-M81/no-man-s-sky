export const fetchHelper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method: string) {
    return (url: string, body: Object) => {
        let requestOptions = {};
        if (body) {
            requestOptions = {
                method,
                body: JSON.stringify(body)
            }; 
        } else {
            requestOptions = {
                method,
            };
        }
    
        return fetch(url, requestOptions);
    }
}