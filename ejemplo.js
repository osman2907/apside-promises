const funcion = async () => {
  console.log("Petición1");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Respuesta 1");
      resolve();
    }, 4000);
  })

  console.log("Petición2");
  setTimeout(() => {
    console.log("Respuesta 2");
  }, 2000);

  console.log("Otras peticiones");

  let a = 2
  let b = 5
  return a + b
}

let resultado = funcion();

resultado.then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.log(error);
}).finally(resp => {
  console.log("Finally");
});
