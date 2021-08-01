//----------1ºvideo sobre variaveis-----------------

//const myName= "Carla Azevedo";
//const birthCity = "Cabo Frio";
//let brithYear = "1992";

//console.log(myName);
//console.log(birthCity);
//console.log(brithYear);

//a const não deixa atribuir novos valores; por isso que ao tentar mudar  da erro. já com a Var é permitido atribuir e remover //

//--------2º video sobre tipos primitivos------------


//let movie ="avengers";// string literal
//let score = 10.89; // number literal
//let isValid = true; //boolean
//let nome;//undefined -quando nao atribuimos valor.
//let calor=  null; //redefinicao

//let salario = 4000;

//console.log(salario+salario);
//console.log(salario-salario)
//console.log(salario*salario)
//console.log(salario / salario)
//console.log(salario ** 3)

//incrementar  ++ 
//decrementar  --

//let patientId = 50;
//let isEnrolled = true;
//const patientInfo = {
 // firstName: 'Ana',
 // lastName: 'Santos',
//};
//const patientEmail = 'ana@email.com';

//console.log(typeof patientId);
//console.log(typeof isEnrolled);
//console.log(typeof patientInfo);
//console.log(typeof patientEmail);

//=============PRATICANDO===================

//const base =5;
//let hight =8;
//const area =base * hight;
//const perimeter = base + hight + area;

//console.log(base);
//console.log(hight);
//console.log(area);
//console.log(perimeter);

//--------3º video sobre IF/ELSE------------

//if -se 
//else -se não

//if(condicao){
    //codigo
//}
//else if(outraCondicao){
    //outra condicao
//}
//else if(outraCondicao){
    //outra condicao
//}

//=============PRATICANDO===================

//const nota = 95;

//if(nota >= 80){
 //  console.log("Parabéns, você foi aprovada(o)!")
//}
//else if(nota < 80 && nota >= 60 ){
//   console.log("Você está na nossa lista de espera")
//} 
//else {
 //  console.log("Você foi reprovada(o)")
//}
 //------- 4º video sobre Operadores lógicos------------

// && é binario so funciona com 2 elementos true


 //EXEMPLO
//const comida = 'pão na chapa';
//const bebida = 'cafézinho';

//if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  //console.log('Muito obrigado pela refeição :)');
//} else {
  //console.log('Acho que houve um engano com meu pedido');
//}

//=============PRATICANDO && (AND)===================

//const currentHour= 16;
//let message="";
//if (currentHour >= 22 ){
  // console.log (message = "Não deveríamos comer nada, é hora de dormir") 
//}
//else if ( currentHour >= 18 && currentHour<22){
//    console.log(message="Rango da noite, vamos jantar :D")
//}
//else if(currentHour >=14 && currentHour <18){
//    console.log(message="Vamos fazer um bolo pro café da tarde?")
//}
//else if(currentHour >=11 && currentHour <14){
//    console.log(message="Hora do almoço!!!")
//}
//else{
  //  console.log(message="Hmmm, cheiro de café recém passado")
//}
//=============PRATICANDO || (OR)===================

//const bebidaPrincipal =  'cafezinho';
//const bebidaAlternativa = 'suco de laranja';

//if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//  console.log("Obrigado por me atender :D")
//} else {
//  console.log("Ei, eu não pedi isso!");
//}
// includes = verifica se a variavel pertence ao conjunto.


//let weekDay= "sabado"
//let diasDaSemana = ["segunda-feira", "terça-feira","quarta-feira" ,"quinta-feira" ,"sexta-feira"]

//opção mais curta com o uso do includes

//if(diasDaSemana.includes(weekDay)){
 //   console.log ("Oba, mais um dia de aprendizado na Trybe >:D")
//}

//opção mais extensa com uso do ||

//if(weekDay === "segunda-feira" ||weekDay === "terça-feira"|| weekDay === "quarta-feira"|| weekDay === "quinta-feira"|| weekDay === "sexta-feira") {
 //   console.log("Oba, mais um dia de aprendizado na Trybe >:D")
//}
//else{
 //   console.log("FINALMENTE, descando merecido UwU")
//}

//=============PRATICANDO ! NOT===================

// ! pode inverter o valor booleano de um elemento,podes gerar o resultado oposto.
//console.log((2 + 2) === 4);
//console.log(!(2 + 2) === 4);

//------- 5º video sobre Switch/Case ------------

//let sinalTransito ="verde";

//switch (sinalTransito) {
//   case "verde":
//        console.log("siga");
//       break;
//
//   case "amarelo":
//       console.log("ATENÇÃO");
//       break;
//
//   case "vermelho":
//       console.log("PARE");
//       break;
//   default:
//      console.log("Nada a vista")
//      break
//}
//=============PRATICANDO switch/case===================

//let estadoCandidato = "Aprovado";
//switch (estadoCandidato) {

//    case "Aprovado":
//        console.log("Siga");
//        break;
//    case "Lista":
//       console.log("Atenção");
//        break;
//    case"Reprovado":
//        console.log("Pare");
//        break;
//    default:
//        console.log("Não se aplica");
//      break;
//}

