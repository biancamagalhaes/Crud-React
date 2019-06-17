import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Formulario = styled.div`
background: linear-gradient(90deg, rgba(255,64,108,1) 8%, rgba(255,104,57,1) 100%); 
margin: 22em;
margin-top: 2em;
margin-bottom: 1em;
padding: 3em;
display: block;
text-align: center;

h3{
    color: white;
    padding: -1em;
    margin-top: -1em;
    font-size: 26px;
}
input{
    margin-right: 2em;
}

button{
    margin: 0em 2em;
    border-radius: 5px;
    border: none;
    background-color: white;
    font-weight: bolder;
    color: #fa2557;
    padding: 0.5em 1em;
}
`

class AddTarefa extends Component {
  constructor(props){
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();

    this.props.onAdd(this.nomeInput.value, this.descricaoInput.value);
  
    this.nomeInput.value = '';
    this.descricaoInput = '';
}
  
    render() {
    return (
    <Formulario> 
        <form onSubmit={this.onSubmit}>
          <h3>Adicionar Tarefa</h3>
          <input placeholder="Nome" ref={nomeInput => this.nomeInput = nomeInput}/>  
          <input placeholder="Descrição" ref={descricaoInput => this.descricaoInput = descricaoInput}/>  
          <button type="submit">Cadastrar</button>
      </form>
    </Formulario>

    );
  }
}

export default AddTarefa;
