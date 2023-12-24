import React, { useState } from 'react';
// import './AdvocateForm.css'; // Import your CSS file for styling

const AdvocateForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <div className="left-box">
              {/* Left side radio buttons go here */}
              <label>
                <input type="radio" name="advocateType" value="junior" />
                Junior Advocate
              </label>
              <label>
                <input type="radio" name="advocateType" value="senior" />
                Senior Advocate
              </label>
              <label>
                <input type="radio" name="advocateType" value="associate" />
                Associate Advocate
              </label>
            </div>

            <div className="right-box">
              {/* Right side inputs go here */}
              <label>
                Advocate Name:
                <input type="text" name="advocateName" />
              </label>
              {/* Add more right side inputs as needed */}
            </div>

            <button onClick={handleNext}>Save and Next</button>
          </div>
        );

      case 2:
        return (
          <div className="step">
            <div className="left-box">
              {/* Display tick or completed indicator for Step 1 */}
              <p>✓ Advocate Type selected</p>
            </div>

            <div className="right-box">
              {/* Right side inputs for the next step (e.g., address) go here */}
              <label>
                Address:
                <input type="text" name="address" />
              </label>
              {/* Add more right side inputs as needed */}
            </div>

            <button onClick={handleNext}>Save and Next</button>
          </div>
        );

      // Add more cases for additional steps as needed

      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default AdvocateForm;
