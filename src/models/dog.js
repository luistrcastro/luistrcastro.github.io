const Dog = class {
  constructor() {
    this.nome = "";
    this.idade = 0;
    this.raca = "";
    this.servico = {
      tipo: "",
      nome: "",
      preco: 0,
      observacoes: "",
      finalizado: false,
      extra: false,
      data: ""
    };
  }
};

export default Dog;
