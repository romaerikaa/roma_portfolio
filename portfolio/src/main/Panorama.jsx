import bg from "../asset4/bg.png";

export default function Panorama() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="panorama-track"
        style={{ backgroundImage: `url(${bg})` }}
      />
    </div>
  );
}
