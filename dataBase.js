import { randomUUID } from 'node:crypto'

export class productDataBase{
    #products = new Map()

    list(){
        return Array.from(this.#products.values())
    }

    create(product){
        const productID = randomUUID()
        const newProduct = {id: productID, product}

        this.#products.set(productID, newProduct)
        return newProduct
    }

    update(id, product){
        this.#products.set(id, product)
    }

    delete(id){
        return this.#products.delete(id)
    }
}