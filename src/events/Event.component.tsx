const EventComponent: React.FC = () => {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event);
  };

  return (
    <div>
      <input type='text' onChange={handleOnChange} />
    </div>
  );
};

export default EventComponent;
