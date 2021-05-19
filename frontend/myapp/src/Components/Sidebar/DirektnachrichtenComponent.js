import React from 'react'
import DirektnachrichtKontakt from './DirektnachrichtKontakt'

export default function DirektnachrichtenComponent() {
    return (
        <div className="mt-5">
            <p className="text-notselected pl-12">Direktnachrichten</p>
            <DirektnachrichtKontakt name="test Kontakt" profImg=""></DirektnachrichtKontakt>
            <DirektnachrichtKontakt name="test Kontakt" profImg=""></DirektnachrichtKontakt>
            <DirektnachrichtKontakt name="test Kontakt" profImg=""></DirektnachrichtKontakt>
            <DirektnachrichtKontakt name="test Kontakt" profImg=""></DirektnachrichtKontakt>
        </div>
    )
}
