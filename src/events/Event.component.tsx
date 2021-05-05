const EventComponent: React.FC = () => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleOnDragStart = (event: React.DragEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input type='text' onChange={handleOnChange} />
      <div draggable onDragStart={handleOnDragStart}>Drag me!</div>
    </div>
  );
};

export default EventComponent;
