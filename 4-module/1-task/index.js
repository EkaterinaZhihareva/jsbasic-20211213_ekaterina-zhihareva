let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];
function makeFriendsList(friends) {
    
    let ul = document.createElement('ul'); 
    for (let i = 0; i < friends.length; i++) {  
      let li = document.createElement('li'); 
      li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`; 
      ul.append(li);
    }
    return ul; 
  } 
