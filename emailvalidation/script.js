function login(){
   event.preventDefault(); 
    let email = document.getElementById('email').value;
    let pattern = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    let result = pattern.test(email);
    
    if (result){
       alert('Sucesso! Você será redirecionado em instantes.');
       setTimeout(() => {
       location.href = "/emailvalidation/linktree/index.html";
      }, 1000); 
       
    } else {
       alert('E-mail inválido, tente novamente');
    }
   }
