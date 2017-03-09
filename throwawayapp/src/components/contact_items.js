import React from "react";
const ContactItems = (props) =>{
  return(
    <div className="contact-items">
    {props.data.sort((a,b)=>{
      if(a.last_name < b.last_name){
        return -1;
      }
      if(a.last_name > b.last_name){
        return 1;
      }
      return 0;
    }).map((item) =>{
    return (
      <div className="container" key={item.id}>
        <p>First Name: {item.first_name}</p>
        <p>Last Name: {item.last_name}</p>
        <p>Email: <a href="#">{item.email}</a></p>
        <p>IP Adress: <a href="#">{item.ip_address}</a></p>
      </div>
    )
  })}
</div>
  )


}
export default ContactItems;
