export default function AnnouncementBar({ backgroundColor }: {backgroundColor: string}) {
  return (
    <div className="bg-gray-800 text-white text-sm p-3 text-center" style={{backgroundColor: backgroundColor}}>
      Fast shipping US wide!
    </div>
  );
}
