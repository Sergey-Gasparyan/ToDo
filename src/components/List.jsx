import { v4 as uuidv4 } from 'uuid';
import { Delete } from './Delete';
import "./List.css"

export default function List ({tasks , deleteTask}) {
    const l = tasks.map((ts) => {
       return <div class="list">
        <li key={uuidv4()} style={{fontSize:'20px'}}> {ts} <Delete name="x" onclick={() => deleteTask(ts)}/>
        </li>
       </div>
    })
    return <ul>{l}</ul>
}