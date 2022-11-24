import React, { useState } from 'react';

export default function CompControlado() {

    const [nome, setNome] = useState("nome inicial");

    function leNome(evento){
        //console.log(evento.target.value)
        setNome(evento.target.value)
        //evento - destino - valor ; o que o usuario digitou no campo que aconteceu o evento
        //guardando essa info em uma variavel de estado
    }

    function exibeNome() {
        alert(nome)
    }

    return (
        <div style={{fontFamily: 'Verdana'}}>
            <h1>Exemplo Componente Controlado</h1>
            <label>
                Nome:
                <input type="text" value={nome} onChange={leNome}/> 
                <button onClick={exibeNome}>Exibe</button>
            </label>
        </div>
    )
}

//função com parenteses é executada naquele momento
// sem vai receber como parametro as infos relacionadas a ação 