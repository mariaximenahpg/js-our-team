// Consegna
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "barbara-ramos-graphic-designer.jpg",
    },
  ];
  
  membersData(team);
  
  function membersData(members) {
    members.forEach((member) => {
      memberData(member);
    });
  }
  
  function memberData(member) {
    for (const value in member) {
      console.log(value + ": " + member[value]);
    }
  }

  ourTeam(team);
  
  function ourTeam(members) {
    members.forEach((member, i) => {
      const container = document.createElement("div");
      container.id = `member-${i}`;
      for (const value in member) {
        const p = document.createElement("p");
        p.id = container.id + value;
        p.class = value;
        value == "name"
        if (p.innerHTML = `${member[value]}`){
           (p.innerHTML = member[value])
        };
        if (value == "photo") {
          const img = document.createElement("img");
          img.src = "img/" + member[value];
          p.innerHTML = (null);
          p.appendChild(img);
        }
        container.appendChild(p);
      }
      document.getElementById("team-members").appendChild(container);
    });
  }
  
