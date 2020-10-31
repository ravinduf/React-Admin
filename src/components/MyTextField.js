import React from 'react'

const MyTextField = ({record = {}, source }) => {
    return (
        <p>
          {record[source]}  
        </p>
    )
}

export default MyTextField
