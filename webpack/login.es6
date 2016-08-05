let login = (user, pass) =>{
    if(user !== 'admin' || pass !== 'radical'){
        console.log('login failed!!!');
    }
}

login('edgar','test');