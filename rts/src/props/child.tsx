interface ChildProps {
    color : String
}

export const Child = ({color}:ChildProps)=>{
    return (
        <div>Hello from Child Parent passes the props {color}</div>
    )
}