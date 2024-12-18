export const fetchHelper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method: string) {
    return async (url: string, body: Object) => {
        let requestOptions = {};
        if (body) {
            requestOptions = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(body)
            }; 
        } else {
            requestOptions = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                  }
            };
        }
    
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
    }
}

async function handleResponse(response: Response) {
   

    // check for error response
    if (!response.ok) {
       
        // get error message from body or default to response status
    
        return Promise.reject(await response.json());
    }

    return response;
}