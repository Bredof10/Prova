import { useState } from 'react';

export default function Contador() {
    const [array, setArray] = useState([]);
    const [numero, setNumero] = useState(0);

    function Add() {
        let arra = {...array,numero}
        console.log(arra);

        setArray(arra)
    }

    function Invertendo() {
        let inverte = {...numero,array}
        console.log(inverte);

        setNumero(inverte)
    }


    return (
        <main>
            <div>
                <h1>Contador</h1>
                <input type='number' valor={numero} onChange={e => setNumero(e.target.value)} />
                    {array.map((item) =>
                    <div>
                        {item} 
                    </div>
                    )}
                <button onClick={Add} >ADD</button>
                <button onClick={Invertendo} >INVERTER</button> 
            </div>

        </main>
    );
}