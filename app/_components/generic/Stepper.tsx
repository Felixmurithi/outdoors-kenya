export default function Stepper({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) {
  return (
    <div className="flex w-fit mx-auto">
      {steps.map((step, index) => (
        <Step
          key={index}
          index={index}
          activeStep={activeStep}
          step={step}
          lastStep={index === steps.length - 1}
        />
      ))}
    </div>
  );
}

function Step({
  activeStep,
  step,
  index,
  lastStep,
}: {
  step: string;
  activeStep: number;
  index: number;
  lastStep?: boolean;
}) {
  return (
    <div className="grid">
      <div className="flex">
        {index === 0 ? null : (
          <div className="self-center">
            <hr
              className="bg-stone-300  min-w-8 sm:min-w-12"
              style={{ width: "100%", height: "3px" }}
            />
            <span className="min-w-8 sm:min-w-12"> {"  "}</span>
          </div>
        )}

        <span
          className={`bg-lunar-green-400 rounded-full min-w-8 min-h-8 flex items-center justify-center ${
            activeStep >= index ? "bg-lunar-green-600" : ""
          } self-start`}
        >
          {activeStep > index ? (
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
            index + 1
          )}
        </span>
        {lastStep ? null : (
          <div className="self-center">
            <span className="min-w-8 sm:min-w-12"> {"  "}</span>
            <hr
              className="bg-stone-300 self-center min-w-8 sm:min-w-12"
              style={{ width: "100%", height: "3px" }}
            />
          </div>
        )}
      </div>

      <span
        className={`${
          index !== 0 && !lastStep ? "mx-auto" : lastStep ? "ml-auto" : ""
        } ${lastStep ? "ml-auto" : "mx-"} w-min text-sm text-stone-500`}
      >
        {step}
      </span>
    </div>
  );
}

// TODO
