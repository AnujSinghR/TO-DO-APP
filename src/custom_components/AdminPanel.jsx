export default function Admin(props){
    return (<>
            <img className="admin-img " src={props.url} />
            <h2>{props.name}</h2>
            <p>{props.gmail}</p>

    
    </>)
}