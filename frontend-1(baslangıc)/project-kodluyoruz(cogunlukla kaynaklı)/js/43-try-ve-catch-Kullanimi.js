let products;



try
{
    // dışardan alınan bilgileri burada deneyip hatayı ayıklayabilriiz ve diğer bölümlerin kaybolmaamsını sağlayabilriz
products.forEach(element => console.log(element));
} 
catch(error)
{
    console.log("error:",error)

}

console.log("hata yonetimi duzgun calisiyor")

let info= "kodluyoruz"
console.log(info)


function reverseString(s)
{
    try{
        s=s.split("").reverse().join("");

    }
    catch(exception)
    {
        console.log(exception.message);
    }
    finally{

        console.log(s);
    }


}