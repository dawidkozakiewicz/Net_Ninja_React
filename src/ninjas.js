import React from 'react';
import './style.css'

const Ninjas = ({ ninjas, deleteNinja }) => {
    
        
            const ninjaList = ninjas.map((ninja) => {
            return ninja.age > 0 ? (
                <div className="ninja" key={ninja.key}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.key)}}>delete</button>
                </div>
            ) : null
        })
        return (
            <div className="ninjalist">
                {ninjaList}
            </div>
        )
    
}


export default Ninjas