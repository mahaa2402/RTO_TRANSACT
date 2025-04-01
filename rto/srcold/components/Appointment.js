import React from 'react';
import './Appointment.css';

const Appointments = () => {
  
  return (
    <div className="appointments-container">
      <h1 className="heading">Appointments</h1>
      <p className="paragraph">
        Appointments : General guidelines to the Applicants :
      </p>

      <p class="instructions">
      <ol>
        <li>Appointment should be taken whenever the applicant require to take test.</li>
        <li>If the applicant failed in test to attend retest requires to take appointment again to attend the retest.</li>
        <li>If the applicant was absent for test then also the applicant should take appointment again.</li>
        <li>Before booking a slot check on the availability of slots (date, slot no. and quota - available) using the Enquiry options (Ex: enquiry LL Test Slot) available in the portal.</li>
        <li>Before attending the test, please read the general rules regarding first/second/third test attempts and other details given in the Appointment Acknowledge slip.</li>
        <li>When Booking an Appointment
            <ol type="a">
                <li>View the availability dates chart shown carefully. Check Color indicators mentioned on Screen.</li>
                <li>Select the desired date from the calendar (shown in green color)</li>
                <li>Select the Desired Slot No. from the list shown if the quota available is greater than 0</li>
                <li>Book Slot and in the preview Form Confirm to Save.</li>
                <li>Take the printout of the Appointment Acknowledgement Slip (to be shown at test time)</li>
                <li>Attend the test as per the appointment Date & time along with necessary documents.</li>
            </ol>
        </li>
        <li>No additional/separate/extra fee need to be paid to any individual or officer except those amounts defined by the govt. for transaction/test fees etc as applicable. Applicants are requested not to pay any other amount towards appointment booking other than the amount paid online. Sarathi Portal is not responsible for any extra amount spent by the applicants.</li>
        <li>The Appointment quota and slots per day under different categories are defined and controlled by the State Transport Dept (or concerned RTO) as per the policy/administrative decisions of the designated authorities. The availability of Quota/Slots are reflected in the portal as defined by the state. Any queries on these have to be addressed to the respective state transport dept. only</li>
        <li>Rebooking an Appointment to Postpone or Prepone an already taken Appointment:
            <ol type="a">
                <li>Check on the availability of slots (date, slot no. and quota - available) using the Enquiry options (Ex: enquiry LL Test Slot) available in the portal</li>
                <li>Cancel the existing Appointment before booking next appointment</li>
                <li>Follow steps (a) to (f) mentioned in point no. 6</li>
            </ol>
        </li>
        <li>Rebooking an Appointment when the applicant has not attended the test and the booking has expired:
            <ol type="a">
                <li>Check on the availability of slots (date, slot no. and quota - available) using the Enquiry options (Ex: enquiry LL Test Slot) available in the portal</li>
                <li>Follow steps (a) to (f) mentioned in point no. 6</li>
            </ol>
        </li>
    </ol>
      </p>

      


      <button type='submit' class="btn btn-gradient btn-glow">APPLY</button>
                
              
            
      </div>
          
  );

  
}

export default Appointments;