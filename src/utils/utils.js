// If you don't want to host your server code and client code together, you can
// pay AWS to host your server with HTTPS then config the api url endpoints like below
// const SERVER_ORIGIN = '<Your server's url>';
const SERVER_ORIGIN = 'http://localhost:8080';

const loginUrl = `${SERVER_ORIGIN}/login`;

export const login = (credential) => {
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log in');
        }

        return response.json();
    })
}

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to register');
        }
    })
}

const itemsUrl = `${SERVER_ORIGIN}/items`;

export const addItem = (item) => {
    return fetch(itemsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ favorite: item })
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to add item');
        }
    })
}

export const getAllItems = async () => {
     let resp = await fetch("http://localhost:8080/items/");
     let data = await resp.json();
     console.log(data);
     return data;
     // then((response) => {
     //    console.log(response.json())
     //    if (response.status !== 200) {
     //        throw Error('Fail to get all Items');
     //    }

        // return response.json();
    // })
}

export const getItemsByUserId = (userId) => {
    return fetch(itemsUrl).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to get all Items');
        }

        return response.json();
    })
}

const getItemDetailsUrl = `${SERVER_ORIGIN}/item?itemId=`;

const getItemDetails = (itemId) => {
    return fetch(`${getItemDetailsUrl}${itemId}`).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to find the game');
        }

        return response.json();
    });
}

const orderUrl = `${SERVER_ORIGIN}/order/checkout/itemId= `;

export const addOrder = (message) => {
    return fetch(orderUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ message: message })
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to add item');
        }
    })
}

