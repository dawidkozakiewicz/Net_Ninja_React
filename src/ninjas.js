import React from 'react';

const Ninjas = ({ ninjas }) => {
    
        
            const ninjaList = ninjas.map((ninja) => {
            return ninja.age > 0 ? (
                <div className="ninja" key={ninja.key}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
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