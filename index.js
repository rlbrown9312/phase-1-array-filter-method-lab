const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers2 = drivers1.join(" ").toLowerCase().split(" ")

const findMatching = drivers1.filter(driver =>
  driver === "Timmy");

console.log(findMatching);


const drivers3 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

 
  const matchName = drivers3.filter(str => str.name === "Bobby")

  //console.log(matchName)
  