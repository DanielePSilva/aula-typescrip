/* EXERCICIO 2.5 
um código: 001
um cliente
com um nome (opcional): "Carlos Silva"
e um email: "carlos_silva13@gmail.com"
um preço
com um valor: 11.23
e uma moeda: "€"
uma flag que indica se a encomenda já foi ou não expedida: false
uma lista com os nomes dos produtos na encomenda: ["T-Shirt Branca"]*/


const order={
  code:`001`,
  customer{
    name:`Carlos Silva`
    Email: `carlos_silva13@gmail.com`
  },
  price{
    value: 11.23,
    currency:'€',
  },
  isShipped: false,
  products:[
    'T-shirt Branca'
  ]
}
 order.isShipped=true

 const formattedPrice= `${order.prince.currency}${order.priceValue}`