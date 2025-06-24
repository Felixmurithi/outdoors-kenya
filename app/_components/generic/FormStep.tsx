export default function FormStep({
  steps,
  activeStep,
}: {
  steps: string[];

  activeStep: number;
}) {
  return (
    <div>
      <div>
        <Step stepNumber={1} activeStep={activeStep} stepText={steps[0]} />
      </div>
      {steps.slice(1).map((stepText, index) => (
        <div key={index} className="flex">
          <hr
            style={{ width: "100%", height: "1px", backgroundColor: "gray" }}
          />
          <Step stepNumber={index + 2} stepText={stepText} />
        </div>
      ))}
    </div>
  );
  /*************  ✨ Windsurf Command 🌟  *************/
}
/*******  0fbba3c6-c6af-450e-89c8-6dd43936174d  *******/

function Step({
  stepText,
  activeStep,
  stepNumber,
}: {
  activeStep: number;
  stepText: string;
  stepNumber: number;
}) {
  return (
    <span
      className={`bg-lunar-green-400 rounded-full w-8 h-8 flex items-center justify-center ${
        activeStep >= stepNumber ? "bg-lunar-green-600" : ""
      }`}
    >
      {activeStep > stepNumber ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
      ) : (
        stepText
      )}
    </span>
  );
}

// TODO finish it up
