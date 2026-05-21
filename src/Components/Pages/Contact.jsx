import React from 'react'
import ContactBanner from '../Contactbanner'
import Map from '../Map'
import Form from '../Form'
import ContactHeading from '../ContactHeading'
import Contacts from '../Contacts'

function Contact(){
    return(
        <div>
           
            <ContactBanner/>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-6'>
                <div>
                    <ContactHeading/>
                    <Form/>
                    <Contacts/>
                </div>
                <Map/>
            </div>
        </div>
    )
}
export default Contact