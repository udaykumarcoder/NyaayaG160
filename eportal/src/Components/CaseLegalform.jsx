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
import './CaseLegalform.css'; // Import the CSS file for styling

const CaseLegalForm = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    // Handle case where formData is not available
    return <div>No data available</div>;
  }

  return (
    <div className="case-legal-form">
      <h1>Case Legal Form</h1>

      <div className="section">
        <h2>Location Information</h2>
        <p>State: {formData.state}</p>
        <p>District: {formData.district}</p>
        <p>Establishment: {formData.establishment}</p>
      </div>

      <div className="section">
        <h2>Case Type Information</h2>
        <p>Case Type: {formData.caseType}</p>
        <p>Relief Sought: {formData.reliefSought}</p>
        <p>Appellant/Respondent: {formData.appellantRespondant}</p>
        <p>Mobile Number: {formData.mobileNo}</p>
      </div>

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
      </div>

      <div className="section">
        <h2>Contact Information</h2>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Occupation: {formData.occupation}</p>
        <p>Address: {formData.address}</p>
        <p>Pincode: {formData.pincode}</p>
      </div>

      <div className="section">
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
      </div>

      <div className="section">
        <h2>Fact Details</h2>
        <p>Fact Date: {formData.factDate}</p>
        <p>Fact Time: {formData.factTime}</p>
        <p>Fact: {formData.fact}</p>
      </div>

      <div className="section">
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
      </div>

    </div>
  );
};

export default CaseLegalForm;

