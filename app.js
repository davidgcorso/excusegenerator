function excuseGenerator () {
        let who = ["your girlfriend ","Super man ","Vladimir Putin ", "your mom ", "The president "];
        let what = ["killed my cat ", "ate my pants " , "stole my money ", "broked my noose ", "burn my house"];
        let when = [ "When I was sleeping ", "during the night ", "While I was studying the bible ", "When I was trying to save the world "];
    
    let excuseWho = Math.floor(Math.random() * who.length); 
    let excuseWhat = Math.floor(Math.random() * what.length);
    let excuseWhen = Math.floor(Math.random() * when.length);

    return "Boss, I can’t come to work today because " + who[excuseWho] + "" + what[excuseWhat] + "" + when[excuseWhen];
}
 console.log (excuseGenerator());

let boton = document.querySelector('#generator3000');
boton.addEventListener('click', ()=>{
  let contenedor = document.querySelector('#contenido');
  let p = document.createElement('p');
  p.innerText = excuseGenerator();
  contenedor.appendChild(p);
});
