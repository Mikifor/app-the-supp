let CertainProfile = (props) => {
    console.log(props.profile[0].name)
    return <div>
        <div>{"Name: " + props.profile[0].name}</div>
        <div>{"ID: " + props.profile[0].id}</div>
        <div>{props.profile[0].photos.small ? <img src={props.profile[0].photos.small} alt="Avatar" /> : "nofoto"}</div>
        </div>
}


export default CertainProfile