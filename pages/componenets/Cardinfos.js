import { useEffect, useState } from "react";

export function Cardinfos(props) {
    const data = props.infos;
    return (
        <h1>{data ? data.name : "alt"}</h1>
    )
}
export default Cardinfos;