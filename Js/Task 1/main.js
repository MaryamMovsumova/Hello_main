"use strict"

const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];

  //MAP//

  const allName = persons.map((item) => item.name);

  console.log(allName);

  const allHeights = persons.map((item) => item.height);

  console.log(allHeights);

  const nameHeights = persons.map((item) => item.name +" "+ item.height);

  console.log(nameHeights);

//   const firstName = persons.map((item) => item.length);

//   console.log(firstName);


  //FILTER//

  let greatMass = persons.filter((item) => Number(item.mass)>=100);

  console.log(greatMass);

  let lessHeights = persons.filter((item) => Number(item.height)<=200);

  console.log(lessHeights);

  let allMale = persons.filter((item) => item.gender==="male");

  console.log(allMale);

  let allFemale = persons.filter((item) => item.gender==="female");

  console.log(allFemale);


    //SORT//

    const allMass = persons.sort((a,b) => {return a.mass - b.mass} );

    console.log(allMass);

    const allHeight = persons.sort((a,b) => {return a.height - b.height});

    console.log(allHeight);

    const name = persons.sort((a,b)=> a.name.localeCompare(b.name) );

    console.log(name);

    const sortedGender = persons.sort((a) => a.gender)

    console.log(sortedGender)


    //EVERY//

    let blueEye = persons.every((a)=> a.eye_color==="blue")

    console.log(blueEye)

    let moreMass = persons.every((a) => a.mass>=40)

    console.log(moreMass)

    let shortedHeight = persons.every((a)=> a.height<=200)

    console.log(shortedHeight)

    let everyMale = persons.every((a)=> a.gender==="male")

    console.log(everyMale)


    //SOME//

    const someGender = persons.some((a)=> a.gender==="male")

    console.log(someGender)

    const someEye = persons.some((a)=> a.eye_color==="blue")

    console.log(someEye)

    const someHeight = persons.some((a)=> Number(a.height)>=210)

    console.log(someHeight)

    const someMass = persons.some((a)=> Number(a.mass)<=50)

    console.log(someMass)



