import React, { Component } from 'react';
import styled, { css } from 'styled-components'

import Tarefa from './Tarefa';
import AddTarefa from './AddTarefa';


const tarefas = [
  {
    identificador: 1,
    nome: 'criar banco',
    descricao: 'deve possuir os campo de identicador, nome e descrição'
  },
  {
    identificador: 2,
    nome: 'terminar codigo',
    descricao: 'concluir ações de apagar e editar'
  }
];

var identificador = 3;

localStorage.setItem('tarefas', JSON.stringify(tarefas));

const Title = styled.h1`
text-align: center;
color: #fa2557;
`

const TarefasInner = styled.div`
display: grid;
grid-template-areas: "a b c";
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: JSON.parse(localStorage.getItem('tarefas'))
    };
    
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const tarefas = this.getTarefas();

    this.setState({ tarefas });
  }

  getTarefas(){
    return this.state.tarefas;
  }

  onAdd(nome, descricao){
    const tarefas = this.getTarefas();

    tarefas.push({
      identificador, 
      nome,
      descricao
    });
    
    identificador = identificador + 1;

    this.setState({ tarefas });
  }

  onDelete (identificador){
    const tarefas = this.getTarefas();

    const filtroTarefas = tarefas.filter(tarefa => {
      return tarefa.identificador !== identificador;
    });

    this.setState({ tarefas: filtroTarefas});
  }

  onEditSubmit( nome, descricao, originalNome){
    let tarefas = this.getTarefas();

    tarefas = tarefas.map(tarefa => {
      if (tarefa.nome === originalNome){
        tarefa.nome = nome;
        tarefa.descricao = descricao;
      }

      return tarefa;
    });

    this.setState({tarefas});
  }

  render() {
    return (
      <div className="App">
        <Title>Tarefas</Title>

        <AddTarefa
             onAdd={this.onAdd}/>

        
        <TarefasInner>{
            this.state.tarefas.map(tarefa => {
              return (
                  <Tarefa
                    key={tarefa.identificador}
                    {...tarefa}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                  />
                
              );
            })
          }</TarefasInner>
      }
      </div>
    );
  }
}

export default App;
