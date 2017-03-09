import React from "react";
import ContactItems from "./contact_items"

const ContactCard = (props) => {
    return(
      <div className="contact_card">
        <ContactItems data={props.data}/>
      </div>
    )
}

export default ContactCard
