/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const group = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Chief Editor',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Social Media Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  console.log(group)

  //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

  for (let i = 0; i < group.length; i++) {
    const person = group[i];
    console.log(person.name, person.role, person.image)
    const cardMarkup =  ` 
  <div class="card">
  <h3>${person.name}</h3>
  <p>${person.role}</p>
  <p>${person.image}</p>
  </di>
  `
  console.log(cardMarkup)

  document.querySelector('.container').insertAdjacentHTML('beforeend', cardMarkup)

    
  }