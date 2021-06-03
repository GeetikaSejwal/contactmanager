import React, { Component } from 'react'
import Contact from './Contact';
class Contacts extends Component {
     
    state = {
        contacts: [
            {
                id: 1,
                name: 'Geetika Sejwal',
                email: 'geetikasejwalmon@gmail.com',
                phone: '7346756878'
            },
            {
                id: 2,
                name: 'Rachit Batra',
                email: 'rachiiiB@gmail.com',
                phone: '6698565435'
            },
            {
                id: 3,
                name: 'Shaunak Khannah',
                email: 'dhannaseth@gmail.com',
                phone: '7972154556'
            }
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}
export default Contacts;