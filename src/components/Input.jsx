import "./Input.css"


export default function Input ({value , onChange}) {
    return <input placeholder="inch avelacnel?" className="inp" type="text" value={value} onChange={onChange}></input>
}