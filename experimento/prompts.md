# Few-shot — Padrão de implementação do Jaguara

## Exemplo

O Jaguara possui uma entidade Pet definida em TypeScript:

```typescript
interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  birthDate: string;
  weight: number;
}

O cadastro dessa entidade é realizado através de um componente PetForm.tsx.

A persistência é realizada através do serviço petService.ts.

A página Pets.tsx integra o formulário, o serviço e a listagem.

Ao implementar novas funcionalidades, siga esse mesmo padrão de separação entre tipos, componentes, serviços e páginas.

Implemente a funcionalidade de registro de medicamentos para um pet, seguindo os padrões de arquitetura, componentes, tipos, formulários, persistência e estilização já utilizados no projeto. 

O medicamento deve possuir:

- nome;
- dosagem;
- frequência;
- horários;
- data de início;
- data de término;
- observações.

A implementação deve seguir os padrões existentes no projeto.

Não altere funcionalidades existentes que não sejam necessárias para implementar essa funcionalidade.

Ao finalizar, execute o build do projeto e corrija eventuais erros relacionados à implementação.