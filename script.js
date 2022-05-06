class Person {
  constructor(image, name, age, job) {
    this.image = image;
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

class PersonList {
  personList = [
    new Person(
      'https://i.pinimg.com/564x/2f/50/b7/2f50b7ba406f6700d13277d3166db1c4.jpg',
      'Son ba',
      '23',
      'IT'
    ),
    new Person(
      'https://i.pinimg.com/564x/2f/50/b7/2f50b7ba406f6700d13277d3166db1c4.jpg',
      'Son ba',
      '23',
      'IT'
    ),
  ];
  render() {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapper');
    let innerHtml = '';
    this.personList.forEach((person) => {
      innerHtml += `
      <div class="card">
        <div class="card__header">Header Car</div>
        <div class="card__content">
          <img class="img__profile" src="${person.image}" />
          <p>${person.name}</p>
          <p>${person.age}</p>
          <p>${person.job}</p>
        </div>
        <div class="card__footer">
          <button id="btnAddPerson">Add</button>
          <button id="btnCancelPerson">Cancel</button>
        </div>
      </div>
      `;
    });

    divWrapper.innerHTML = innerHtml;
    body.append(divWrapper);
  }
}

const body = document.querySelector('body');

let header = document.createElement('h2');
header.innerText = 'CRUD JS';
body.append(header);

const personList = new PersonList();
personList.render();
