type Props = {
  firstName: string;
  lastName: string;
  firstLine: string;
  secondLine?: string;
  city: string;
  state?: string;
  postcode: string;
  country: string;
};

export default function Address({ firstName, lastName, firstLine, secondLine, city, state, postcode, country }: Props) {
  return (
    <>
      <div className="">
        <p className="font-bold mb-2">
          <span>{firstName} </span>
          <span>{lastName}</span>
        </p>
        <p>{firstLine}</p>
        {!!secondLine && <p>{secondLine}</p>}
        <p>{city}</p>
        {!!state && <p>{state}</p>}
        <p className="uppercase">{postcode}</p>
        <p className="uppercase">{country}</p>
      </div>
    </>
  );
}
