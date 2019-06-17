import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const QuadroForm = styled.div`
width: 20em;
margin: 3em;
padding: 1em;
text-align: center;
background: linear-gradient(90deg, rgba(247,145,169,1) 8%, rgba(251,175,152,1) 100%);

input{
  text-align: center;
  background-color: white;
  border: solid 1px black;
  height: 1em;
  margin: 2em;
  margin-left: 3em;
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
  font-size: 18px;
}

button{
  margin: 0em 2em;
  border-radius: 5px;
  border: none;
  background-color: #fa2557;
  color: white;
  padding: 0.5em 1em;

}
`

const Quadro = styled.div`
padding: 1em;
width: 20em;
height: 15em;
margin: 3em;
background: linear-gradient(90deg, rgba(247,145,169,1) 8%, rgba(251,175,152,1) 100%);

span{
  margin: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
  font-size: 18px;
}
`
const Buttons = styled.div`
text-align: center;
margin: 1em 0em;

button{
  margin: 0em 2em;
  border-radius: 5px;
  border: none;
  background-color: #fa2557;
  color: white;
  padding: 0.5em 1em;
}
`

class Tarefa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    const { onDelete, identificador } = this.props;

    onDelete(identificador);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.nomeInput.value, this.descricaoInput.value, this.props.nome);

    this.setState({ isEdit: false });
  }

  render() {
    const { identificador, nome, descricao } = this.props;

    return (
      <div>
        {
          this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <QuadroForm>
                  Nome: <input placeholder="Nome" ref={nomeInput => this.nomeInput = nomeInput} defaultValue={nome} />
                  Descrição: <input placeholder="Descrição" ref={descricaoInput => this.descricaoInput = descricaoInput} defaultValue={descricao} />
                  <button type="submit">Salvar</button>
                </QuadroForm>
              </form>
            ) :
            (
              <Quadro>
                <span>Indentificador: {identificador}</span>
                <span>Nome: {nome}</span>
                <span>Descrição: {descricao}</span>
                <Buttons>
                  <button onClick={this.onEdit}>Editar</button>
                  <button onClick={this.onDelete}>Apagar</button>
                </Buttons>
              </Quadro>
            )
        }
      </div>

    );
  }
}

export default Tarefa;
