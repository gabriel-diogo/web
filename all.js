function pesquisar() {
    var  input,filtros,menu,menuitens,links;
    input=document.getElementById('pes');
    filtros=input.value.toUpperCase();
    menu=document.getElementById('menu');
    menuitens=menu.getElementsByTagName('li');
    for(var i=0; i<= menuitens.length;i++){
    links= menuitens[i].getElementsByTagName('a')[0];
    if (links.innerHTML.toUpperCase().indexOf(filtros)>-1) {
    menuitens[i].style.display="";
    }else{
    menuitens[i].style.display='none';
    }
    }}
   function mostra(id) {
    if (document.getElementById(id).display == 'block') {
    document.getElementById(id).style.display='none';
   }else{
    document.getElementById(id).style.display ='block';
   }}


   function mos(){
    if(document.getElementsByClassName("conten")[0].style.display=="none"){
        document.getElementsByClassName("conten")[0].style.display="block";
       }else{
        document.getElementsByClassName("conten")[0].style.display="none";
       }}


  //mostrar senha
     function ms(){
         var senha = document.getElementById("pass");
         if(senha.type == "password"){
             senha.type = "text";
         }else{
             senha.type = "password";
         }   
     }
     function mss(){
         var senha = document.getElementById("passs");
         if(senha.type == "password"){
             senha.type = "text";
         }else{
             senha.type = "password";
         }   
     }

//cadastro
var vauser=false;
var vanome=false;

var valsenha=false;

var valcsenha=false; 



    
     function ero(){
        let nome = document.getElementById("nome")
        let lnome=document.getElementById("lnome")
        let luser=document.getElementById("luser")
        let user=document.getElementById("user")
        let lsenha=document.getElementById("lsenha")
        let senha=document.getElementById("pass")
        let csenha=document.getElementById("passs")
        let lcsenha=document.getElementById("lcsenha")

        

      







        nome.addEventListener("keyup", function(){
            if(nome.value.length<=3){
                lnome.innerHTML="Nome muito curto"
                lnome.style.color="red"
                nome.setAttribute('style' , 'border-color: red;')
                 vanome=false;
            }else{
                lnome.innerHTML="Nome "
                lnome.style.color="blue"
                nome.setAttribute('style' , 'border-color: blue;')
                 vanome=true;
                
            }
        });
            user.addEventListener("keyup", function(){
                if(user.value.length<=3){
                    luser.innerHTML="Usuario muito curto"
                    luser.style.color="red"
                    user.setAttribute('style' , 'border-color: red;') 
                    vauser=false;  
                }else{  
                    luser.innerHTML="Usuario "
                    luser.style.color="blue"
                    user.setAttribute('style' , 'border-color: blue;')
                    vauser=true;
                    
                }
            });
            senha.addEventListener("keyup", function(){
                if(senha.value.length<=3){
                    lsenha.innerHTML="Senha muito curta minimo 6"
                    lsenha.style.color="red"
                    senha.setAttribute('style' , 'border-color: red;')
                    valsenha=false;
                    
                }else{
                    lsenha.innerHTML="Senha"
                    lsenha.style.color="blue"
                    senha.setAttribute('style' , 'border-color: blue;')
                    valsenha=true;
                    
                }
            });
            csenha.addEventListener("keyup", function(){
                if(senha.value!=csenha.value){
                    lcsenha.innerHTML="invalida"
                    lcsenha.style.color="red"
                    csenha.setAttribute('style' , 'border-color: red;')
                    valcsenha=false;
                    
                }else{
                    lcsenha.innerHTML="Confirmar Senha"
                    lcsenha.style.color="blue"
                    csenha.setAttribute('style' , 'border-color: blue;')
                    valcsenha=true;
                    
                }
            });


     }
     window.onload=ero;

     function cad(){
      var mero=document.getElementById("mero");
var msu=document.getElementById("msu");

let nome = document.getElementById("nome")
        let lnome=document.getElementById("lnome")
        let luser=document.getElementById("luser")
        let user=document.getElementById("user")
        let lsenha=document.getElementById("lsenha")
        let senha=document.getElementById("pass")
        let csenha=document.getElementById("passs")
        let lcsenha=document.getElementById("lcsenha")

   
        if(vanome==true && vauser==true && valsenha==true && valcsenha==true){

            let listetuser=JSON.parse(localStorage.getItem("usuarios")||"[]");
            listetuser.push({
                nome:nome.value,
                user:user.value,
                senha:senha.value
            });
            localStorage.setItem("usuarios",JSON.stringify(listetuser));


            mero.setAttribute('style' , 'display: block;');
            mero.innerHTML="Cadastrando usuario"
            msu.setAttribute('style' , 'display: none;');
            document.getElementById("nome").value="";
            setTimeout(function(){
                window.location.href="index.html";
            },3000);
            
            
        }else{
            msu.setAttribute('style' , 'display: block;');
            msu.innerHTML="Preencha todos os campos"
            mero.setAttribute('style' , 'display: none;');
            mero.innerHTML="";
        }
    }


