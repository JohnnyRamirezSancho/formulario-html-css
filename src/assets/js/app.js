function mostrarDatosRecogidos() {
    const name = document.getElementById("name");
    const nombre = name.value;
    console.log(`Name: ${nombre}`);

    const email = document.getElementById("email");
    const correo = email.value;
    console.log(`Email: ${correo}`);

    const age = document.getElementById("age");
    const edad = age.value;
    console.log(`Age: ${edad}`);

    const describeYou = document.getElementById("describe-you");
    const descripcion = describeYou.value;
    console.log(`Describe you: ${descripcion}`);
    
    const recommend = document.querySelector('input[type=radio][name=recommend]:checked');
    let recomendado ="";
    if(recommend!==null) {
        recomendado = recommend.value;
    }
    console.log(`Recommend: ${recomendado}`);

    const languages = document.querySelectorAll('input:checked');
    let lenguajes = "";
    let contador = 1;
    languages.forEach(elemento => {
        lenguajes = lenguajes + elemento.value; 
        if(contador < languages.length) {
            lenguajes = lenguajes + ", ";
        }
        contador++;
    });
    console.log(`Lenguajes: ${lenguajes}`);

    const comments = document.getElementById("comments");
    const comment = comments.value;
    console.log(`Comments: ${comment}`);
}