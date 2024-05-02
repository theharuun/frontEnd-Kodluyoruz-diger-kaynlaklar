import PropTypes from "prop-types";

function User( {name,surName,isLoggedIn,age,friends, address,friends2 }){
    if(!isLoggedIn)
    {
       return <div>GİRİŞ YAPMADINIZ</div>
    }
    
    return (
    <>
        <h1> 
            {isLoggedIn ? `${ name} ${ surName} (${age})`: ` tekrar giris yapiniz `  }
        </h1>
        
        <br/>
        {address.title} {address.zip}
        <br/>
        <br/>
        {friends2.map((friend)=> <div key={friend.id}>{friend.name}</div>)}
        {friends.map((fri,index)=><div key={index}> {fri} </div>)}
    </>
        );
}


// bu şekilde prop-typestan import ettikten sonra her bir değerin veri tipini belirleyebiliriz
// isRequired ile birlikte gerekli olduğuna dair bir işaretlemiş oluruz bu kısım boş geçilemezi iade eder
//age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]) birden fazla tipte olabilir girdiğimiz ifadeler
User.prototype={
    name: PropTypes.string.isRequired,
    surName:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    friends:PropTypes.array,
    address:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })
}
// default props varsayılan ifade çalışsın anlamına gelir
User.defaultProps={

    isLoggedIn: false,
    age:18,
}



export default User;