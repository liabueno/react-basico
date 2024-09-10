// components/Form.js
import React from 'react';
import Input from './Input';
import './Form.css';

function Form() {
  return (
    <form>
      <Input type="text" name="name" label="Nome" placeholder="Digite seu nome" required />
      <Input type="email" name="email" label="E-mail" placeholder="Digite o seu e-mail" required />
      <label>
        Motivo para o contato:
        <select name="motivo" required>
          <option defaultValue='selected'>Selecionar opção</option>
          <option value="reclamacao">Reclamação</option>
          <option value="elogio">Elogio</option>
          <option value="sugestao">Sugestão</option>
        </select>
      </label>
      <label>
        Mensagem:
        <textarea name="message" placeholder="Deixe sua mensagem" required></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
