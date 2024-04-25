// push  map  find filter some every includes
const users=["harun","mervea","ahmetaaaaa","selinssss"]
const newUsers=["berkay", ...users];


//push*******************************************************************
users.push("gulbahar");

//map*******************************************************************
users.map((item)=>console.log(item));

//find*******************************************************************
const findIT=users.find((item)=> item==="kardo");
const findIT2=users.find((item)=> item==="merve");
console.log("kardo var mi :"+findIT);
console.log("merve var mi:"+findIT2);

console.log(users);
console.log(newUsers);

//filter*******************************************************************
const filt=users.filter((item)=>item.length>=6);
console.log(filt);

//some(true veya false döner )*******************************************************************
const ages = [3, 10, 18, 20];

const resit=ages.some(checkAdult);//20 old i.in true dönücek
function checkAdult(age) {
  return age > 18;
}
console.log(resit);

//every(true veya false döner )*******************************************************************
const ages2 = [32, 33, 16, 40];

const resit2=ages.every(checkAge); // 16 kücük old için false dönücek

function checkAge(age) {
  return age > 18;
}
console.log(resit);

//include(true veya false döner )*******************************************************************

const country=[
    {
        name:"Turkiye", 
        bolge:"asya",
        code:"TR",
    },
    {
        name:"almanya",
        bolge:"avrupa",
        code:"DE",
    }
    
];

const isInclude=country.includes((item)=>item.name==="Turkiye");
console.log("Turkiye var mi?",isInclude);// false döner cünkü diper name almanyadır

const meyveler=["elma","muz","armut"];
const varMi=meyveler.includes("muz");
console.log("elma var mi?",varMi);