//login



function mos(){
    if(document.getElementsByClassName("conten")[0].style.display=="none"){
        document.getElementsByClassName("conten")[0].style.display="block";
        
       }else{
        document.getElementsByClassName("conten")[0].style.display="none";
        
        
       }

      
      }
      function tc(){
        if(document.getElementsByClassName("conten")[0].style.display=="none"){
            document.getElementById("mm").innerHTML="logar"
        }else if(document.getElementsByClassName("conten")[0].style.display=="block"){
            document.getElementById("mm").innerHTML="fecha"
              
        }

      }
       


  //mostrar senha
     function ms(){
         var senha = document.getElementById("pass");
         if(senha.type == "password"){
             senha.type = "text";
         }else{
             senha.type = "password";
         }   
     }








     //login
     //var token;
    
     function entra(){


           
           

         let usuario =document.getElementById("user")
         let usuariol=document.getElementById("luu")
         let pass =document.getElementById("pass")
         let passl=document.getElementById("lss")
         let msero=document.getElementById("ms")
       
        // let logar=document.getElementById("lg");
         
         let listauser=[]
         let useval={
             nome:'',
             user:'',
             senha:''
         }
         listauser=JSON.parse(localStorage.getItem("usuarios"))
        
         listauser.forEach((item) => {


         
            

             if(usuario.value== item.user && pass.value==item.senha){
                 useval.nome=item.nome
                 useval.user=item.user
                 useval.senha=item.senha
                 localStorage.setItem("usuario",JSON.stringify(useval))
                 window.location.href="index.html"
                
                 
                 let token=Math.random().toString(36).substring(2)
                 localStorage.setItem("token",token)
                 localStorage.setItem("userlog",JSON.stringify(useval))

                  /*  let userlog=JSON.parse(localStorage.getItem("userlog"));
                 
                 
                             
                            logar.innerHTML="Bem vindo "+userlog.nome*/

             }else{
                 msero.style.display="block"
                 msero.innerHTML="<srtong>informações incorretas</strong>"
                    usuario.setAttribute('style','border: 2px solid #ff0000;')
                     pass.setAttribute('style','border: 2px solid #ff0000;')
                     usuariol.setAttribute('style','color:#ff0000;')
                     passl.setAttribute('style','color:#ff0000;')
                     
                     

             }
         });
     }
        
     function sai(){
            localStorage.removeItem("usuario")
            localStorage.removeItem("token")
            localStorage.removeItem("userlog")
            window.location.href="index.html"
     }
     //boas vindas
        function boas(){
            let userlog=JSON.parse(localStorage.getItem("userlog"));
            let logar=document.getElementById("lg");
            logar.innerHTML="Bem vindo - "+userlog.nome
        }
        window.onload=boas;

/*function su(){
var su=document.getElementById("mos")
if(localStorage.setItem(token== true)){
  su.style.display="none"
}
}
*/

function usrep(){
    let listauser=[]
    let useval={
        nome:'',
        user:'',
        senha:''
    }
    listauser=JSON.parse(localStorage.getItem("usuarios"))
    listauser.forEach((item) => {
        if(item.user==useval.user){
            alert("usuario repetido")
        }
    });
}
//////////////////loginface////////////////////////
/*function callback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
     document.getElementById("login").hidden();
      testAPI();
    }else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById("status").innerHTML = 'faça login';
    }else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById("status").innerHTML = 'faça login';
    }
}
window.fbAsyncInit = function() { 
    FB.init({
      appId      : '622819262241020',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      //xfbml      : true.  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

  };
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function textAPI(){
    FB.api('/me', function(response) {
        document.getElementById("status").innerHTML = 'Bem vindo ' + response.name;
    });
  }
  function logout(){
    FB.logout(function(response) {
      //user is now logged out
      document.getElementById("status").innerHTML = 'faça login';
    });
  }
 function login(){
    FB.login(function(response) {
      statusChangeCallback(response);
    });
  } */




  /////////////////////////login faceboook/////////////////////////////
  



    function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      document.getElementById("login").hidden();
      $("#status").append("<a> href='#' id='logout' onclick='logout()'>Sair</a>")
      testAPI();
    
      
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      
      $("#status").append("<p>faça login</p>")
      $("#logout").remove()
      

    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      $("#logout").remove()
        $("#status").append("<p>faça login</p>")
    }
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '622819262241020',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
     // xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
     // document.getElementById("status").innerHTML = 'Bem vindo ' + response.name;
     $("#status").append('<markee><p>Bem vindo ' + response.name+'</p></markee>')
    });
  }

    function logout(){
    FB.logout(function(response) {
      //user is now logged out
      $("#status").append('<p>sair</p>')
    });
  }
    function login(){
    FB.login(function(response) {
      statusChangeCallback(response);
    });
  }
