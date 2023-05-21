import { useEffect, useState } from "react"

const ShowSort = ({ details }) => {

    const { id, name, username, email, address, phone, website, company } = details
    return (
        <div className="d-flex flex-column mt-5 mb-5">
            <>
                <p>Id :{id}</p>
                <p>Name :{name}</p>
                <p>UserName :{username}</p>
                <p>Email :{email}</p>
                <p>Phone :{phone}</p>
                <p>Website :{website}</p>
            </>
        </div>
    )

}
export default ShowSort