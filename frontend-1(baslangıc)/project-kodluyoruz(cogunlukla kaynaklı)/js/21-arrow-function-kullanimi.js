// Arrow function Kullanimi          =>  bu arrom func işaretidir
// const funcName = (params) => { statement codes}
// funcName(params)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(firstnamee){
    console.log(`Merhaba ${firstnamee}`)
}
hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } 
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName =>  console.log(`Merhaba ${firstName}`) 
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
) // console.log parantezi

helloFuncV3("helloFuncV3", "Last Name info")


const helloFuncV4 = (firstname,lastname) => {
    let info= `Merhaba ${firstname} ${lastname}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4","Other Info")