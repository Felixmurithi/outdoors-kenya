export default function MultiFormSteps({
  steps,
  activeStep,
}: {
  steps: number;

  activeStep: number;
}) {
  return (
    <div className="flex gap-2 w-fit mx-auto">
      {Array.from({ length: steps }).map((_, index) => (
        <div key={index} className="flex gap-2">
          {index > 0 && (
            <hr
              className="bg-stone-300 self-center min-w-8 sm:min-w-12"
              style={{ width: "100%", height: "3px" }}
            />
          )}

          <Step stepNumber={index + 1} activeStep={activeStep} />
        </div>
      ))}
    </div>
  );
  /*************  ✨ Windsurf Command 🌟  *************/
}
/*******  0fbba3c6-c6af-450e-89c8-6dd43936174d  *******/

function Step({
  activeStep,
  stepNumber,
}: {
  activeStep: number;
  stepNumber: number;
}) {
  return (
    <span
      className={`bg-lunar-green-400 rounded-full min-w-8 min-h-8 flex items-center justify-center ${
        activeStep >= stepNumber ? "bg-lunar-green-600" : ""
      } self-start`}
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
        stepNumber
      )}
    </span>
  );
}

// TODO
