/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

const group = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Angela',
      role: 'Chief Editor',
      image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Chief Editor',
      image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Social Media Manager',
        image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: './assets/img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
  ];

  console.log(group)


  //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

  for (let i = 0; i < group.length; i++) {
    const person = group[i];
    console.log(person.name, person.role, person.image)

    /* BONUS 1: Trasformare la stringa foto in una immagine effettiva*/
    
    
    const cardMarkup =  ` 
  <div class="card">
  <h3>${person.name}</h3>
  <p>${person.role}</p>
  <img class="active" src"${person.image} alt="">

  
 
  </di>
  `
  console.log(cardMarkup)

  document.querySelector('.container').insertAdjacentHTML('beforeend', cardMarkup)

}
