import React, { ChangeEvent } from 'react';
import InputLabel from '../input/Input';
import './style.css';
import ErrorCard from '../errorCard/ErrorCard';

interface ClientFormProps {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errorList: {
    name: string;
    email: string;
    cpf: string;
    phoneNumber: string;
    status: string;
  };
}

function ClientForm({ onChange, errorList }: ClientFormProps) {
  return (
    <div className="client-form">
      <InputLabel name="name" placeholder="Nome" onChange={onChange} error={errorList.name} />
      <InputLabel name="email" placeholder="E-Mail" onChange={onChange} error={errorList.email} />
      <InputLabel name="cpf" placeholder="Cpf" onChange={onChange} error={errorList.cpf} />
      <InputLabel name="phoneNumber" placeholder="Telefone" onChange={onChange} error={errorList.phoneNumber} />
      <div>
        <select className="client-form-select-status" name="status" onChange={onChange}>
          <option value={undefined} hidden>
            Status
          </option>
          <option value="Ativo">Ativo</option>
          <option value="Desativado">Desativado</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
        </select>
        <ErrorCard message={errorList.status} />
      </div>
    </div>
  );
}

export default ClientForm;
