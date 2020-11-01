import React from 'react'

const urlStyle = {
    textDecoration: 'none'
}
const MyUrlField = ({record = {}, source }) => {

    
    return (
        <a href={record[source]} style={urlStyle}>
            {record[source]}
        </a>
    )
}

export default MyUrlField
