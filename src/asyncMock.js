const products = [
    {
        id:'1',
        name:'REMERA NIKE RUNNING CLUB',
        price:'10500',
        category:'remeras',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/62ced7af-d07f-4cdc-9716-b8bb3e1e15fe-49d555ed42ff9ea83316403018225088-640-0.webp',
        stock:'20',
        description:'Remera de microfibra color negro.'
    },
    {
        id:'2',
        name:'PANTALÓN ADIDAS TIRAS BLANCAS',
        price:'16000',
        category:'pantalones',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/33e73ce4-12db-4a07-a329-2afff65cdb13_nube-bc6708287b114ecc8e16165221214169-640-0.webp',
        stock:'15',
        description:'Pantalón de microfibra negra, media estación.'
    },
    {
        id:'3',
        name:'SHORT AFA PREMIUM',
        price:'11000',
        category:'shorts',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/04ff1346-54c5-4e5e-b8f5-cf6e62d2bf321-71d0453a55d66eaa5c16790645403225-640-0.webp',
        stock:'15',
        description:'Short de microfibra con lycra, tela deportiva.'
    },
    {
        id:'4',
        name:'BUZO AFA AZUL',
        price:'19000',
        category:'buzos',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/ea99d920-c029-4625-9502-da8c0ac063c61-55e484e889d2bd5f3416790762280493-640-0.webp',
        stock:'10',
        description:'Buzo de microfibra con Lycra.'
    },
    {
        id:'5',
        name:'REMERA ADIDAS BOCA',
        price:'12000',
        category:'remeras',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/017db216-18f6-4843-ab16-050f322781aa_nube-9e7e37160e4ea31e7716142857103760-640-0.webp',
        stock:'20',
        description:'Remera de microfibra color negro.'
    },
    {
        id:'6',
        name:'PANTALÓN NIKE REFLEX',
        price:'16000',
        category:'pantalones',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/cd668c89-7d1d-4071-83e8-2af111546891_nube-3e5307c39cfb39703516165220616158-640-0.webp',
        stock:'15',
        description:'Pantalón de microfibra negra, media estación.'
    },
    {
        id:'7',
        name:'BUZO JUVENTUS REFLEX',
        price:'19000',
        category:'buzos',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/image-3f9168bd0d79fe9bf516219502906125-640-0.webp',
        stock:'10',
        description:'Buzo de microfibra con Lycra, color blanco.'
    },
    {
        id:'8',
        name:'SHORT NIKE RUNNING CLUB',
        price:'11000',
        category:'shorts',
        img:'https://acdn.mitiendanube.com/stores/001/323/830/products/9616eaa8-910f-474e-9cd4-156f06719f8e-d1e825d3598ede3ed316455717526406-640-0.webp',
        stock:'12',
        description:'Short de microfibra con lycra, tela deportiva.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products)
        }, 500);
        
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);

    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
        
    })
}
