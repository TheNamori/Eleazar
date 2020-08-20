const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema(
  {
    name: {
      type: String,
      required: [true, 'É necessário o nome do cliente!'],
      minlength: [4, 'O nome do cliente deve possuir mais de 4 caracteres'],
      maxlength: [50, 'O nome do cliente deve possuir menos de 50 caracteres'],
    },
    city: {
      type: String,
      default: 'Osasco',
      required: [true, 'É necessário a cidade do cliente!'],
      minlength: [4, 'O nome da cidade deve possuir mais de 4 caracteres'],
      maxlength: [50, 'O nome da cidade deve possuir menos de 50 caracteres'],
    },
    neighborhood: {
      type: String,
      required: [true, 'É necessário o bairro do cliente!'],
      minlength: [4, 'O nome do bairro deve possuir mais de 4 caracteres'],
      maxlength: [50, 'O nome do bairro deve possuir menos de 50 caracteres'],
    },
    address: {
      type: String,
      required: [true, 'É necessário o endereço do cliente!'],
      minlength: [10, 'O endereço deve possuir mais de 10 caracteres'],
      maxlength: [100, 'O endereço deve possuir menos de 100 caracteres'],
    },
    deliverer_fee: {
      type: Number,
      default: 3,
      required: [true, 'É necessário o valor da entrega'],
      min: [0, 'O valor da entrega não pode ser menor que R$ 0,00.'],
    },
    phone: {
      type: String,
      required: [true, 'É necessário um telefone'],
      minlength: [8, 'O telefone deve ser válido'],
      unique: true,
    },
    orders: [
      {
        type: String,
        minlength: [24, 'Digite um id de pedido válido!'],
        maxlength: [24, 'Digite um id de pedido válido!'],
        ref: 'orders',
      },
    ],
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('clients', Client);
