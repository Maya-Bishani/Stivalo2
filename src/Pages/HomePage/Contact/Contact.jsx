import './Contact.css'
import { Form, Button } from 'react-bootstrap';
import Words from '../Words/Words';
export default function Contact(){
  const newWords = ["Contact us "];
    return<>
    <h1 className='Heading-Contact' id='Contact'>Contact</h1>
    <p className='Paraghraph-Contact'>Need Help ?<span className='contact'><Words words={newWords} /></span></p>
    <div className="Container-Contact">

        <div className="Form">
        <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" className='placeholder' placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" className='placeholder' placeholder="Email"/>
        </Form.Group>

        <Form.Group controlId="formBasicFreetext" className='text-area'>
          <Form.Control as="textarea" className='placeholder textarea' rows={3} placeholder="Type your message here" />
        </Form.Group>

        <Button className='form-btn mt-3'  type="submit">Submit</Button>
      </Form>

        </div>
        <div className="Map  ">
      <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D8%B1%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D9%84%D8%A7%D8%B0%D9%82%D9%8A%D8%A9+(Stivalo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>                         
        </div>
    </div>
    </>
}