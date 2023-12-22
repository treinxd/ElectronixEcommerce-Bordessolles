import data from "./data.json";

export const infoProductos = () => {
    return new Promise ((resolve, reject) => {        
        try {
            setTimeout(() => {
                resolve(data);
            }, 100)
        } catch (error) {
            reject(error);
        }              
    })
}

export const conseguirItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id)
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}