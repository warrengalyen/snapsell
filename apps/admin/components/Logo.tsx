import Image from 'next/image';
type Props = {
  logoSrc: string;
  storeName: string;
};
export default function Logo({ logoSrc, storeName }: Props) {
  return (
    <div className="px-2 pt-2">
      {logoSrc ? (
        <Image src={logoSrc} alt={storeName} width={75} height={75} />
      ) : (
        <h2 className="text-2xl font-medium">{storeName}</h2>
      )}
    </div>
  );
}
