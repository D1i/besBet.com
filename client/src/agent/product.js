import axios from "axios";

export const product = {
    get: {
        all: (callback) => {
            axios('http://81.177.165.218:8080/product').then(callback)
        },
        byId: () => {

        }
    },
    post: {
        simplePublish: () => {},
        multiPublish: () => {}
    },
    delete: {
        byId: () => {}
    }
}
