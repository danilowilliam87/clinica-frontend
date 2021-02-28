let conteudo = document.querySelector('.conteudo');
document.querySelectorAll('a').forEach(link => {
    link.onclick = function(e){
        console.log('evento acionado')
        e.preventDefault();
        fetch(link.href)
        .then(resp=>resp.text())
        .then(html => {
            let botao = document.createElement('button');
            let textoBotao = document.createTextNode('enviar');
            botao.addEventListener('click',()=>{
                console.log('botao acionado');
                console.log(html);
            })
            botao.appendChild(textoBotao);
            conteudo.innerHTML = html
            conteudo.appendChild(botao);


        });
    }
});