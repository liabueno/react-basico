import React, { useState } from 'react';
import Input from './Input';
import './Form.css';

function Form() {
  // Estado para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    motivo: '',
    message: '',
  });

  // Estado para gerenciar a mensagem de confirmação ou erro
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Manipulador para atualizar o estado quando os valores dos campos mudam
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manipulador para enviar os dados do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    try {
      const response = await fetch('http://localhost:5000/contatos', { // Substitua pelo seu endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('A resposta da rede não foi ok');
      }

      // Limpa os dados do formulário após o envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        motivo: '',
        message: '',
      });

      // Define a mensagem de confirmação
      setMessage('Mensagem enviada com sucesso!');
      setIsError(false); // Não é um erro
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
      setIsError(true); // É um erro
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite o seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>
          Motivo para o contato:
          <select
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
          >
            <option value="">Selecionar opção</option>
            <option value="reclamacao">Reclamação</option>
            <option value="elogio">Elogio</option>
            <option value="sugestao">Sugestão</option>
          </select>
        </label>
        <label>
          Mensagem:
          <textarea
            name="message"
            placeholder="Deixe sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>

        {/* Exibe a mensagem de confirmação ou erro antes do formulário */}
        {message && (
          <p className={`message ${isError ? 'error-message' : 'confirmation-message'}`}>
            {message}
          </p>
      )}

    </div>
  );
}

export default Form;
