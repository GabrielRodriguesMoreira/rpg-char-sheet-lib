import { useEffect, useState } from "react";

export function Cardinfos(props) {

    const [data, setdata] = useState('')

    useEffect(() => {
        setdata(props.infos);
    })
    return (
        <h1>{data.name}</h1>
    )
}
export default Cardinfos;