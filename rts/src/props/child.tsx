interface ChildProps {
    color : String
}

export const Child = ({color}:ChildProps)=>{
    return (
        <div>Hello from Child Parent passes the props {color}</div>
    )
}

export const ChildAsFC: React.FC<ChildProps> =({color})=>{
    return (
        <div>Hello from Child Parent passes the props {color}</div>
    )
}

export const ChildAsFunctionComponent: React.FunctionComponent<ChildProps> =({color})=>{
    return (
        <div>Hello from Child Parent passes the props {color}</div>
    )
}