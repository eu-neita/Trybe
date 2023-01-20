const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   const orderToobj = Object.values(order);
//   const deliveryP = orderToobj[3].delivery.deliveryPerson;
//   const address = `R: ${orderToobj[2].street} Nº: ${orderToobj[2].number} AP: ${orderToobj[2].apartment}`
// return console.log(`Olá ${deliveryP} entrega para: ${order.name}, telefone: ${order.phoneNumber} ${address}`);

// };

// customerInfo(order);

const orderModifier = (order) => {
order.name = 'Luiz Silva';
const orderToobj = Object.values(order);
orderToobj[4].total = 50;
const drinks = orderToobj[3].drinks.coke;
const pizzaKey = Object.keys(orderToobj[3].pizza);
return console.log(`Olá ${order.name} , o total do seu pedido de ${pizzaKey[0]}, ${pizzaKey[1]} e ${drinks.type} é R$ ${orderToobj[4].total},00.`);
};

orderModifier(order);