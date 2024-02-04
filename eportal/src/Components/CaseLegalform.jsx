// // import React from 'react';

// // const CaseLegalForm = ({ location }) => {
// //   console.log('Location:', location);
// //   const formData = location.state?.formData;
// //   console.log('FormData:', formData);


// //   if (!formData) {
// //     // Handle case where formData is not available
// //     return <div>No data available</div>;
// //   }

// //   // Render the form data as needed
// //   return (
// //     <div>
// //       {/* Display the form data as needed */}
// //       <h1>Case Legal Form</h1>
// //       <pre>{JSON.stringify(formData, null, 2)}</pre>
// //     </div>
// //   );
// // };

// // export default CaseLegalForm;


// // CaseLegalForm.jsx
// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // const CaseLegalForm = () => {
// //   const location = useLocation();
// //   const formData = location.state?.formData;

// //   if (!formData) {
// //     // Handle case where formData is not available
// //     return <div>No data available</div>;
// //   }

// //   return (
// //     <div>
// //       {/* Display the form data as needed */}
// //       <h1>Case Legal Form</h1>
// //       <pre>{JSON.stringify(formData, null, 2)}</pre>
// //     </div>
// //   );
// // };

// // export default CaseLegalForm;

// // CaseLegalForm.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './CaseLegalform.css'; // Import the CSS file for styling

// const CaseLegalForm = () => {
//   const location = useLocation();
//   const formData = location.state?.formData;

//   if (!formData) {
//     // Handle case where formData is not available
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="case-legal-form">
//       <h1>Case Legal Form</h1>

//       <div className="section">
//         <h2>Personal Information</h2>
//         <p>Name: {formData.name}</p>
//         <p>Age: {formData.age}</p>
//         <p>Date of Birth: {formData.dob}</p>
//         <p>Gender: {formData.gender}</p>
//         <p>Caste: {formData.caste}</p>
//         <p>Differently Able: {formData.differentlyAble ? 'Yes' : 'No'}</p>
//       </div>

//       <div className="section">
//         <h2>Contact Information</h2>
//         <p>Email: {formData.email}</p>
//         <p>Phone: {formData.phone}</p>
//         {/* Add more contact information fields as needed */}
//       </div>

//       <div className="section">
//         <h2>Address</h2>
//         <p>{formData.address}</p>
//         <p>Pincode: {formData.pincode}</p>
//         {/* Add more address fields as needed */}
//       </div>

//       <div className="section">
//         <h2>Litigant Information</h2>
//         <p>Litigant Type: {formData.litigantType}</p>
//         <p>Accused: {formData.accused}</p>
//         {/* Add more litigant information fields as needed */}
//       </div>

//       {/* Add more sections for different categories of information */}
//     </div>
//   );
// };

// export default CaseLegalForm;

// CaseLegalForm.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './CaseLegalform.css'; // Import the CSS file for styling
import Navbar4 from './Navbar4';

