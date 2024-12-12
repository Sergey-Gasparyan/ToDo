export function Delete ({onclick , name }) {
    return <button style={{marginLeft: '30px' , height:'40px' , fontSize:'15px'}} onClick={onclick} > {name} </button>
}