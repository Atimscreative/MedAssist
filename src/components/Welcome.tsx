import Button from "./Button";

const Welcome = ({ handleNext }: { handleNext: () => void }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-1 text-2xl">Welcome on board!</h1>
        <p>What name would you like us to call you?</p>
      </div>

      <form id="user-name" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" className="block">
          <span className="mb-1.5 inline-block text-sm font-semibold">
            Your name?
          </span>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input w-full rounded-md border border-neutral-300 px-4 py-2.5 placeholder:text-sm focus:border-cyan-900 focus:ring-cyan-900"
          />
        </label>

        <Button type={"submit"} children={"Continue"} className="mt-4" />
      </form>
    </div>
  );
};

export default Welcome;
