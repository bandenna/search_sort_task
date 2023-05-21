const ShowData = ({ details }) => {
    const { id, name, body, email } = details
    console.log("()()(", details)
    return (
        <>
            <div className="d-flex flex-column mt-5">
                <p>Id :{id}</p>
                <p>Name :{name}</p>
                <p>Email :{email}</p>
                <p>Body :{body}</p>
            </div>

        </>
    )
}
export default ShowData