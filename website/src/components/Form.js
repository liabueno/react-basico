import React from 'react';
import './Form.css';
 
function Form() {
  return (
    <form>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea name="mensagem" required></textarea>
      </div>
      <div>
        <label>Gênero:</label>
        <select>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
 
export default Form;