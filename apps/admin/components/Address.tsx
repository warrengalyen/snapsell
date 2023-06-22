type Props = {
  firstName: string;
  lastName: string;
  firstLine: string;
  secondLine: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
};

export default function Address({ firstName, lastName, firstLine, secondLine, city, state, postcode, country }: Props) {
  return (
    <>
      <div className="border p-5">
        <p className="font-bold">
          <span>{firstName} </span>
          <span>{lastName}</span>
        </p>
        <br></br>
        <p>{firstLine}</p>
        <p>{secondLine}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p className="uppercase">{postcode}</p>
        <p className="uppercase">{country}</p>
      </div>
    </>
  );
}
