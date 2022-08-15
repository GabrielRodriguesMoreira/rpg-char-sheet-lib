import { useEffect, useState } from "react";

export function Cardinfos(props) {
    const data = props.infos;

    function pix() {
        props.removetab(data.id)
    }

    return (
        <div >
            <p onClick={() => { props.func({ name: data.name, img: data.img }) }}>{data ? data.name : "alt"}</p>
            <button onClick={pix}>Del</button>
        </div>
    )
}
export default Cardinfos;