const CaseLegalForm = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    // Handle case where formData is not available
    return <div>No data available</div>;
  }
  const handleprint =()=>{
    window.print();
  }

  return (
    <>
    <Navbar4/>
    <div className="case-legal-form">
  <div className="case-file">
    <h1 id='csHeading' >CASE FILE</h1>
    <h3 id='cfilingCNR'>CNR : {formData.CnrNumber}</h3>
  

  <div className="caseHeads">
    <p><b>ESTABLISHMENT</b></p>
  </div>

  <div className="caseformEst">
    <p><b>STATE:</b><u> {formData.state}</u></p>
    <p><b>DISTRICT:</b> {formData.district}</p>
    <p><b>ESTABLISHMENT:</b> {formData.establishment}</p>
  </div>

  <div className="caseformEst">
    <p><b>CASE TYPE:</b> {formData.caseType}</p>
    <p><b>RELIEF SOUGHT:</b> {formData.reliefSought}</p>
  </div>

  <div className="caseformEst">
    <p><b>APPELLANT / RESPONDANT:</b> {formData.appellantRespondant}</p>
    <p><b>MOBILE NO.:</b><u>{formData.mobileNo}</u></p>
  </div>

  <div className="caseHeads">
    <p><b>LITIGANT DETAILS</b></p>
  </div>

  <div className="caseformEst">
    <p><b>ACCUSED:</b> {formData.accused}</p>
    <p><b>NAME:</b> {formData.name}</p>
  </div>

  <div className="caseformEst">
    <p><b>RELATION:</b> {formData.relation}</p>
    <p><b>AGE:</b> {formData.age}</p>
    <p><b>DOB:</b> {formData.dob}</p>
  </div>

  <div className="caseformEst">
    <p><b>GENDER:</b> {formData.gender}</p>
    <p><b>CASTE:</b> {formData.caste}</p>
    <p><b>Differently Able:</b> {formData.differentlyAble}</p>
  </div>

  <div className="caseformEst">
    <p><b>EMAIL:</b><u> {formData.email}</u></p>
    <p><b>MOBILE NUMBER:</b><u> {formData.phone}</u></p>
  </div>

  <div className="caseformEst">
    <p><b>OCCUPATION:</b> {formData.occupation}</p>
    <p><b>PIN CODE:</b> {formData.pincode}</p>
  </div>

  <div className="caseformEst">
    <p><b>ADDRESS:</b> <u>{formData.address}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quam assumenda eligendirnatur libero veniam, placeat, iure delectus error, alias iste quidem nesciunt!</u></p>
    <p><b>TALUKA:</b> {formData.taluka}</p>
    <p><b>VILLAGE:</b> {formData.village}</p>
  </div>
  <div className="caseformEst">
    <p><b>STATE:</b> {formData.litigantState}</p>
    <p><b>DISTRICT:</b> {formData.litigantDistrict}</p>
  </div>
  <div className="caseHeads">
    <p><b>CASE DETAILS</b></p>
  </div>
  <div className="caseformEst">
    <p><b>DATE OF CAUSE OF ACTION:</b> {formData.actionDate}</p>
  </div>
  <div className="caseformCasedetails">
    <p><b>CAUSE OF ACTION:  </b>{formData.disputeState}Lorem ipsum dolor sit amet ijfsodkv djfnvoid voejnlkd wefoi consectetur adipisicing elit. Nisi quo molestias quam laborum praesentium! Accusantium!</p>
  </div>
  <div className="caseformCasedetails">
  <p><b>IMPORTANT INFORMATION / SUBJECT / REASON :    </b>{formData.reason}Lorem ipsum dolor sit amet ijfsodkv djfnvoid voejnlkd wefoi consectetur adipisicing elit. Nisi quo molestias quam laborum praesentium! Accusantium!</p>

</div>
<div className="caseformEst">
    <p><b>STATE:</b> {formData.disputeState}</p>
    <p><b>DISTRICT:</b> {formData.disputeDistrict}</p>
  </div>
  <div className="caseformEst">
  <p><b>TALUKA:</b> {formData.disputeTaluka}</p>
    <p><b>VILLAGE:</b> {formData.disputeVillage}</p>
    </div>
    <div className="caseformCasedetails">
    <p><b>ACT :    </b>{formData.act}Lorem ipsum dolor sit amet ijfsodkv djfnvoid voejnlkd wefoi consectetur adipisicing elit. Nisi quo molestias quam laborum praesentium! Accusantium!</p>
    <p><b>SECTION :    </b>{formData.act}Lorem ipsum dolor sit amet ijfsodkv djfnvoid voejnlkd wefoi consectetur adipisicing elit. Nisi quo molestias quam laborum praesentium! Accusantium!</p>

</div>
<div className="caseHeads">
    <p><b>LEGAL HEIR</b></p>
  </div>
  <div className="caseformEst">
  <p><b>PARTY NAME:</b> {formData.partyName}</p>
    <p><b>TYPE:</b> {formData.heirType}</p>
    </div>
    <div className="caseformCasedetails">
    <p><b>LEGAL HEIR NAME:</b> {formData.heirName}</p>
  </div>
  <div className="caseformEst">
  <p><b>NAME:</b> {formData.partyName}</p>
    <p><b>RELATION:</b> {formData.name2}</p>
    </div>
    <div className="caseformEst">
    <p><b>AGE:</b> {formData.heirAge}</p>
    <p><b>DOB:</b> {formData.heirDob}</p>
    <p><b>GENDER:</b> {formData.heirGender}</p>

  </div>
  <div className="caseformEst">
    <p><b>CASTE:</b> {formData.heirCaste}</p>
    <p><b>DIFFERENTLY ABLED:</b> {formData.heirDifferentlyAble}</p>

  </div>
  <div className="caseformEst">
    <p><b>EMAIL:</b> {formData.heirEmail}</p>
    <p><b>OCCUPATION:</b> {formData.heirOccupation}</p>

  </div>
  <div className="caseformEst">
    <p><b>MOBILE:</b> {formData.heirPhone}</p>
    <p><b>PIN CODE:</b> {formData.heirPincode}</p>

  </div>
  <div className="caseformCasedetails">
    <p><b>ADDRESS:</b> <u>{formData.heirAddress}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quam assumenda eligendirnatur libero veniam, placeat, iure delectus error, alias iste quidem nesciunt!</u></p>
</div>
<div className="caseformEst">
    <p><b>STATE:</b> {formData.disputeState}</p>
    <p><b>DISTRICT:</b> {formData.disputeDistrict}</p>
  </div>
  <div className="caseformEst">
  <p><b>TALUKA:</b> {formData.disputeTaluka}</p>
    <p><b>VILLAGE:</b> {formData.disputeVillage}</p>
    </div>
    <div className="caseHeads">
    <p><b>FACT DETAILS</b></p>
  </div>
  <div className="caseformEst">
  <p><b>FACT DATE:</b> {formData.factDate}</p>
    <p><b>FACT TIME:</b> {formData.factTime}</p>
    </div>
    <div className="caseformCasedetails">
    <p><b>FACT:</b> <u>{formData.fact} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quam assumenda eligendirnatur libero veniam, placeat, iure delectus error, alias iste quidem nesciunt!</u></p>
</div>

</div>
<div className="csButtons">
            <Link to="/advocateaccount">
              <button className='nexttabbtn'  >
                back
              </button>
            </Link>
            <button className="nexttabbtn" onClick={handleprint} >
              PRINT
            </button>
          </div>
</div>

































        {/* <div className="cl-section-container">
      <div className="cl-section">
        <h2>Location Information</h2>
        <p>State: {formData.state}</p>
        <p>District: {formData.district}</p>
        <p>Establishment: {formData.establishment}</p>
      </div>

      <div className="cl-section">
        <h2>Case Type Information</h2>
        <p>Case Type: {formData.caseType}</p>
        <p>Relief Sought: {formData.reliefSought}</p>
        <p>Appellant/Respondent: {formData.appellantRespondant}</p>
        <p>Mobile Number: {formData.mobileNo}</p>
      </div>
      </div> */}
        {/* <div className="cl-section-container">
      <div className="section">
        <h2>Litigant Information</h2>
        <p>Litigant Type: {formData.litigantType}</p>
        <p>Accused: {formData.accused}</p>
        <p>Name: {formData.name2}</p>
        <p>Relation: {formData.relation2}</p>
        <p>Age: {formData.age}</p>
        <p>Date of Birth: {formData.dob}</p>
        <p>Gender: {formData.gender}</p>
        <p>Caste: {formData.caste}</p>
        <p>Differently Able: {formData.differentlyAble ? 'Yes' : 'No'}</p>
      </div> */}

        {/* <div className="section">
        <h2>Contact Information</h2>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Occupation: {formData.occupation}</p>
        <p>Address: {formData.address}</p>
        <p>Pincode: {formData.pincode}</p>
      </div>
      </div> */}

        {/* <div className="section">
        <h2>Legal Heir Information</h2>
        <p>Party Name: {formData.partyName}</p>
        <p>Heir Type: {formData.heirType}</p>
        <p>Heir Name: {formData.heirName}</p>
        <p>Relation: {formData.relation2}</p>
        <p>Heir Age: {formData.heirAge}</p>
        <p>Date of Birth: {formData.heirDob}</p>
        <p>Gender: {formData.heirGender}</p>
        <p>Caste: {formData.heirCaste}</p>
        <p>Differently Able: {formData.heirDifferentlyAble ? 'Yes' : 'No'}</p>
        {/* Add more Legal Heir information fields as needed */}
        {/* </div>  */}
        {/* 
      // <div className="section">
      //   <h2>Fact Details</h2>
      //   <p>Fact Date: {formData.factDate}</p>
      //   <p>Fact Time: {formData.factTime}</p>
      //   <p>Fact: {formData.fact}</p>
      // </div> */}

        {/* <div className="section">
        <h2>Case Details</h2>
        <p>Action Cause: {formData.actionCause}</p>
        <p>Reason: {formData.reason}</p>
        <p>Action Date: {formData.actionDate}</p>
        <p>Dispute State: {formData.disputeState}</p>
        <p>Dispute District: {formData.disputeDistrict}</p>
        <p>Dispute Taluka: {formData.disputeTaluka}</p>
        <p>Dispute Village: {formData.disputeVillage}</p>
        <p>Act: {formData.act}</p>
        <p>Section: {formData.section}</p>
        <p>CNR Number: {formData.CnrNumber}</p>
        <p>Unique Code: {formData.uniqueCode}</p>
        {/* Add more Case Details fields as needed */}
        {/* </div> */}


      
    </>
  );
};

export default CaseLegalForm;

