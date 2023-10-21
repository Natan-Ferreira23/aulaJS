 function exibeData(){
  document.getElementById('par1').innerHTML=Date();  /*  temos uma função que mostra a data; innerHTML altera ou define  um conteudo HTML*/
 }
 function removeData(){
    document.getElementById('par1').innerHTML=''; /* temos uma função que faz a data desaparecer; getelementbyID retorna um elemento html*/ 
 }
 function copiarTexto(){
       let texto = document.getElementById("original").innerHTML; /* variavel texto recebe o texto quando clicamos no botão */
       document.getElementById("copia").innerHTML=texto; /* o texto será copiado no paragrafo copia */
 }
 function copiarInput(){
    let nome=document.getElementById("nome").value; /* com este comando a variavel copia  o valor  do input com id nome */
    alert(" Olá " + nome); /* ele mostra a string olá + o conteúdo da variavel nome, que é o input da pagina */
 }
 function ligar (){
     document.getElementById("lampada").src="acesa.gif"; /* função ligar pega id  lampada e troca por   uma  img acesa */
 }
 function desligar (){
    document.getElementById("lampada").src="apagada.gif"; /* função desligar pega id da lampada e troca por uma img apagada */
 }
 function mudarEstilo(){
   document.getElementById("part2").style="font-size: 80px"; /* a tag p muda seu estilo para 80px nesta função */

 }