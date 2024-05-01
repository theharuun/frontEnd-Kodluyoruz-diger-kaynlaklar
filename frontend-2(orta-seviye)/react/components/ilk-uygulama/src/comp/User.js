function User( {name,surName,isLoggedIn,age,friends }){
    return (
    <>
        <h1> 
            {isLoggedIn ? `${ name} ${ surName} (${age})`: ` tekrar giris yapiniz `  }
        </h1>
        
        {
            friends.map((friend)=>  {
            <div> {friend} </div>
        })}   
    </>
        );
}

export default User;