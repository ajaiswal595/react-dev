import ReactDom from 'react-dom'
import Parent from './props/parent';

const App = ()=>{
    return (
        <div>
            <h1>Hi people !...</h1>
        </div>
    )
}

ReactDom.render(<Parent/>,document.querySelector('#root'));