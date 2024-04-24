// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// [key1:1, key1:2, key3:3, ]
let laptop1 = {
    brand: "Apple", 
    model: "MacBook Pro",
    "2kg": 2,
    //model-name:"mac"  KULLANILMAZ NORMAL TİRE
    modelName:"Mac"  // ya böyle ya da model_name:"mac" gibi kullanabilriiz
}

console.log(laptop1)
  // Dogru Anahtar Bilgisi Olusturmak
 
  console.log("laptop1.brand:  "+laptop1.brand,"---- laptop1[brand TIRNAK İÇİNDE]:   "+ laptop1["brand"])
  
  // Anahtar bilgisine yeni deger eklemek
  laptop1.model="Iphone15"
  console.log(laptop1.model)

  
  // Yeni Bilgi Eklemek
  laptop1.version="17.14.6"
  console.log(laptop1)

  // Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
  let keys=Object.keys(laptop1)
  console.log(keys)                         // keylerine ulaştık
  console.log(Object.keys(laptop1))
  
  
  // Deger Bilgilerine Ulasmak (values) -> Object.values(item)
  let val=Object.values(laptop1)
  console.log(val)                         // valuelerine ulaştık
  console.log(Object.values(laptop1))

  
  // tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)

  let setting ={

    passaword:1234,
    userName:"User1"

  }
  