import { useState } from 'react';
import type { Pet } from '../types/Pet';
import type { Medication } from '../types/Medication';

interface MedicationFormProps {
  pets: Pet[];
  onMedicationCreated: (medication: Medication) => void;
}

export function MedicationForm({ pets, onMedicationCreated }: MedicationFormProps) {
  const [petId, setPetId] = useState('');
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [times, setTimes] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!petId || !name || !dosage || !frequency || !times || !startDate || !endDate) {
      return;
    }

    const medication: Medication = {
      id: Date.now(),
      petId: Number(petId),
      name,
      dosage,
      frequency,
      times: times.split(',').map((time) => time.trim()).filter(Boolean),
      startDate,
      endDate,
      notes,
    };

    onMedicationCreated(medication);

    setPetId('');
    setName('');
    setDosage('');
    setFrequency('');
    setTimes('');
    setStartDate('');
    setEndDate('');
    setNotes('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar medicamento</h2>

      <select
        value={petId}
        onChange={(event) => setPetId(event.target.value)}
      >
        <option value="">Selecione o pet</option>
        {pets.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Nome do medicamento"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        placeholder="Dosagem"
        value={dosage}
        onChange={(event) => setDosage(event.target.value)}
      />

      <input
        placeholder="Frequência"
        value={frequency}
        onChange={(event) => setFrequency(event.target.value)}
      />

      <input
        placeholder="Horários (ex: 08:00, 20:00)"
        value={times}
        onChange={(event) => setTimes(event.target.value)}
      />

      <input
        type="date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />

      <input
        type="date"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
      />

      <textarea
        placeholder="Observações"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}
