import { useEffect, useState } from "react";

export function Cardinfos(props) {

    const data = props.infos;

    return (
        <div>
            <p onClick={() => { props.func({ name: data.name, img: data.img }) }}>{data ? data.name : "alt"}</p>
        </div>
    )
}
export default Cardinfos;