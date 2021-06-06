import React from 'react'
import DirektnachrichtKontakt from './DirektnachrichtKontakt'

export default function DirektnachrichtenComponent({kontakte}) {

    let list ;
    if (kontakte) {
        list = kontakte.map(c => <DirektnachrichtKontakt key={c.id} id={c.id} name={c.username} participants={c.participants}></DirektnachrichtKontakt>);
    }

    return (
        <div className="mt-5">
            <p className="text-notselected pl-12">Direktnachrichten</p>
            {list}
        </div>
    )
}
