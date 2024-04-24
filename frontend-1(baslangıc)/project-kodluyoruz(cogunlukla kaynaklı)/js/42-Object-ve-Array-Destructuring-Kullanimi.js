// Object ve Array Destructuring Nasil Kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1", 
    serverName: "kodluyoruz.org"
  }
  
  // obje icindeki bilgilerin tek seferde cikarilmasi
  // let userName = settings.userName
  // console.log(userName)
  
  // tek tek yapmak yerien destructure yapısını kullanabiliriz
  // rename && destructuring
    let {userName:user,password:sifre,isActive:aktifMi,ip,serverName:serverAdi}=settings;
    console.log(settings)
    console.log(user,sifre,aktifMi,ip,serverAdi)
  
  
  // obje icindeki bazi bilgilerin cikarilmasi
 // eger degisken ismi daha once tanimlanmadiysa:
  let {userName, password, isActive, ...newSettings} = settings
 console.log("newsettings ayrılmayan degiskenleri bir objede tuttuk",newSettings)

  // objenin destructuring ile kopyalanmasi

  //yanlis
  let settings2=settings
  settings2.userName="bilgi degisti"// ikiside değişir ,
  console.log("settings2:"+settings2.userName)  //çünkü aynı yapıyı onun üstüne atadık farklı bir obj oluşturulmadi kopyalanma başarırısı
  console.log("settings:"+settings.userName)


  console.log("****************-***************")
settings.userName="lorem ipsum"
  // doğrusu
  let settings3={...settings}
  settings3.userName="bilgi tekrar degisti"
  console.log("setting3:"+settings3.userName)
  console.log("setting:"+settings.userName) // object kopyalama ile ayni... let settings2 = {...settings}

  const score=[100,200,300,400]

  let {score1,score2,...otherscore}=score
  console.log(score1,score2,otherscore)


  // obj kopyalama ile aynı
  let copyofScore={...score}
  console.log(copyofScore)